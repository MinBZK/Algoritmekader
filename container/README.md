# Algoritmekader-container

Statische Algoritmekader-site, geserveerd door een geharde nginx. Eén image,
omgevings-onafhankelijk: build één keer, draai op de root of onder een subpad via
`SITE_URL`.

- Non-root, poort **8080**, read-only-rootfs-compatibel (alleen `/tmp` schrijfbaar).
- Zet zelf alle security-headers (HSTS, CSP, X-Frame-Options, …) — niet dubbel toevoegen.
- TLS termineert upstream; de container doet alleen HTTP op 8080.

## Bouwen

```bash
docker build -t algoritmekader -f container/Dockerfile .   # vanuit de repo-root
```

## Draaien

```bash
# root (default)
docker run -p 8080:8080 algoritmekader                      # -> http://localhost:8080

# onder een subpad / eigen domein
docker run -e SITE_URL=https://algoritmes.overheid.nl/kader -p 8080:8080 algoritmekader
```

### `SITE_URL`

Optioneel. Leeg of `/` = root. De waarde stuurt twee dingen:

- **host** (`https://algoritmes.overheid.nl`) → absolute `canonical` / `og:url` / `sitemap`.
- **pad** (`/kader`) → interne links, assets en routing.

Een volledig URL is de aanrader voor productie (correcte canonical/sitemap). Alleen
een pad mag ook (`SITE_URL=/kader`); dan worden de absolute URL's host-loos.

## Reverse proxy / ingress

De container serveert het subpad **zelf**. Stuur het pad daarom **ongestript**
door — `pathType: Prefix`, géén `rewrite-target`. `SITE_URL` en het doorgestuurde
prefix moeten gelijk zijn.

| Publieke request | Container ontvangt (poort 8080) |
|---|---|
| `…/kader/` | `GET /kader/` |
| `…/kader/onderwerpen/` | `GET /kader/onderwerpen/` |

```yaml
# Kubernetes nginx-ingress — geen rewrite
spec:
  rules:
    - host: algoritmes.overheid.nl
      http:
        paths:
          - path: /kader
            pathType: Prefix
            backend: { service: { name: algoritmekader, port: { number: 8080 } } }
```

## Health checks

Vaste paden op de root (los van het prefix), niet gelogd. Statische nginx: live == ready.

```yaml
livenessProbe:
  httpGet: { path: /healthz, port: 8080 }
readinessProbe:
  httpGet: { path: /readyz, port: 8080 }
```
