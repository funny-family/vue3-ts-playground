import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const count = ref(0);
    const countPlusOne = () => {
      count.value += 1;
    };

    const title = 'Home page!';
    const inputValue = ref('');

    const headingRef = ref();
    const inputRef = ref();

    onMounted(() => {
      console.log('headingRef ref:', headingRef);
      console.log('inputRef ref:', inputRef);
    });

    return {
      count,
      countPlusOne,

      title,
      inputValue,

      headingRef,
      inputRef
    };
  },
  // eslint-disable-next-line
  render() {
    // eslint-disable-next-line
    console.log(arguments);
  }
});
