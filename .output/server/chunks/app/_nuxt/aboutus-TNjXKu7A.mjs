import { _ as __nuxt_component_0 } from './PageHero-MB27fyX-.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHero = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHero, {
    sectionId: "aboutus",
    pageTitle: "About Us",
    pageHeading: "Our team of skilled engineers and technicians brings a wealth of experience to every project. From conceptualization to execution, we leverage our expertise to deliver robust and reliable mechanical solutions"
  }, null, _parent));
  _push(`<section id="meetUs" class="justify-content-center"><div class="container"><div class="row p-4 p-lg-5"><div class="col-12 text-center"><p>Paragon Hydraulics LLC comprises a dedicated team of exceptionally skilled and motivated professionals boasting a collective experience of over 50 years in ship repair. Our team actively contributes to various programs for the Navy, Army, Coast Guard, MSC, and commercial industries.</p><p>Specializing in worldwide hull and deck machinery, Paragon Hydraulics is renowned for providing top-tier support and solutions. We are unwaveringly committed to cultivating, sustaining, and nurturing a workforce of utmost professionalism and high expertise, setting the benchmark in the ship repair, maintenance, and modernization industry.</p><p>Your success is our priority. We work closely with our clients to understand their challenges and provide customized hydraulic solutions that enhance efficiency, reduce downtime, and optimize performance.</p></div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutus as default };
//# sourceMappingURL=aboutus-TNjXKu7A.mjs.map
