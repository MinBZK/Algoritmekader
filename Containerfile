FROM python:3.14-slim AS builder

RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ARG SITE_URL=http://localhost:8080/
RUN sed -i "s|^site_url:.*|site_url: ${SITE_URL}|" mkdocs.yml

ARG VERSION
RUN if [ -n "$VERSION" ]; then \
      sed -i "s/development/${VERSION}/g" docs/version.md; \
    fi

RUN mkdocs build

FROM nginxinc/nginx-unprivileged:stable-alpine-slim
COPY --from=builder /app/site /usr/share/nginx/html

RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    error_page 404 /404.html; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header Referrer-Policy "strict-origin-when-cross-origin" always; \
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always; \
    add_header Content-Security-Policy "default-src '\''self'\''; script-src '\''self'\'' '\''unsafe-inline'\'' https://cdnjs.cloudflare.com https://github.com https://release-assets.githubusercontent.com; style-src '\''self'\'' '\''unsafe-inline'\''; img-src '\''self'\'' data:; font-src '\''self'\'' data:;" always; \
    add_header Strict-Transport-Security "max-age=31536000" always; \
    location /.well-known/security.txt { \
        return 302 https://www.ncsc.nl/.well-known/security.txt; \
    } \
    location / { \
        try_files $uri $uri/ =404; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080
