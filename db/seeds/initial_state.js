/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tasks").del();
  await knex("tasks").insert([
    { id: 1, name: "漢字プリント1", completed: false, category_id: 1 },
    { id: 2, name: "漢字プリント2", completed: false, category_id: 2 },
    { id: 3, name: "漢字プリント3", completed: false, category_id: 2 },
    {
      id: 4,
      name: "計算ドリル1",
      completed: false,
      category_id: 3,
    },
    { id: 5, name: "計算ドリル2", completed: false, category_id: 1 },
    { id: 6, name: "計算ドリル3", completed: false, category_id: 1 },
    { id: 7, name: "Programing(非同期1)", completed: false, category_id: 2 },
    { id: 8, name: "絵日記1", completed: false, category_id: 2 },
    {
      id: 9,
      name: "絵日記2",
      completed: false,
      category_id: 3,
    },
    {
      id: 10,
      name: "絵日記3",
      completed: false,
      category_id: 1,
    },
    { id: 11, name: "読書感想文1", completed: false, category_id: 1 },
    { id: 12, name: "朝顔観察1", completed: false, category_id: 1 },
    { id: 13, name: "Programing(非同期2)", completed: false, category_id: 2 },
    { id: 14, name: "工作1", completed: false, category_id: 2 },
    { id: 15, name: "読書感想文2", completed: false, category_id: 1 },
    { id: 16, name: "朝顔観察2", completed: false, category_id: 1 },
    { id: 17, name: "Programing(非同期3)", completed: false, category_id: 2 },
    // { id: 18, name: "工作2", completed: false, category_id: 2 },
    // { id: 19, name: "読書感想文3", completed: false, category_id: 1 },
    // { id: 20, name: "朝顔観察3", completed: false, category_id: 1 },
    // { id: 21, name: "Programing(非同期4)", completed: false, category_id: 2 },
    // { id: 22, name: "工作3", completed: false, category_id: 2 },
  ]);

  await knex("categories").del();
  await knex("categories").insert([
    { id: 1, name: "国語", color: "blue" },
    { id: 2, name: "算数", color: "green" },
    { id: 3, name: "英語", color: "LightSeaGreen " },
  ]);
};
