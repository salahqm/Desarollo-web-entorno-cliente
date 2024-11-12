const frutas = [
  { nombre: "patatas", precio: 3, stock: 500 },
  { nombre: "manzanas", precio: 2, stock: 200 },
  { nombre: "peras", precio: 1, stock: 100 },
  { nombre: "plátanos", precio: 1.5, stock: 0 },
  { nombre: "uvas", precio: 4, stock: 150 },
  { nombre: "naranjas", precio: 2.5, stock: 250 },
  { nombre: "piñas", precio: 5, stock: 0 },
  { nombre: "kiwis", precio: 3.5, stock: 120 },
  { nombre: "fresas", precio: 6, stock: 90 },
  { nombre: "mangos", precio: 4.5, stock: 75 },
];

//solo el listado de los nombres (map): 10

const listadoNombre = frutas.map((frutas) => frutas.nombre);
console.log(listadoNombre);

//listado de frutas sin existencias (filter) : 2
const sinExistencias = frutas.filter((fruta) => fruta.stock == 0);
console.log(sinExistencias);
//suma total del stock (reduce) :1485
const sumaTotal = frutas.reduce((suma, fruta) => suma + fruta.stock, 0);
console.log(sumaTotal);

//media de precios (recduce): 3.3 . Primero el total de medio y luego
//divides entre frutas.length

const mediaPrecio = frutas.reduce((suma, fruta) => suma + fruta.precio, 0);
const mediaTotal = mediaPrecio / frutas.length;
console.log(mediaTotal);

//productos cuyo precio está por encima de la media (5)

// 1. Calcular la media de precios con reduce

/*reutilizo la variable del anterior ejercicio*/

// 2. Filtrar los productos que están por encima de la media
const mayorDmedia = frutas.filter((fruta) => fruta.precio > mediaTotal);
console.log(mayorDmedia);

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce
const mediaStock = frutas.reduce((suma, fruta) => suma + fruta.stock, 0);
const mediaStockTotal = mediaStock / frutas.length;
console.log(mediaStockTotal);
// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter
const menorDmedia = frutas.filter((fruta) => fruta.stock < mediaStockTotal);
console.log(menorDmedia);

// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map

const precioMayor = frutas
  .filter((fruta) => fruta.precio >= 5)
  .map((fruta) => fruta.nombre);

console.log(precioMayor);
