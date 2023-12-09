export const MARCAS = [
  { id: 1, nombre: "Volkswagen" },
  { id: 2, nombre: "Fiat" },
  { id: 3, nombre: "Renault" },
  { id: 4, nombre: "Toyota" },
  { id: 5, nombre: "Ford" },
  { id: 6, nombre: "Chevrolet" },
  { id: 7, nombre: "Honda" },
  { id: 8, nombre: "Nissan" },
  { id: 9, nombre: "Mazda" },
  { id: 10, nombre: "Kia" },

];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Terceros" },
  { id: 2, nombre: "Todo riesgo" },
  { id: 3, nombre: "Todo Riesgo + Granizo" },
];
