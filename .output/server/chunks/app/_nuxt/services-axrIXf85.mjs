import { _ as __nuxt_component_0 } from './PageHero-7L2GmSAJ.mjs';
import { _ as __nuxt_component_1 } from './SectionHeader-eFyBVODl.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceClients = [
      { name: "United States Navy" },
      { name: "Military Sealift Command" },
      { name: "Commercial Marine and Offshore" },
      { name: "NAVSEA" },
      { name: "MARMC" },
      { name: "United States Coast Guard" },
      { name: "SWARMC" },
      { name: "Ship Repair Contractor/Vendors" }
    ];
    const servicesProvided = [
      { name: "Hydraulic crane and davit repair, removal, installation, and technical representative services" },
      { name: "Hydraulic crane preventative maintenance" },
      { name: "Hydraulic cylinder repair and testing" },
      { name: "Hydraulic door and ramp repair" },
      { name: "Cargo handling equipment repair (5y inspection)" },
      { name: "Pump and motor overhauls and alignments" },
      { name: "Mechanical equipment repair, removal, and installation" },
      { name: "Shipboard equipment inspections and operational testing" },
      { name: "Engineering services" },
      { name: "24/7 Emergency equipment repair globally" },
      { name: "Training programs" },
      { name: "009-90 support" },
      { name: "Operations support" },
      { name: "Remote technical support" },
      { name: "GFM Storage" },
      { name: "Hull and deck machinery" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = __nuxt_component_0;
      const _component_SectionHeader = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-eb8940a9>`);
      _push(ssrRenderComponent(_component_PageHero, {
        sectionId: "services",
        pageTitle: "Our Services",
        pageHeading: "Paragon offers an extensive array of shipboard services, emphasizing expertise in hydraulic crane and deck equipment repair, installation, and technical representation"
      }, null, _parent));
      _push(`<section data-v-eb8940a9><div class="p-0 m-0" data-v-eb8940a9><div class="row m-0 flex-column flex-md-row blue" data-v-eb8940a9><div style="${ssrRenderStyle({ "position": "relative", "min-height": "350px" })}" class="d-flex col-12 col-md-6 p-0 align-items-center" data-v-eb8940a9><div class="blue m-3 m-lg-5" style="${ssrRenderStyle({ "position": "relative", "z-index": "2" })}" data-v-eb8940a9><p class="small-copy" data-v-eb8940a9>While based in Virginia, our professional services have a global reach, catering to ports, bases, and shipyards worldwide.</p></div><div id="harborCrane" class="image-bg" data-v-eb8940a9></div></div><div class="col-12 col-md-6 align-self-center p-4 p-lg-5" data-v-eb8940a9><p data-v-eb8940a9>Paragon Hydraulics recognized a significant gap in technical oversight for shipboard cargo and boat handling equipment, leading to substantial inefficiencies and associated costs for the US Navy.</p><p data-v-eb8940a9>Our services extend to the installation and maintenance of cranes, cargo handling equipment, deck and huwe provide OEM Technical Representation for crane equipment and comprehensive solutions for the installation and repair of various shipboard mechanical systems.</p><p data-v-eb8940a9>With increasing threat of global conflict, the United States Navy must stay capable and ready to defend. Paragon Hydraulics assists in completing that mission the right way.</p></div></div></div></section><section id="techServices" class="justify-content-center" data-v-eb8940a9><div class="p-4 p-md-5" data-v-eb8940a9><div class="row" data-v-eb8940a9><div class="col-12 d-flex flex-column align-items-center" data-v-eb8940a9>`);
      _push(ssrRenderComponent(_component_SectionHeader, {
        heading: "General technical services",
        style: "light"
      }, null, _parent));
      _push(`<div class="row w-lg-75 p-3 mt-3 mt-lg-5 justify-content-lg-center" data-v-eb8940a9><div class="col-12" data-v-eb8940a9><ul class="services-provided" data-v-eb8940a9><!--[-->`);
      ssrRenderList(servicesProvided, (name) => {
        _push(`<li data-v-eb8940a9>${ssrInterpolate(name.name)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="row p-1 p-lg-3 red" data-v-eb8940a9><div class="p-0 col-12" data-v-eb8940a9><div class="row mt-3" data-v-eb8940a9><h4 class="text-center" data-v-eb8940a9>who we provide services to</h4></div><div class="row mt-4" data-v-eb8940a9><ul class="clients text-center" data-v-eb8940a9><!--[-->`);
      ssrRenderList(serviceClients, (name) => {
        _push(`<li data-v-eb8940a9>${ssrInterpolate(name.name)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const services = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb8940a9"]]);

export { services as default };
//# sourceMappingURL=services-axrIXf85.mjs.map
