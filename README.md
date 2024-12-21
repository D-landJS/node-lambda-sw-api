# Star AWS Api Lambda

Para ejecutar la API Lambda localmente, sigue estos pasos:

## Despliegue local de la API

1. Copia el archivo `.env.example` a un nuevo archivo `.env` y ajusta las variables de entorno según sea necesario.

   ```c
   # DATABASE CREDENTIALS MYSQL
   MYSQL_ROOT_PASSWORD='123456'
   DATABASE_MYSQL_HOST='localhost'
   DATABASE_MYSQL_NAME='db_starwars'
   DATABASE_MYSQL_USER='root'
   DATABASE_MYSQL_PASSWORD='123456'
   DATABASE_MYSQL_PORT='3306'
   ```

2. Instala MYSQL con Docker compose => 'docker compose up -d'
3. Ejecuta el script en la base de datos => 'database.sql'
4. instala las dependencias => 'npm install'
5. Ejecuta el proyecto en local => 'npm run local'

## Despliegue de la API Lambda en AWS

1. Setea las variables de entorno en AWS con las credenciales de la base de datos.
   ```c
   # DATABASE CREDENTIALS MYSQL
   MYSQL_ROOT_PASSWORD=''
   DATABASE_MYSQL_HOST=''
   DATABASE_MYSQL_NAME=''
   DATABASE_MYSQL_USER=''
   DATABASE_MYSQL_PASSWORD=''
   DATABASE_MYSQL_PORT=''
   ```

![](https://imgur.com/Zy3Jydo.png) 2. Despliega la API Lambda con Serverless Framework en AWS => 'npm run deploy'

## Documentación

1. Abrir el archivo `swagger.yaml`

## Test

1. Ejecutar los test => 'npm run test'
