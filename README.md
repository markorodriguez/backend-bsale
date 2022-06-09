
# Desafío bsale - Backend

## Explicación del ejercicio

Se desarrolló una tienda virtual bajo una arquitectura cliente-servidor. Debido a esto, las funciones para cada capa quedan claramente establecidas.

Por un lado, en el lado del cliente se desplegarán los productos y se podrán realizar operaciones como búsqueda, ordenar de forma ascendente o decreciente según el precio del producto.

Por otro lado, en la capa de servidor se realizan tareas tales como la conexión a la base de datos y la ejecución de consultas. 

Las tecnologías empleadas para el desarrollo del ejercicio son Vanilla JavaScript HTML, Tailwind CSS y JQuery para el apartado del frontend. El backend del mismo proyecto se desarrolló en TypeScript usando Express.js como framework para el servidor bajo Node.JS.

Repositorio Frontend: https://github.com/markorodriguez/frontend-bsale  
Repositorio Backend: https://github.com/markorodriguez/backend-bsale

Despliegue Frontend: https://github.com/markorodriguez/backend-bsale  
Despliegue Backend: https://bsale-markorodriguez.herokuapp.com/

## Instalación

El primer paso es clonar el repositorio y seguir las siguientes indicaciones: 

Se debe tener instalado Node.JS en el equipo.

```bash
  git clone https://github.com/markorodriguez/backend-bsale.git
  cd backend-bsale
  npm install
```
    
## Endpoints API

### Obtener productos

```http
  GET /products
```
Response
| Campo | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | Identificador del producto |
| `name` | `string` | Nombre del producto |
| `url_img` | `string` | Identificador del producto |
| `price` | `number` | Precio de venta |
| `discount` | `number` | Porcentaje de descuento |
| `category` | `int` | Identificador de categoría |

### Obtener categorías

```http
  GET /categories
```
Response
| Campo | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Identificador de categoría |
| `name`      | `string` | Nombre de la categoría |

### Buscar producto

```http
  POST /find-product
```
Request
| Campo | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `product_name` | `string` | Nombre del producto |

### Filtrar por categoría

```http
  POST /filter-product
```
Request
| Campo | Tipo     | Descripción                |
| :-------- | :------- | :------------------------- |
| `category_id | `number` | Identificador de la categoría |



## Ejemplos

### Obtener productos
```http
  GET /products
```
Estructura JSON
```javascript
[
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
    },
    ...
]
```
### Obtener categorías

```http
  GET /categories
```
Estructura JSON
```javascript
[
    {
        "id": 1,
        "name": "bebida energetica"
    },
    ...
]
```
### Encontrar producto

```http
  POST /find-product  (product_name = "energetica")
```
Estructura JSON
```javascript
[
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
    },
    {
        "id": 6,
        "name": "ENERGETICA RED BULL",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
        "price": 1490,
        "discount": 0,
        "category": 1
    },
    ...
]
```

### Filtrar producto por categoría

```http
  POST /find-product  (category_id = 2)
```
Estructura JSON
```javascript
[
    {
        "id": 8,
        "name": "PISCO ALTO DEL CARMEN 35º",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
        "price": 7990,
        "discount": 10,
        "category": 2
    },
    {
        "id": 9,
        "name": "PISCO ALTO DEL CARMEN 40º ",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
        "price": 5990,
        "discount": 0,
        "category": 2
    }, ...
]
```

