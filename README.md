# Todos frontend (Svelte)

A Deeper Than Code frontend example by Arthur Bernier Jr: Svelte 5 (runes), SvelteKit 3 with file-based routing and `load` functions, Vite 8, built as a static site with `@sveltejs/adapter-static` and served by `serve` on Railway.

Live: https://dtc-svelte-production.up.railway.app

It is the code from the Svelte chapter, built exactly as written: list, show, create, edit and delete todos against a Todos API.

## Which backend it talks to

This deploy is pointed at the Rust / Axum API: https://api-production-da990.up.railway.app

The API origin comes from `VITE_API_URL` in `.env.production` (origin only, no path, no trailing slash). It is declared in `src/env.js` as a public, static variable, so SvelteKit inlines it at build time, and the code builds `${API}/todos` and `${API}/todos/${id}` itself.

## Switch to another backend

Every Deeper Than Code backend serves the same contract, so any of them works:

| Language | Framework | Repo | Live API |
|---|---|---|---|
| Python | Django REST framework | https://github.com/arthurbernierjr/dtc-python-api | https://api-production-02380.up.railway.app |
| Ruby | Rails | https://github.com/arthurbernierjr/dtc-ruby-api | https://api-production-0197.up.railway.app |
| Go | chi | https://github.com/arthurbernierjr/dtc-go-api | https://api-production-a3ab.up.railway.app |
| Java | Spring Boot | https://github.com/arthurbernierjr/dtc-java-api | https://api-production-c419.up.railway.app |
| C# | ASP.NET Core | https://github.com/arthurbernierjr/dtc-cs-api | https://api-production-efe3.up.railway.app |
| PHP | Laravel | https://github.com/arthurbernierjr/dtc-php-api | https://api-production-2278d.up.railway.app |
| Rust | Axum | https://github.com/arthurbernierjr/dtc-rust-api | https://api-production-da990.up.railway.app |
| Dart | shelf | https://github.com/arthurbernierjr/dtc-dart-api | https://api-production-5f5ac.up.railway.app |

Change the value in `.env.production` and rebuild (`npm run build`), or push and Railway rebuilds it for you.

## Run it locally

```sh
npm install
npm run dev
```

The dev server is on http://localhost:5173. Without a `VITE_API_URL` the app falls back to `http://localhost:8080`, so run any backend from the table on that port, or create `.env.local` with `VITE_API_URL=<origin>` to use a deployed one.

## Production build

```sh
npm run build   # static site in build/
npm start       # serve -s build -l $PORT
```

Every route is served by the same `index.html` (`fallback: "index.html"` in `vite.config.js`) and rendered in the browser (`ssr = false` in `src/routes/+layout.js`), which is what a static host needs for `/post/:id` and `/edit/:id`.
