import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const title = 'Home page!';
    const inputValue = ref('');

    const headingRef = ref();
    const inputRef = ref();

    onMounted(() => {
      console.log('headingRef ref:', headingRef);
      console.log('inputRef ref:', inputRef);
    });

    return {
      title,
      inputValue,

      headingRef,
      inputRef
    };
  }
});
