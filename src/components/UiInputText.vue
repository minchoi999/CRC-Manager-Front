<template>
  <div class="ui-input-text">
    <div class="slot-before" v-if="$slots.before" :style="inputHeight">
      <slot name="before"/>
    </div> 
    <div class="input-wrapper">
      <input
        type="text"
        :style="inputHeight"
        :value="value"
        :placeholder="placeholder"
        v-on="listeners">
    </div>
    <div class="slot-after" v-if="$slots.after" :style="inputHeight">
      <slot name="after"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInputText',
  props: {
    height: { 
      type: String, 
      default: '44px'
    },
    value: {
      required: true
    },
    placeholder: {
      type: String
    }
  },
  computed: {
    inputHeight() {
      return `height: ${this.height};`
    },
    listeners() {
      return {
          ...this.$listeners,
          input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$color-gray: #b3b3b3;
$radius: 5px;
$padding: 5px;

.ui-input-text {
  display: flex;
  align-items: center;

  .slot-before, .slot-after {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  .slot-before {
    border: 1px solid $color-gray;
    border-right: 0;
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;
  }
  .slot-after {
    border: 1px solid $color-gray;
    border-left: 0;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}


</style>