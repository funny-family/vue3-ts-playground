import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const title = "About page!";

    return {
      title,
    };
  },
});
