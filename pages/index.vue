<script setup>

const users = useState('users');

// // 在服务器端渲染期间调用 fetchUsers
if (import.meta.env.SSR) {
  users.value = [{
    id: 1,
    name: 'qwew'
  }]
}

const handleMessage = () => {
  message.info("This is a normal message");
}
</script>

<template>
  <div>
    <div>
      <a-button type="primary" @click="handleMessage">
        button
      </a-button>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/table">Table</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>

</style>