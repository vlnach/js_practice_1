## 1. Создание проекта

```bash
npm create vite@latest usd-eur-chart -- --template react
cd usd-eur-chart
npm install
```

## 2. Подгрузка библиотек

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/x-charts
```

```bash
npm install @tanstack/react-query
npm install --save-dev json-server
```

## 3. Закидываю JSON в проект в главную папку

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## 4. Настраиваю json-server через скрипт

"json-server --watch usd.json --port 3000"

# 5. Поднять локальный API

npm run server # <http://localhost:3000/Series>

# 6. Запустить фронтенд

npm run dev # <http://localhost:5173/>

## Playwright

```bash
npm init playwright@latest

npx playwright test --update-snapshots


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```
