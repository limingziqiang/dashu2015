/*
在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 defineExpose 来完成。
*/



<template>
  <span>{{state.name}}</span>
</template>

<script setup>
  import { reactive, toRefs } from 'vue'
  // defineExpose无需引入
  import { defineExpose, reactive, toRefs } from 'vue'

  // 声明state
  const state = reactive({
    name: 'Jerry'
  }) 
	
  // 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
  defineExpose({
    // 解构state
    ...toRefs(state),
    // 声明方法
    changeName () {
      state.name = 'Tom'
    }
  })
</script>
