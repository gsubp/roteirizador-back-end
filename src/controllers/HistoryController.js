const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { originLat, originLng, destLat, destLng, distancia, duracao, date, users_id } = request.body;
        const history = await connection("history").insert({ originLat, originLng, destLat, destLng, distancia, duracao, date, users_id });
        return response.json(history);
    },
    async list(request, response) {
        const users_id = request.headers.authorization;
        history = await connection("history").join("users", "history.users_id", "=", "users.id")
            .select("*")
            .where("users_id", users_id)
        return response.json(history);
    }
}