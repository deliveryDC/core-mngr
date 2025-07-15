# Inventario de Tienda de Ropa

Este proyecto es una aplicación para gestionar el inventario de una tienda de ropa. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre prendas y tallas.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
inventario-tienda-ropa
├── src
│   ├── app.ts                     # Punto de entrada de la aplicación
│   ├── controllers
│   │   ├── prendasController.ts    # Controlador para manejar prendas
│   │   └── tallasController.ts     # Controlador para manejar tallas
│   ├── models
│   │   ├── prenda.ts              # Modelo que representa una prenda
│   │   └── talla.ts               # Modelo que representa una talla
│   ├── routes
│   │   ├── prendasRoutes.ts        # Rutas para las operaciones de prendas
│   │   └── tallasRoutes.ts         # Rutas para las operaciones de tallas
│   └── types
│       └── index.ts               # Definición de tipos e interfaces
├── package.json                    # Configuración de npm
├── tsconfig.json                   # Configuración de TypeScript
└── README.md                       # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```
npm install
```

## Uso

Para iniciar la aplicación, utiliza el siguiente comando:

```
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.