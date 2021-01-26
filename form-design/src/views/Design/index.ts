import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class Design extends Vue {
  private selectedItem = 1;

  private items: any[] = [
    {
      text: '简单示例',
      to: '/design/simple'
    },
    {
      text: '动画效果',
      to: '/design/animation'
    },
    {
      text: '对拖拽后的元素再次拖拽',
      to: '/design/multiple'
    },
    {
      text: '嵌套拖拽',
      to: '/design/nested'
    }
  ];
}
