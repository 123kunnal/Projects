const zod=require('zod')

const struct=zod.object({
    title:zod.string(),
    description:zod.string(),
    completed:zod.boolean()
})

module.exports=struct