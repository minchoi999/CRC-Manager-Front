<template>
  <div>
    {{ displayClanInfo }}
  </div>
</template>

<script>

export default {
  name: 'MemberTable',
  props: {
    clanInfo: Object
  },
  computed: {
    displayClanInfo() {
      return this.clanInfo
    }
  }
}
</script>

<style scoped lang="scss">

div {
  max-width: 100%;
  text-align: center;
}

</style>