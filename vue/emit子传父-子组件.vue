<template>
  <span>{{props.name}}</span>
  // 可省略【props.】
  <span>{{name}}</span>
  <button @click='changeName'>更名</button>
</template>

<script setup>
  // import { defineEmits, defineProps } from 'vue'
  // defineEmits和defineProps在<script setup>中自动可用，无需导入
  // 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
	
  // 声明props
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  }) 
  // 声明事件
  const emit = defineEmits(['updateName'])
  
  const changeName = () => {
    // 执行
    emit('updateName', 'Tom')
  }
</script>
