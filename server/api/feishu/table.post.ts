import {getQuery} from "../../../.nuxt/imports";
import pool from "../../utils/db";

interface Req {
    url: string;
}

export default defineEventHandler(async (event: any) => {
    const body: Req = await readBody(event)
    console.log(body)
    const [fileList] = await pool.query('SELECT * FROM feishu_file where url = ? AND is_delete = "N" LIMIT 1', [body.url]);
    const file = fileList[0]
    if (!file) {
        return {
            code: 400,
            msg: '文件不存在',
            data: null
        }
    }
    console.log(file.id)
    const [fieldList] = await pool.query('SELECT * FROM feishu_file_field where file_id =? AND is_delete = "N"', [""+file['id']]);
    const [recordList] = await pool.query('SELECT * FROM feishu_file_record where file_id =? AND is_delete = "N"', [""+file['id']]);

    return {
        code: 200,
        msg: 'success',
        data: {
            file: file,
            fieldList: fieldList,
            recordList: recordList,
        }
    }
})