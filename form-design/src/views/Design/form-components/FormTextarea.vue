<template>
  <v-textarea
      outlined
      v-model="model"
      label="多行文本框"
  ></v-textarea>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    }
  })
  export default class FormTextarea extends Vue {
    private model = '';
  }
</script>
