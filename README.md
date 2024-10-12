# 3D Dance app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

## 実行

```bash
pnpm run dev
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
});
```

### Directory tree

<pre>
├── README.md
├── package.json
├── tsconfig.json
├── eslint.config.js
├── pnpm-lock.yaml
├── index.html
├── vite.config.ts
├── public/ # Assets like images, icons, and other static files
│ └── ...
├── src/
│ ├── assets/ # Store 3D models and textures here
│ │ ├── models/
│ │ │ └── model.ppm # 3D character files (PPM, OBJ, etc.)
│ │ └── textures/
│ │ └── texture.jpg
│ ├── components/ # React components
│ ├── scenes/ # Three.js scenes and configurations
│ ├── App.tsx # Main React app
│ └── main.tsx # Entry point
├── tsconfig.node.json
├── tsconfig.app.json
├── memo.txt
└── node_modules/
</pre>
