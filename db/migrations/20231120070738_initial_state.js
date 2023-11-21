/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("name", 32).notNullable();
    table.boolean("completed");
    table.integer("category_id");
  });
  await knex.schema.createTable("categories", (table) => {
    table.integer("id");
    table.string("name", 32);
    table.string("color", 32);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("tasks");
  await knex.schema.dropTable("categories");
};
