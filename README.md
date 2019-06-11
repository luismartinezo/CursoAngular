# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

# Importante actualizar angular antes de instalar si ya esta instalado en el equipo
-npm uninstall -g @angular/cli
-npm cache verify
-npm cache clear --force

# Instalar nuevamente
-npm install -g @angular/cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
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
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

NOTAS:

- El flash --prefix nombre sirve para colocar un nombre diferente al inicio de la aplicacion ejemplo app-nombre lo reemplaza por app
ng new nombre_proyecto --prefix nombre Todos los selectores empezaran con ese nombre

- El comando ng g c nombre -is --flat no crea el archivo css del componente