import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const title = "Home page!";

    return {
      title,
    };
  },
});
