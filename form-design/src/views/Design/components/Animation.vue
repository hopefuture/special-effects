<template>
  <div>
    <h3>Transition 效果 {{ draggingInfo }}</h3>

    <v-card class="mt-2">
      <v-list>
        <draggable
            v-model="list"
            v-bind="dragOptions"
            :disabled="!enabled"
            class="draggable-item"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
        >
          <transition-group tag="div" type="transition" name="flip-list">
            <v-list-item
                v-for="(item, index) in list"
                :key="item"
            >
              <v-list-item-content>
                <v-list-item-title>{{`${index + 1}. ` + item}}</v-list-item-title>
                <v-divider class="mt-1"></v-divider>
              </v-list-item-content>
            </v-list-item>
          </transition-group>
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
  export default class Animation extends Vue {
    private enabled = true;

    private list = [
      'vue.draggable',
      'draggable',
      'component',
      'for',
      'vue.js 2.0',
      'based',
      'on',
      'Sortablejs'
    ];

    private dragging = false;

    // 拖拽的目标列
    private futureIndex = 1;

    get draggingInfo (): string {
      return this.dragging ? `开始拖拽，目标列：${this.futureIndex + 1}` : '';
    }

    get dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      };
    }

    private checkMove (e: any): void {
      console.log('Future index: ' + e.draggedContext.futureIndex);
      this.futureIndex = e.draggedContext.futureIndex;
    }
  }
</script>

<style lang="scss" scoped>
  .draggable-item {
    cursor: move;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }

  // 拖拽时样式
  .ghost {
    opacity: 0.5;
    background: #b3e5fc;
  }
</style>
