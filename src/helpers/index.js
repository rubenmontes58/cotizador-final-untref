export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.16;
      break;
      case "4":
      incremento = 1.17;
      break;
      case "5":
      incremento = 1.18;
      break;
      case "6":
      incremento = 1.19;
      break;
      case "7":
      incremento = 1.20;
      break;
      case "8":
      incremento = 1.21;
      break;
      case "9":
      incremento = 1.15;
      break;
      case "10":
      incremento = 1.16;
      break;
    default:
      break;
    }



  return incremento;
}

export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
