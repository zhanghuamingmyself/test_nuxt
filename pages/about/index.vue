<script setup lang="ts">
import A from '@/components/A'

definePageMeta({
  layout: 'custom'
})

const data = useState('data', () => [])


useFetch('/api/hello?name=123&id=2').then(res => {
  data.value = res.data.value
})


async function divClick() {
  useFetch('/api/hello?name=456&id=5').then(res => {
    data.value = res.data.value
  })
}
</script>

<template>
  <pre>
    <A/>
    <div @click="divClick">about页面</div>
     <div v-if="data == null">
      无数据
     </div>
      <div v-else>
        <div>{{ data }}</div>
      </div>
  </pre>
</template>