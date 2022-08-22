<script setup>
  import { watch, reactive } from 'vue'

  const state = reactive({
    count: 1
  })

  // 声明方法
  const changeCount = () => {
    state.count = state.count * 2
  }

  // 监听count
  watch(
    () => state.count,
    (newVal, oldVal) => {
      console.log(state.count)
      console.log(`watch监听变化前的数据：${oldVal}`)
      console.log(`watch监听变化后的数据：${newVal}`)
    },
    {
      immediate: true, // 立即执行
      deep: true // 深度监听
    }
  )
</script>
