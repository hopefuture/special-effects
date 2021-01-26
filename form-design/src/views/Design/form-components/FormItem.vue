<template>
  <div
    class="drag-move-box"
    :class="{ active: active }">
    <form-input v-if="options.type === 'input'"></form-input>
    <form-textarea v-else-if="options.type === 'textarea'"></form-textarea>
    <form-btn v-else-if="options.type='btn'"></form-btn>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import FormInput from './FormInput';
  import FormTextarea from './FormTextarea';
  import FormBtn from './FormBtn';

  @Component({
    components: {
      FormInput,
      FormTextarea,
      FormBtn
    }
  })
  export default class FormItem extends Vue {
    @Prop({
      default: () => {
        return {};
      }
    })
    private options!: any;

    @Prop({
      default: false
    })
    private active!: boolean;
  }
</script>

<style lang="scss" scoped>
  .drag-move-box {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    overflow: hidden;
    transition: all .3s;
    min-height: 36px;

    &:hover {
      background: #e1f5fe;
    }

    &::after {
      content: '';
      height: 5px;
      width: 100%;
      background: #03A9F4;
      position: absolute;
      top: 0;
      right: -100%;
      transition: all .3s;
    }

    &::before {
      content: '';
      height: 5px;
      width: 100%;
      background: #03A9F4;
      position: absolute;
      bottom: 0;
      left: -100%;
      transition: all .3s;
    }

    &.active {
      &::after {
        right: 0;
      }

      &::before {
        left: 0;
      }

      background: #e1f5fe;
      outline-offset: 0;
    }
  }
</style>
