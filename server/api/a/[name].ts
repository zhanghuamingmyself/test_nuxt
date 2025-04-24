export default defineEventHandler((event:any) => {
    setResponseStatus(event, 202)
    const name = getRouterParam(event, 'name')
    const query = getQuery(event)

    console.log({ a: query.foo, b: query.baz })
    return `Hello, ${name}!`
})