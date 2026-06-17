# Algoritmekader-container

De statische Algoritmekader-site in een container, op basis van een non-root
nginx-image. Met `SITE_URL` bepaal je of de site op de root van een domein draait
of onder een subpad.

Verder:

* Draait non-root op poort 8080 en werkt met een read-only root filesystem (alleen `/tmp` is schrijfbaar).
* De container zet zelf deze security-headers:
    * `Content-Security-Policy`
    * `Strict-Transport-Security`
    * `X-Content-Type-Options`
    * `X-Frame-Options`
    * `Referrer-Policy`
    * `Permissions-Policy`
    * `Cross-Origin-Opener-Policy`
    * `Cross-Origin-Resource-Policy`
    * `X-Permitted-Cross-Domain-Policies`

## Image ophalen of bouwen

De release-image wordt op een versie-tag (`v*`) gepubliceerd naar GitHub
Container Registry:

```bash
docker pull ghcr.io/minbzk/algoritmekader:<versie>
```

Previews van pull requests en main staan apart in
`ghcr.io/minbzk/algoritmekader/preview`; die zijn niet bedoeld voor productie.

Zelf bouwen kan ook:

```bash
docker build -t algoritmekader -f container/Dockerfile .   # vanuit de repo-root
```

## Draaien

```bash
# op de root van het domein (standaard)
docker run -p 8080:8080 algoritmekader                      # http://localhost:8080

# onder een subpad of eigen domein
docker run -e SITE_URL=https://algoritmes.overheid.nl/kader -p 8080:8080 algoritmekader
```

Heb je de image uit GHCR getrokken, gebruik dan `ghcr.io/minbzk/algoritmekader:<versie>`
in plaats van `algoritmekader`.

## SITE_URL

`SITE_URL` is optioneel. Laat je hem leeg (of `/`), dan draait de site op de root
van het domein. De waarde bepaalt twee dingen:

* De host (`https://algoritmes.overheid.nl`) wordt gebruikt voor de absolute `canonical`, `og:url` en `sitemap`.
* Het pad (`/kader`) wordt gebruikt voor de interne links, de assets en de routing.

Voor productie geef je het volledige URL op, dan kloppen de canonical en de
sitemap. Alleen een pad mag ook (`SITE_URL=/kader`), maar dan missen die absolute
URL's de host.

## Reverse proxy of ingress

De container serveert het subpad zelf. Stuur het pad daarom ongestript door naar
de container: `pathType: Prefix`, zonder `rewrite-target`. Het pad dat je
doorstuurt en `SITE_URL` moeten hetzelfde prefix hebben.

| Publieke request | Wat de container krijgt (poort 8080) |
|---|---|
| `…/kader/` | `GET /kader/` |
| `…/kader/onderwerpen/` | `GET /kader/onderwerpen/` |

```yaml
# Kubernetes nginx-ingress, zonder rewrite
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

`/healthz` en `/readyz` zitten op een vast pad op de root van het domein, los van
het prefix, en worden niet gelogd. Voor een statische nginx is live hetzelfde als
ready, dus beide geven simpelweg een 200 terug.

```yaml
livenessProbe:
  httpGet: { path: /healthz, port: 8080 }
readinessProbe:
  httpGet: { path: /readyz, port: 8080 }
```
