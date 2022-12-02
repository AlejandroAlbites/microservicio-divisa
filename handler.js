"use strict";

module.exports.divisa = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
          compra: 3.968,
          venta: 3.975,
          origen: "SUNAT",
          moneda: "USD",
          fecha: "2021-06-23"
      },
      null,
      2
    ),
  };
};
