
exports.up = function(knex) {
    return knex.schema.createTable("history", function(table) {
        table.increments("id");
        table.string("originLat").notNullable();
        table.string("originLng").notNullable();
        table.string("destLat").notNullable();
        table.string("destLng").notNullable();
        table.string("distancia").notNullable();
        table.string("duracao").notNullable();
        table.string("date").notNullable();
        table.string("users_id").notNullable();
        table
          .foreign("users_id")
          .references("id")
          .inTable("users");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("history");
};
