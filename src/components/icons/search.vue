<template>
  <font-awesome-icon icon="search" :style="inlineStyle"/>
</template>

<script>
export default {
  props: {
    inlineStyle: {
      type: String
    }
  }
}
</script>