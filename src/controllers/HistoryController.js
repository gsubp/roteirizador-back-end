const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { originLat, OriginLng, destLat, destLng, distancia, duracao, date } = request.body;
        const history = await connection("history").insert({ originLat, OriginLng, destLat, destLng, distancia, duracao, date });
        return response.json(history);
    },
    async list(request, response) {
        const history = await connection("history").select("*");
        return response.json(history);
    }
}