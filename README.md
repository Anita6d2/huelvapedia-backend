
## Description

Este archivo contiene el backend de HuelvapediaApp.

Para levantar el proyecto en modo desarrollador requiere de una MongoDB:
1. Tener una imagen de "mongo" en Docker Desktop
2. Configuracion del archivo docker-compose.yml
3. Ejecutar `docker compose up -d`
4. Configurar las variables de entorno del archivo .env y ejecutar `npm i @nestjs/config`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).
