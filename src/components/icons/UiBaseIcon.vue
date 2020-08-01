<template>
  <span class="ui-base-icon" v-on="$listeners"> 
    <component
      :is="iconName"
      :style="inlineStyle">
    </component>
  </span>
</template>

<script>
import search from './search'
import hashtag from './hashtag'

export default {
  name: 'UiBaseIcon',
  props: {
    iconName: {
      type: String,
      default: 'search'
    },
    width: {
      type: String,
      default: '18px'
    },
    height: {
      type: String,
      default: '18px'
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  components: {
    search,
    hashtag
  },
  computed: {
    inlineStyle() {
      return `width:${this.width};height:${this.height};color:${this.color}}`
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-base-icon {
  display: inline-block;
}
</style>