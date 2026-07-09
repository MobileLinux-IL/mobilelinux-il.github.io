# Israel Mobile Linux Community

Static site with resources and guides for running Linux on mobile devices — Ubuntu Touch and more. Hosted on GitHub Pages at [mobilelinux-il.github.io](https://mobilelinux-il.github.io).

Telegram: <https://t.me/+HJlhVhZYEx5jYjc0>

**All site content must be in Hebrew.** Product names, commands and code stay in English (e.g. `Ubuntu Touch`, `Waydroid`, `waydroid prop set ...`), but every bit of explanatory text — headings, notes, descriptions — is written in Hebrew. Every HTML page needs `<html lang="he" dir="rtl">`.

## Run locally

```bash
npx http-server . -p 8000 -c-1
```

Open <http://127.0.0.1:8000>. The `-c-1` flag disables caching so edits show up immediately.

## Add a distro

1. Copy `src/distributions/ubuntu-touch.html` to a new name (e.g. `postmarketos.html`).
2. Edit the tables and headings — in Hebrew.
3. Add a card linking to it in `src/distributions/index.html`.
