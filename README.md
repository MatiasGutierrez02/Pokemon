# PokéChallenge

## Build Setup

$ npm install   # Instalar las dependencias
$ npm run dev   # Ejecutar en modo desarrollo con hot reload en localhost:3000
$ npm run build # Compilar para producción y lanzar el servidor
$ npm run start
$ npm run generate # Generar proyecto estático

## Descripción del Challenge

Este challenge fue desarrollado utilizando diversas tecnologías:

- **VITE:** Se utilizó Vite como entorno de desarrollo para la creación del proyecto principal.

- **Imágenes:** Las imágenes en formato jpg, png y svg se importaron desde Figma y se almacenaron en la carpeta "public", ya que son elementos estáticos utilizados en la aplicación.

- **Estilos:** En la carpeta "assets/styles" dentro de SRC se guardaron los archivos CSS que se importan en cada componente para dar estilo a la aplicación.

- **Componentes Reutilizables:** La carpeta "components" contiene componentes reutilizables con funcionalidades específicas, lo que facilita la construcción de la interfaz de usuario.

## Páginas Principales

El proyecto consta de tres páginas principales:

- **Home.vue:** Esta es la página principal que redirige a la Pokewiki.

- **Loading.vue:** Se implementó un componente de loading genérico que espera unos segundos para dar la sensación de carga. Se estableció una cantidad fija de segundos, ya que la espera a que los datos de la API cargaran era demasiado corta.

- **PokemonList.vue:** Esta es la página más importante, con componentes de mayor interacción.

## Vue Router

Se utilizó Vue Router para establecer las rutas genéricas de la aplicación, lo que facilita la navegación entre las páginas.

## Servicios

El archivo de servicios se encarga de realizar la conexión con la API y gestionar los datos.

## Unit Testing

Inicialmente, se consideró la posibilidad de utilizar Jest para realizar pruebas unitarias. Sin embargo, debido a una incompatibilidad entre las últimas versiones y la versión de Vue utilizada, se optó por no implementar pruebas unitarias y entregar el challenge a tiempo.

¡Saludos!
