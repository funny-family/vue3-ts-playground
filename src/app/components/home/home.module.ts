import { defineComponent, onMounted, ref } from 'vue';
import EmojiBlinkLeftIcon from '@/app/components/not-found/images/emoji-blink-left.icon.svg';

// https://www.npmjs.com/package/vue-svg-loader

export default defineComponent({
  name: 'Home',

  components: {
    EmojiBlinkLeftIcon
  },

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
