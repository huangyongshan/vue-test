<template>
  <button
    class="button-item"
    :class="className"
    :disabled="disabled"
    @click="clickHandler"
    >
      <slot>button</slot>
      <slot name="namedSlot"></slot>
      <slot name="scoped" :info="info"></slot>

    </button>
</template>

<script>
  export default {
    name: 'Button', // test
    data() {
      return {
        info: {
          age: 11,
          name: 'aa'
        }
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      },
      radius: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      className() {
        let result = ['button-item']
        if(this.disabled) {
          result.push('button-item--disabled')
        }
        if(this.radius) {
          result.push('button-item--radius')
        }
        if(this.size === 'bg') {
          result.push('button-item--bg')
        }
        if(this.size === 'md') {
          result.push('button-item--md')
        }
        if(this.size === 'sm') {
          result.push('button-item--sm')
        }
        return result.join(' ')
      }
    },
    methods: {
      clickHandler () {
        this.$emit('clicked', 'hello world')
      }
    }

  };
</script>

<style scoped>
  .button-item--disabled{
    cursor: not-allowed;
  }
</style>
