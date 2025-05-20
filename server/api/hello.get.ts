import {getQuery} from "#imports";
import {pool} from '~/server/utils/db';

export default defineEventHandler(async (event:any) => {
    const query = getQuery(event)
    const [rows] = await pool.query('SELECT * FROM country_info where id = ?', [query['id']]);
    return {
        hello: `Hello ${query['name']}`,
        rows: rows
    }
})