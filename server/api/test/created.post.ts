import {getQuery} from "#imports";
import {createTest} from "../../utils/dbTest";


export default defineEventHandler(async (event: any) => {
    const query = getQuery(event)

    const res = createTest().catch(console.error);

    return {
        hello: `Hello ${query['name']}`,
        rows: res
    }
})