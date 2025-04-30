<script setup lang="ts">


const data = useState("data", () => [])
const url = useState("url", () => 'https://qx5aunrz52m.feishu.cn/wiki/XdzlwphCci9g4ZklGvcczUeanDb?table=tblIhnxXm6bltg5C&view=vewJq8ZLZh')
const columns = useState("columns", () => [])

divClick()

function divClick() {
  useFetch('/api/feishu/table', {
    method: 'POST',
    body: JSON.stringify({
      "url": url.value
    })
  }).then(res => {
    columns.value=[]
    res.data.value.data['fieldList'].forEach(field => {
      columns.value.push({
        title: field.field_name +`(${field.feishu_field_id})`,
        dataIndex: field.id,
        key: field.id,
      })
    })
    const temp = {}
    res.data.value.data['recordList'].forEach(record => {
      if (temp[record.feishu_record_id] == null) {
        temp[record.feishu_record_id] = {}
      }
      temp[record.feishu_record_id][record.field_id] = record.ui_value
    })
    const list = []
    Object.values(temp).forEach(record => {
      list.push(record)
    })
    data.value = list
  })
}


</script>

<template>
  <div>
    <a-input-group compact>
      <a-input v-model:value="url"></a-input>
      <a-button type="primary" @click="divClick">获取</a-button>
    </a-input-group>

    <a-table :columns="columns" :data-source="data" :scroll="{ x: 2000 }" :expand-column-width="100"/>
  </div>

</template>

<style scoped>

</style>