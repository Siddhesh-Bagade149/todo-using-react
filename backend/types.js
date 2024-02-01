const zod = require('zod');

const createScheme = zod.object({
    title: zod.string(),
    description: zod.string()
})
const updateScheme = zod.object({
    id: zod.string()
})
module.exports={
    createTodo:createScheme,
    updateTodo:updateScheme
}