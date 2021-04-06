const sumaHabitacionesOcupadas = require("../src/sumaHabitacionesOcupadas");
const clientes = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

function comprobarSumaHabitacionesOcupadas(premium, economy, resultado) {
  expect(sumaHabitacionesOcupadas(clientes, premium, economy)).toEqual(
    resultado
  );
}

describe("sumaHabitacionesOcupadas", () => {
  test("Prueba 1 Premium 3 Economy 3", () => {
    comprobarSumaHabitacionesOcupadas(3, 3, [738, 167]);
  });
  test("Prueba 2 Premium 7 Economy 5", () => {
    comprobarSumaHabitacionesOcupadas(7, 5, [1054, 189]);
  });
  test("Prueba 3 Premium 2 Economy 7", () => {
    comprobarSumaHabitacionesOcupadas(2, 7, [583, 189]);
  });
  test("Prueba 4 Premium 7 Economy 1", () => {
    comprobarSumaHabitacionesOcupadas(7, 1, [1153, 45]);
  });
});
