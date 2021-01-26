<template>
  <v-text-field
      v-model="model"
      counter="25"
      label="文本框"
  ></v-text-field>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    }
  })
  export default class FormInput extends Vue {
    private model = '';
  }
</script>
