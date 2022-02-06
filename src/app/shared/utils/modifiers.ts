export namespace Modifier {
  export namespace VModel {
    /**
     * @see
     * https://v3.vuejs.org/guide/forms.html#modifiers
     *
     * @description
     * Modifiers
     */
    export const enum Base {
      /**
       * @see
       * https://v3.vuejs.org/guide/forms.html#lazy
       */
      Lazy = 'lazy',
      /**
       * @see
       * https://v3.vuejs.org/guide/forms.html#number
       */
      Number = 'number',
      /**
       * @see
       * https://v3.vuejs.org/guide/forms.html#trim
       */
      Trim = 'trim'
    }
  }

  /**
   * @see
   * https://v3.vuejs.org/guide/events.html#event-modifiers
   *
   * @description
   * Event Modifiers
   */
  export const enum Event {
    Stop = 'stop',
    Prevent = 'prevent',
    Capture = 'capture',
    Self = 'self',
    Once = 'once',
    Passive = 'passive'
  }

  /**
   * @see
   * https://v3.vuejs.org/guide/events.html#key-modifiers
   *
   * @description
   * Key Modifiers
   */
  export namespace Key {
    enum CommonAlias {
      Enter = 'enter',
      Tab = 'tab',
      Delete = 'delete', // (captures both "Delete" and "Backspace" keys)
      Esc = 'esc',
      Space = 'space',
      Up = 'up',
      Down = 'down',
      Left = 'left',
      Right = 'right'
    }

    enum UncommonAlias {}

    /**
     * @see
     * https://v3.vuejs.org/guide/events.html#key-aliases
     *
     * @description
     * Key Aliases
     */
    export const Alias = {
      ...CommonAlias,
      ...UncommonAlias
    };

    /**
     * @see
     * https://v3.vuejs.org/guide/events.html#system-modifier-keys
     *
     * @description
     * System Modifier Keys
     */
    export const enum System {
      Ctrl = 'ctrl',
      Alt = 'alt',
      Shift = 'shift',
      Meta = 'meta',
      Exact = 'exact' // The .exact modifier allows control of the exact combination of system modifiers needed to trigger an event.;
    }
  }

  export const enum MouseButton {
    Left = 'left',
    Right = 'right',
    Middle = 'middle'
  }
}
