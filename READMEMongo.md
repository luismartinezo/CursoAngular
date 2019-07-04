# MONGO DB
Creamos carpetar llamada data y dentro bd en nuestro disco.
luego ingresamos a la carpeta de mongo y corremos el demonio de mongodb llamado mongod.exe dependiendo la version
Para administrar las bases de datos podemos instalar roboMongo / Robo3T o en la instalacion ya viene MongoDb Compass

 -- correr json-server --watch server/db.json
 
## MongoDB en Mac OS
Los pasos para instalar Mongo en un Mac son los siguientes:
Descargas la versión para tu OSX, en mi caso (mongodb-osx-x86_64-3.4.10). Lo extraes a tu carpeta de preferencia (Ejemplo : /Sandbox/mongoDB
Creas los directorios donde vivirá la información  " sudo mkdir -p /data/db "
Ingresas a la caperta "bin" donde extraiste mongo   "/Sandbox/mongoDB/bin"
Ejecutas el demonio para iniciar MongoDB    " sudo ./mongod "
LISTO!! ya lo tienes funcionando
el demonio de Mongo siempre debe de estar corriendo para que puedas ejecutar comandos.
Entonces en una ventana de la terminal ejecutas el demonio "sudo ./mongod"  (la "d" es de "demonio"), no lo cierres.
En otra ventana de Terminal entras al mismo directorio y ejecutas "sudo ./mongo" . Tienes que usar "   ./ " para ejecutar comandos

