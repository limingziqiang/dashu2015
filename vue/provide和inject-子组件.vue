<script setup>
  import { inject } from 'vue'
  // 注入，第二个参数为默认值
  const provideState = inject('provideState', {})
  
  // 子组件触发name改变
  provideState.changeName()
</script>
