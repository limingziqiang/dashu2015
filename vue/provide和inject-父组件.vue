<template>
  <child/>
</template>

<script setup>
  import { ref, watch, provide } from 'vue'
  // 引入子组件
  import child from './child.vue'

  let name = ref('Jerry')
  // 声明provide
  provide('provideState', {
    name,
    changeName: () => {
      name.value = 'Tom'
    }
  })

  // 监听name改变
  watch(name, () => {
    console.log(`name变成了${name}`)
    setTimeout(() => {
      console.log(name.value) // Tom
    }, 1000)
  })
</script>
