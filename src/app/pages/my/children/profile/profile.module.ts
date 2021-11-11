import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile",
  setup() {
    const title = "Profile page!";

    return {
      title,
    };
  },
});
