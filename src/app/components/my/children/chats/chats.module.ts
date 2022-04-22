import { defineComponent } from "vue";

export default defineComponent({
  name: "Chats",
  setup() {
    const title = "Chats page!";

    return {
      title,
    };
  },
});
