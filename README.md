# Next.js Testing con TypeScript

Proyecto de práctica para probar aplicaciones **Next.js 14 (App Router)** con **TypeScript**, **Jest** y **React Testing Library**.

## Stack

- Next.js 14.2 · React 18 · TypeScript
- Tailwind CSS
- Jest 29 + `jest-environment-jsdom`
- React Testing Library, `@testing-library/jest-dom`, `@testing-library/user-event`
- ESLint con `eslint-plugin-testing-library` y `eslint-plugin-jest-dom`
- Axios

## Estructura

```text
src/
├── app/          # Rutas y componentes de la aplicación (App Router)
└── __tests__/    # Pruebas unitarias y de componentes
jest.config.ts    # Configuración de Jest
jest.setup.ts     # Setup global (jest-dom)
```

## Uso

```bash
npm install
npm run dev          # http://localhost:3000
npm test             # ejecutar pruebas
npm run test:watch   # pruebas en modo watch
npm run lint
npm run build
```
