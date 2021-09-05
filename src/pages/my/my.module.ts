import { defineComponent } from "vue";

export default defineComponent({
  name: "My",
  setup() {
    const title = "My page!";

    return {
      title,
    };
  },
});
