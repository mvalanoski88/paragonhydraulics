import { _ as _export_sfc, a as __nuxt_component_0$1$1 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "CtaButton",
  __ssrInlineRender: true,
  props: {
    link: String,
    text: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `${props.link}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$1;
const _sfc_main = {
  name: "pagehero",
  components: { CtaButton: __nuxt_component_0$1 },
  props: {
    link: {
      type: String
    },
    text: {
      type: String
    },
    pageTitle: {
      type: String,
      required: false
    },
    pageHeading: {
      type: String,
      required: true
    },
    sectionId: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CtaButton = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ id: $props.sectionId }, _attrs))}><div class="container">`);
  if ($props.pageTitle) {
    _push(`<div class="row flex-column flex-md-row align-items-center"><div class="col-12 col-md-6 text-center text-md-start p-3 mb-5 mb-lg-0"><h1>${ssrInterpolate($props.pageTitle)}</h1></div><div class="col-12 col-md-6 p-0"><h2>${ssrInterpolate($props.pageHeading)}</h2></div></div>`);
  } else {
    _push(`<div class="row"><div class="col-12 text-center"><h1 class="home-hero-text">${ssrInterpolate($props.pageHeading)}</h1>`);
    _push(ssrRenderComponent(_component_CtaButton, {
      class: "mt-3 btn text-uppercase",
      link: $props.link,
      text: $props.text
    }, null, _parent));
    _push(`</div></div>`);
  }
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHero-MB27fyX-.mjs.map
