import { defineComponent, PropType } from "vue";

// import { setup } from "./header.setup";
// import { props } from "./header.props";

export const Header = defineComponent({
  name: "Header",
  // props,
  props: {
    title: {
      default: "this is main heading!",
      required: true,
      type: String,
    },
  },
  // setup,
  render() {
    return (
      <header style={{ height: '60px', backgroundColor: 'red' }}>
        {this.$props.title}
      </header>
    );
  }
});

export default Header;
