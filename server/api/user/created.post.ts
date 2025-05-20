import {getQuery} from "#imports";
import {pool} from '~/server/utils/db';
import {createUser} from "../../utils/dbUser";

export default defineEventHandler(async (event: any) => {
    const query = getQuery(event)

    const res = createUser().catch(console.error);

    return {
        hello: `Hello ${query['name']}`,
        rows: res
    }
})