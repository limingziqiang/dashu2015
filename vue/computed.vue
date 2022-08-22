<script setup>
  import { computed, ref } from 'vue'

  const count = ref(1)

  // 通过computed获得doubleCount
  const doubleCount = computed(() => {
    return count.value * 2
  })
  // 获取
  console.log(doubleCount.value)
</script>
