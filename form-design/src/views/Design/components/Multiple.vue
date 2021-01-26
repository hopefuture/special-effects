<template>
  <v-row>
    <v-col cols="3">
      <draggable
        tag="div"
        class="v-list"
        :list="list"
        v-bind="{
          group: { name: 'form-draggable', pull: 'clone', put: false },
          sort: false,
          animation: 180,
          ghostClass: 'moving'
        }"
        @start="handleStart($event, list)"
      >
        <v-list-item
          v-for="(item, index) in list"
          :key="item.name"
          @dragstart="generateKey(list, index)"
        >
          <v-list-item-content>
            <v-btn outlined color="primary">{{ item.name }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </draggable>
    </v-col>

    <v-col cols="9">
      <v-card height="calc(100vh - 24px)">
        <draggable
          class="draggable-container"
          :list="selectedList"
          group="form-draggable"
        >
          <transition-group class="draggable-group" tag="div" type="transition" name="flip-list">
            <v-list-item
              v-for="(item) in selectedList"
              :key="item.key"
              @click="selectItem = item"
            >
              <form-item :options="item" :active="item.key === selectItem.key"></form-item>
            </v-list-item>
          </transition-group>
        </draggable>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Draggable from 'vuedraggable';
  import FormItem from '@/views/Design/form-components/FormItem.vue';

  @Component({
    components: {
      Draggable,
      FormItem
    }
  })
  export default class Multiple extends Vue {
    private list = [
      { name: '文本框', type: 'input', id: 0 },
      { name: '多行文本框', type: 'textarea', id: 1 },
      { name: '按钮', type: 'btn', id: 2 }
    ];

    private selectedList = [];

    private selectItem = { };

    private generateKey (list, index) {
      // 生成key值
      const key = list[index].type + '_' + new Date().getTime();
      this.$set(list, index, {
        ...list[index],
        key,
        model: key
      });
    }

    handleStart (e, list) {
      console.info(list[e.oldIndex].type);
    }
  }
</script>

<style lang="scss">
  .flip-list-move {
    transition: transform 0.5s;
  }

  .moving {
    // 拖放移动中
    // outline-width: 0;
    min-height: 35px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 !important;
    // margin       : 3px 0;
    position: relative;

    &::before {
      content: '';
      height: 5px;
      width: 100%;
      background: #2c68ff;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .draggable-container {
    height: 100%;

    .draggable-group {
      height: 100%;
      padding: 8px 0;
    }
  }
</style>
