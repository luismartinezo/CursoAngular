# NODEJS
## CREAR PROYECTO
Corremos el comando npm init para crear el archivo json

Añadir librerias al proyecto
- npm install express --save
- npm install body-parse --save  : convierte las peticiones que se hace en el backEnd a formato json
- npm install connect-multiparty --save  :Permite subir archivos a mi backend y poner trabajar con file y guardarlo en una carpeta del server
- npm install mongoose  : ORM para MongoDb
- npm install nodemon --save-dev :Cuando exista un cambio se refresque el servidor de nodeJs, instala como dependencia de desarrollo, es decir que en produccion no funcionara

Creamos el archivo index.js que indicamos en el packege.json

En el package.json agregamos "start": "nodemon index.js" cada que se lanze npm start se ejecuta con nodemon el archivo index.js

## CREAR BASE DE DATOS
{"_id":"5cf92a60872a3253882a178c",
"name":"Blog",
"description":"Blog Personal",
"category":"Informatica",
"languages":"PHP,Mysql,css"}

## CONEXION DB CON NODE
archivo index.js

## CREAR SERVIDOR CON NODEJS Y EXPRESS
Creamos un archivo llamado app.js para guardar todas las configuraciones para trabajar con express

## USAR UN CLIENTE RESTFULL
El mas conocido se llama postman
El metodo post sirve para guardar recursos en el servidor y el get para consultar por url,
por postman podemos configurar como queremos que quede nuestra api, si cambiamos el metodo a post podemos enviar parametros al servidor y recibirlos
por ejemplo: 

    app.get('/test', (req, res) => {
        // console.log(req.param('nombre')); Forma deprecada el params solo es cuando se envian parametros por url
        console.log(req.body.nombre);
        res.status(200).send({
            message: "Hola desde la Api NodeJs"
        });
    })
Nos mostrara en la consola el parametro recibido nombre:luis

## CREAR MODELOS PARA LA BD
Importamos mongoose para trabajar con los modelos
    var mongoose = require('mongoose');

## CONTROLADORES Y RUTAS EN NODE