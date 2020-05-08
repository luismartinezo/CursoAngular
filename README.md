# Curso Angular

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
Curso de Angular del Master en JavaScript donde tenemos Componentes, directivas, twoWayDataBinding, Eventos, Selectores,
formularios, Pipes, Rutas, cargas lentas y todo los relacionado con Angular.

## Actualizacion

_Importante actualizar angular antes de instalar si ya esta instalado en el equipo_

- npm uninstall -g @angular/cli
- npm cache verify
- npm cache clear --force

Instalar nuevamente
-npm install -g @angular/cli

## Instalacion y Configuracion

- Clonar o descargar proyecto, para clonar ejecutamos el comando `git clone https://github.com/luismartinezo/Curso-Angular.git`
- Acceder al directorio del proyecto y ejecutar el comando `npm install` para instalar dependencias.

## Servidor de Desarrollo

Correr `ng serve -o` para un servidor de desarrollo. La aplicación se carga automáticamente en la url `http://localhost:4200/`, tambien si cambia alguno de los archivos de origen.

## Generacion para produccion

Correr `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Use el flag `--prod` para especificar una construcción de produccion.

## Ejecución de pruebas unitarias

Correr `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas de extremo a extremo

Correr `ng e2e` para ejecutar las pruebas de extremo a extremo a través de [Protractor](http://www.protractortest.org/).

## Ayuda adicional

Para obtener más ayuda sobre el uso de angular CLI `ng help` o ingresa en [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CONCEPTOS

### Componentes:

trozo de pantalla o de vista, todo lo que se puede ver controlar y gestionar por este tipo de elementos,
la logica de un componente es dentro de una clase en Angular es la que da soporte a una vista interactuando a traves de una API con propiedades y metodos.
El componente hace de medidor entre la vista a traves de la logica de la app donde se incluira el modelo de datos, es decir una especie de controlador.

Existes varias maneras de crear un componente:

- Consola (facil)
- Definir una carpeta de components he ingresarlos alli (manual)
- Carpeta de Views donde esten las plantillas de los componentes parecido a MVC (manual)

### Hooks:

- ngOnInit() Se ejecuta cuando carga el componente
- ngDoCheck() Cada vez que se produce algun cambio en el codigo u cambio en los componentes

* ngOnDestroy Se ejecuta cuando se elimine un componente o se llama otro diferente

### Plantillas:

Son las vistas de los componentes, son ficheros html que tienen una sintaxis especial de Angular. Trabajando con el DataBinding y las Directivas.

### Pipes:

Son funciones que nos sirven para transformar informacion

### Decoradores y Metadatos:

con los decoradores(patron de diseño) se configura dinamicamente atributos/metadatos de las clases y componentes, los metadatos decriben las clases pero tambine relaciones, por ejemplo si tenemos un componente y una plantilla el metadato se va a encargar de decirle a Angular que ese componente pertenece a esa plantilla, entre otras cosas.

### Servicios:

son clases con un objetivo claro, facilita la reutilizacion, son un tipo de elemento dentro de la arquitectura de Angular y mediante la inyeccion de dependencias los podemos usasr en otros componentes.

### Providers:

son servicios que nos proveen de datos o funcionalidades mediante sus metodos. Existen prodviders/servicios propios de Angular o creados por nosotros.

### Directivas:

Son funcionalidades aplicables al DOM y a los elementos html en las plantillas de un componente. Por ejemplo una directiva puede servir para controlar que un div se muestre o no, recorrer un arreglo en la vista, hay directivas estructurales, estructuras condicionales y de control, incluso puede servir para darle estilo a un elemento de html o interactuar con el modelo de datos de un componente. Basicamente son atributos para aplicar acualquier cosa en nuestra plantilla/vista.
Existe tambien los Modulos.

### Nota Adicional:

- El flash `--prefix` nombre sirve para nombrar la aplicacion con el nombre que tendran los Selectores,
  ejemplo: `ng new angular_project --prefix ng` Todos los selectores empezaran con el prefijo `ng`

- El comando ng g c nombre -is --flat no crea el archivo css del componente
