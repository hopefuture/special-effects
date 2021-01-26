<template>
  <div>
    <h3>Draggable {{ draggingInfo }}</h3>

    <v-card class="mt-2" width="500">
      <v-list>
        <draggable
            :list="list"
            :disabled="!enabled"
            class="draggable-item"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
        >
          <v-list-item
              v-for="(item, index) in list"
              :key="item.name"
          >
            <v-list-item-content>
              <v-list-item-title>{{`${index + 1}. ` + item.name}}</v-list-item-title>
              <v-divider class="mt-1"></v-divider>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Draggable from 'vuedraggable';

  @Component({
    components: {
      Draggable
    }
  })
  export default class Simple extends Vue {
    private enabled = true;

    private list = [
      { name: '张三', id: 0 },
      { name: '李四', id: 1 },
      { name: '王五', id: 2 }
    ];

    private dragging = false;

    get draggingInfo (): string {
      return this.dragging ? '开始拖拽' : '';
    }

    private checkMove (e: any): void {
      console.log('Future index: ' + e.draggedContext.futureIndex);
    }
  }
</script>

<style lang="scss" scoped>
  .draggable-item {
    cursor: move;
  }

  // 拖拽时样式
  .ghost {
    opacity: 0.5;
    background: #b3e5fc;
  }
</style>
