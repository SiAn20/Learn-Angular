
# LearnAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# `Learn-Angular`
# 🅰️ Angular
Framework de desarrollo web basado en TypeScript, mantenido por Google y esta basado en módulos.
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
# 🔓 Creación e instalación
# ⚙️ Estructura de Proyecto
```bash
my-app/
│── src/
│   ├── app/                # Código fuente principal
│   │   ├── components/     # Componentes reutilizables
│   │   ├── services/       # Servicios inyectables
│   │   ├── app.module.ts   # Módulo principal
│   │   ├── app.component.ts# Componente raíz
│   │   ├── app-routing.module.ts # Módulo de rutas
│   ├── assets/             # Recursos estáticos
│   ├── environments/       # Configuraciones por entorno
│── angular.json            # Configuración del proyecto
│── package.json            # Dependencias del proyecto
│── tsconfig.json           # Configuración de TypeScript
```
# 🔍 Comparación con otras tecnologías
| Característica     | Angular         | React            | Vue             |
|-------------------|----------------|-----------------|----------------|
| **Lenguaje base** | TypeScript      | JavaScript      | JavaScript     |
| **Arquitectura**  | Basado en módulos | Basado en componentes | Basado en componentes |
| **Data Binding**  | Bidireccional   | Unidireccional  | Ambas          |
| **Estado Global** | RxJS, NgRx      | Redux, Context API | Vuex, Pinia |
| **CLI Oficial**   | Sí (Angular CLI) | No (Usa Vite, CRA) | Sí (Vue CLI) |
| **Renderizado**   | SPA, SSR con Angular Universal | SPA, SSR con Next.js | SPA, SSR con Nuxt.js |
| **Curva de Aprendizaje** | Alta | Media | Baja |

# ⛑️ Recursos
- Documentación: [Angular.dev](https://angular.dev/)
