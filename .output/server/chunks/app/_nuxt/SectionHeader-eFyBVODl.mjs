import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    heading: String,
    style: {
      type: String,
      validator(value) {
        return ["dark", "light"].includes(value);
      }
    }
  },
  computed: {
    textColor() {
      return {
        color: this.style === "dark" ? "#051535" : "#FFFFFF"
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))} data-v-8a098066><div class="text-center col-12" data-v-8a098066><h3 style="${ssrRenderStyle($options.textColor)}" data-v-8a098066>${ssrInterpolate($props.heading)}</h3></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8a098066"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=SectionHeader-eFyBVODl.mjs.map
