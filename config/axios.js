const axios = require("axios");

const body = {
  identifier: "smt",
  password: "2024APISMT",
  tenantID: "6b1985a2-c7a0-5564-d8d1-22cc948c3986",
};
const contentLength = Buffer.byteLength(JSON.stringify(body));

const axiosI = axios.create({
  baseURL: "https://preprod.smt.ciudadana.ar",
  headers: {
    "Content-Type": "application/json", // Asegúrate de incluir los headers necesarios
    "X-API-KEY": "6b1985a2-c7a0-5564-d8d1-22cc948c3986",
    // "Content-Length": contentLength.toString(),
    // "Host": "preprod.smt.ciudadana.ar",
  },
});

// Exporta la instancia para que puedas usarla en otros archivos
module.exports = { axiosI };
