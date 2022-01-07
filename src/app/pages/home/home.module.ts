import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const title = 'Home page!';
    const inputValue = ref('');

    return {
      title,
      inputValue
    };
  }
});
