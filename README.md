# `Learn-Angular`

# 🅰️ Angular

Este proyecto se generó utilizando Angular CLI versión 19.2.4.

Es una plataforma y framework de estructura para desarrollo web basado en TypeScript, mantenido por Google y basado en módulos.

## Origen

Fue creado por Misko Hevery y presentado por Google en 2010.
Basado en JavaScript, con un enfoque en Data Binding bidireccional y MVC (Modelo-Vista-Controlador), tenía problemas de rendimiento y escalabilidad en aplicaciones grandes.

Soporte oficial finalizado en diciembre de 2021.

## Características

- **Basado en TypeScript**: Mejora la mantenibilidad y escalabilidad con tipado estático.
- **Arquitectura basada en Componentes:** Se organiza en módulos y componentes reutilizables.
- **Data Binding bidireccional:** Sincroniza automáticamente el modelo de datos con la vista.
- **Directivas y Pipes:** Personaliza la vista sin alterar la lógica del componente.
- **Dependency Injection (DI):** Sistema de inyección de dependencias potente y nativo.
- **Módulos (NgModules):** Facilita la organización del código.
- **Lazy Loading:** Carga módulos bajo demanda para mejorar el rendimiento.
- **CLI Poderosa:** Facilita la generación de componentes, servicios, módulos y más.
- **Soporte para SSR (Server-Side Rendering) con Angular Universal:** Mejora el SEO y rendimiento de la app.

## Uso de Angular

### Cuando usar Angular

- Aplicaciones empresariales grandes y escalables.
- Proyectos que requieren una arquitectura bien estructurada.
- Aplicaciones con necesidad de modularidad y mantenibilidad.
- Desarrollo en equipo donde TypeScript y DI ayudan a organizar el código.

### Cuando NO usar Angular

- Aplicaciones pequeñas o ligeras (React o Vue pueden ser más ágiles).
- Desarrollo rápido de MVPs (React suele ser más flexible para esto).

# 🔓 Instalación y creación

## Instalar Angular CLI

```bash
node --version
```

Instalar Angular CLI, herramienta de línea de comandos que facilita la creación y gestión de proyectos Angular. Instálala globalmente con npm:

```bash
npm install -g @angular/cli
```

Verifica que la instalación fue exitosa con:

```bash
ng version
```

## Crear un Nuevo Proyecto Angular

```bash
ng new <nombre-proyecto>
ng new <nombre-proyecto> --skip-tests #sin pruebas
```

```bash
cd <nombre-proyecto>
```

Para iniciar un servidor de desarrollo local, ejecute uno:

```bash
ng serve --open #Abre directamente el navegador
ng serve
```

Para generar un nuevo componente, ejecute cualquiera de los siguientes:

```bash
ng generate component <nombre-componente>
ng g c <nombre-componente>
```
para que no se generen los 4 archivos por defecto de usan las siguientes opciones:
- `--skip-tests` No genera el archivo de pruebas (.spec.ts)
- `--inline-style` Inserta los estilos directamente en el archivo .ts en vez de crear .css
- `--inline-template` Inserta el HTML directamente en el archivo .ts en vez de crear .html
me reultara en un solo archivo ts

```bash
ng g c <nombre-componente> --skip-tests --inline-style --inline-template
```

Para obtener una lista completa de los esquemas disponibles (como components, directives, o pipes), ejecute:

```bash
ng generate --help
```

Para construir el proyecto ejecute:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de compilación en el dist/ directorio. De forma predeterminada, la compilación de producción optimiza el rendimiento y la velocidad de tu aplicación.

Para ejecutar pruebas unitarias con el ejecutor de pruebas Karma , utilice el siguiente comando:

```bash
ng test
```

Para pruebas de extremo a extremo (e2e), ejecute:

```bash
ng e2e
```

Angular CLI no incluye un framework de pruebas integral por defecto. Puedes elegir uno que se adapte a tus necesidades.

# ⚙️ Estructura de Proyecto

```bash
Proyecto/
│── .vscode/             # Configuración del editor VS Code
│── node_modules/        # Dependencias de Node.js
│── public/              # Archivos públicos (favicon, etc.)
│   ├── favicon.ico         # Ícono del proyecto
│── src/                 # Código fuente del proyecto
│   ├── app/                # Código fuente principal
│   │   ├── app.component.css     # Estilos específicos del componente raíz
│   │   ├── app.component.html    # Plantilla HTML del componente raíz
│   │   ├── app.component.spec.ts # Pruebas unitarias para componente raíz
│   │   ├── app.component.ts      # Componente raíz, envuelve toda la app
│   │   ├── app.config.ts         # Archivo de configuración global de la app
│   │   ├── app.routes.ts         # Definición de las rutas de la aplicación
│   ├── index.html          # Archivo HTML principal
│   ├── main.ts             # Punto de entrada, primer archivo que se carga
│   ├── styles.css          # Estilos globales
│── .editorconfig        # Configuración de estilo de código
│── .gitignore           # Archivos y carpetas a ignorar en Git
│── angular.json         # Configuración del proyecto Angular
│── package-lock.json    # Bloqueo de versiones de dependencias
│── package.json         # Dependencias y scripts del proyecto
│── README.md            # Documentación del proyecto
│── tsconfig.app.json    # Configuración de TypeScript para la aplicación
│── tsconfig.json        # Configuración global de TypeScript
│── tsconfig.spec.json   # Configuración de TypeScript para pruebas
```

Para comenzar, limpiar el proeyecto vaciando `app.component.html` y probar con algo basico:

```bash
<h1>Hola mundo en Angular</h1>
```

# 🔍 Comparación con otras tecnologías

| Característica           | Angular                        | React                  | Vue                   |
| ------------------------ | ------------------------------ | ---------------------- | --------------------- |
| **Lenguaje base**        | TypeScript                     | JavaScript, typeScript | JavaScript            |
| **Arquitectura**         | Basado en módulos              | Basado en componentes  | Basado en componentes |
| **Data Binding**         | Bidireccional                  | Unidireccional         | Ambas                 |
| **Estado Global**        | RxJS, NgRx                     | Redux, Context API     | Vuex, Pinia           |
| **CLI Oficial**          | Sí (Angular CLI)               | No (Usa Vite, CRA)     | Sí (Vue CLI)          |
| **Renderizado**          | SPA, SSR con Angular Universal | SPA, SSR con Next.js   | SPA, SSR con Nuxt.js  |
| **Curva de Aprendizaje** | Alta                           | Media                  | Baja                  |

# ⛑️ Recursos

- Documentación: [Angular.dev](https://angular.dev/)
- Practicar: [Challenge Angular](https://angular-challenges.vercel.app/)
- Proyectos: [DevProjects](https://www.codementor.io/projects/angular)
