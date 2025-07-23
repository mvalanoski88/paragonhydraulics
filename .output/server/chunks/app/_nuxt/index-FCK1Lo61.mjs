import { _ as __nuxt_component_0 } from './PageHero-7L2GmSAJ.mjs';
import { _ as __nuxt_component_1 } from './SectionHeader-eFyBVODl.mjs';
import { b as useDevice, d as useAppConfig } from '../server.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDesktopOrTablet } = useDevice();
    const config = useAppConfig();
    const logos = ref([
      { name: "usnavy", altText: "US Navy Logo" },
      { name: "uscoastguard", altText: "US Coast Guard Logo" },
      { name: "usmilitarysealifecommand", altText: "US Navy Marine Sealift Command Logo" },
      { name: "navsea", altText: "NAVSEA Logo" }
    ]);
    const getLogoSrc = (logo) => {
      return isDesktopOrTablet ? `${config.paragonConsts.AWS_IMG_DIR}${logo.name}.png` : `${config.paragonConsts.AWS_IMG_DIR}${logo.name}.webp`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = __nuxt_component_0;
      const _component_SectionHeader = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        sectionId: "home",
        pageHeading: "OEM Technical Representation for crane equipment and comprehensive solutions for shipboard mechanical systems",
        link: "contactus",
        text: "Contact Us"
      }, null, _parent));
      _push(`<section><div class="p-0 m-0 w-100"><div class="row m-0 flex-column flex-md-row" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.85)" })}"><div class="position-relative col-12 col-md-7 align-self-center p-5"><p>Based in Chesapeake, Virginia, we are a veteran-owned firm dedicated to marine hydraulics repair. Our services extend to the installation and maintenance of cranes, cargo handling equipment, deck and hull machinery, and marine hydraulics.</p><p>Additionally, we provide OEM Technical Representation for crane equipment and comprehensive solutions for the installation and repair of various shipboard mechanical systems.</p><div id="americanFlag" class="image-bg"></div></div><div class="position-relative col-12 col-md-5 p-0" style="${ssrRenderStyle({ "min-height": "350px" })}"><div id="homeCrane" class="image-bg"></div></div></div></div></section><section id="customers" class="justify-content-center"><div class="container m-0"><div class="row p-4"><div class="col-12">`);
      _push(ssrRenderComponent(_component_SectionHeader, {
        class: "text-center",
        heading: "Some of our customers",
        style: "light"
      }, null, _parent));
      _push(`<div class="row mt-0 mt-md-5"><!--[-->`);
      ssrRenderList(logos.value, (logo, index) => {
        _push(`<div class="d-flex justify-content-center mb-4 mb-md-0 col-6 col-md-3"><img${ssrRenderAttr("src", getLogoSrc(logo))}${ssrRenderAttr("alt", logo.altText)}></div>`);
      });
      _push(`<!--]--></div></div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-FCK1Lo61.mjs.map
