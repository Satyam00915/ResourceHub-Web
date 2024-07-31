const zod = require("zod");

const userSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});

const updateSchema = zod.object({
  id: zod.number(),
  email: zod.optional(zod.string().email()),
  password: zod.optional(zod.string().min(6)),
});

const resourceSchema = zod.object({});

module.exports = { userSchema, resourceSchema, updateSchema };
