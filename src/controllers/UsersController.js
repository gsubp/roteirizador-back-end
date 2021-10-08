const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const { nome, email, senha } = request.body;
        const user = await connection("users").insert({ nome, email, senha });
        return response.json(user);
    },
    async login(request, response) {
        const { email, senha } = request.body;
        const user = await connection("users")
            .where({
            email: email,
            senha: senha
            }).select("id").first();
        if (!user) {
            return response.status(401).json({
                error: "Usuário não encontrado"
            });
        }
        return response.json(user);
    },
    async getUser(request, response) {
        const { id } = request.params;
        const user = await connection("users").where({id: id}).select("*");
        return response.json(user);
    },
    async list(request, response) {
        const users = await connection("users").select("*");
        return response.json(users);
    }
}