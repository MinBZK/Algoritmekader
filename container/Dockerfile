FROM python:3.14-slim AS builder

RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Build with a fixed placeholder site_url. The real public origin and path
# prefix are injected at runtime by nginx (see container/default.conf.template),
# so a single image is environment-agnostic: build once, deploy under any
# host/path via the $SITE_URL runtime env.
RUN sed -i "s|^site_url:.*|site_url: https://ak-runtime-host.invalid/ak-runtime-base/|" mkdocs.yml

ARG VERSION
RUN if [ -n "$VERSION" ]; then \
      sed -i "s/development/${VERSION}/g" docs/version.md; \
    fi

RUN mkdocs build

# sitemap.xml.gz is pre-compressed and cannot be rewritten by sub_filter at
# runtime; drop it so only the (rewritable) sitemap.xml is served.
RUN rm -f site/sitemap.xml.gz

# Hardened, non-root, daily-patched + signed nginx base (RijksICTGilde),
# pinned by tag + digest. Inherits the nginx-unprivileged entrypoint, so the
# envsubst-on-templates + .envsh mechanism still works. We ship our own
# nginx.conf / security-headers.conf / server template on top.
#
# Let op: upstream bewaart maar ~30 datum-tags (~5 weken). Een pin die ouder
# is verdwijnt uit het register en de build faalt dan met "not found" -- niet
# met een waarschuwing. Dependabot (ecosystem "docker", directory /container)
# ververst dit wekelijks, maar pas zodra dit bestand op de default branch
# staat; Dependabot kijkt niet naar feature branches.
FROM ghcr.io/rijksictgilde/nginx-base:2026.07.29@sha256:2b40227d90e8b1072c31585f31ff50baddf34579da294dd6f1e785c385bbead0
COPY --from=builder /app/site /usr/share/nginx/html
COPY container/nginx.conf /etc/nginx/nginx.conf
COPY container/security-headers.conf /etc/nginx/security-headers.conf
COPY container/default.conf.template /etc/nginx/templates/default.conf.template
COPY container/docker-entrypoint.d/10-derive-site-url.envsh /docker-entrypoint.d/10-derive-site-url.envsh

# Optional runtime config: the full public base URL the site is served under,
# e.g. https://algoritmes.overheid.nl/kader. Unset => served at the domain root.
ENV SITE_URL=""
# Render the config template into the writable tmpfs so the image runs on a
# read-only root filesystem (OpenShift restricted-v2), and only substitute our
# own variables (leave nginx's $uri/$request_filename untouched).
ENV NGINX_ENVSUBST_OUTPUT_DIR=/tmp
ENV NGINX_ENVSUBST_FILTER="^(SITE_ORIGIN|BASE_PATH|BARE_PREFIX_REDIRECT)$"

EXPOSE 8080
