import { _ as __nuxt_component_1$1 } from './SectionHeader-eFyBVODl.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext, ref, computed, unref, mergeProps } from 'vue';
import { _ as _export_sfc, b as useDevice } from '../server.mjs';
import { Icon } from '@iconify/vue';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><label for="state">State <select id="state" name="state"><option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia" selected="selected">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select></label></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StateDropdown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedState = ref("");
    function handleSelectedState(state2) {
      selectedState.value = state2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StateDropdown = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row justify-content-center mx-0" }, _attrs))}><div class="col-10 col-lg-12"><form id="PHRFQ"><label>Name <input type="text" id="name" name="name" maxlength="35"${ssrRenderAttr("value", _ctx.name)} required></label><label>Email <input type="email" id="email" name="email"${ssrRenderAttr("value", _ctx.email)} required></label><label>Phone Number <input type="tel" id="phone" name="phone" minlength="10" placeholder="###-###-####"${ssrRenderAttr("value", _ctx.phone)} required></label><label>Company <input type="text" id="company" name="company"${ssrRenderAttr("value", _ctx.company)} required></label>`);
      _push(ssrRenderComponent(_component_StateDropdown, { onSelectedState: handleSelectedState }, null, _parent));
      _push(`<div class="my-4" style="${ssrRenderStyle({ "text-align": "center" })}"><button type="submit" class="btn text-uppercase" id="submission" value="Submit Form" data-sitekey="6Lcdm5AoAAAAAGa2sDFblYckqe-t2exwT_68_4Mk" data-callback="onSubmit" data-action="submit">Submit Form</button></div><div id="result-text"><p class="disclaimer-text lh-sm">No personal information collected in this form is stored. The information collected is for communication purposes only.</p></div></form></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "contactus",
  __ssrInlineRender: true,
  setup(__props) {
    const loaded = ref(false);
    function iframeLoaded() {
      loaded.value = true;
    }
    const { isDesktopOrTablet } = useDevice();
    const iframeWidth = computed(() => {
      return isDesktopOrTablet ? 1800 : 300;
    });
    const iframeHeight = computed(() => {
      return isDesktopOrTablet ? 350 : 250;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeader = __nuxt_component_1$1;
      const _component_ContactForm = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-247583b6><section id="contactus" data-v-247583b6><div class="container mt-5 mt-lg-0" data-v-247583b6><div class="row flex-column flex-md-row align-items-center" data-v-247583b6><div class="col-12 col-md-5 text-center text-md-start" data-v-247583b6><h1 data-v-247583b6>CONTACT US</h1></div><div class="col-12 col-md-7 p-0" data-v-247583b6><div class="row" data-v-247583b6><div class="col-1 d-flex align-items-centers" data-v-247583b6><p class="text-uppercase text-align-left" data-v-247583b6>`);
      _push(ssrRenderComponent(unref(Icon), { icon: "zondicons:location" }, null, _parent));
      _push(`</p></div><div class="col-11 d-flex align-items-centers" data-v-247583b6><p class="text-uppercase text-align-left lh-sm" data-v-247583b6>711 falcon ave | chesapeake va, 23324</p></div></div><div class="row" data-v-247583b6><div class="col-1 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6>`);
      _push(ssrRenderComponent(unref(Icon), { icon: "tabler:mail-up" }, null, _parent));
      _push(`</p></div><div class="col-11 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6><a href="mailto:rfq@paragonhydraulics.com?subject=RFQ Request" data-v-247583b6>rfq@paragonhydraulics.com</a></p></div></div>`);
      if (unref(isDesktopOrTablet)) {
        _push(`<div class="row" data-v-247583b6><div class="col-1 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6>`);
        _push(ssrRenderComponent(unref(Icon), { icon: "ion:call-sharp" }, null, _parent));
        _push(`</p></div><div class="col-11 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6> 757-937-3773 </p></div></div>`);
      } else {
        _push(`<div class="row" data-v-247583b6><div class="col-1 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6>`);
        _push(ssrRenderComponent(unref(Icon), { icon: "tabler:phone-call" }, null, _parent));
        _push(`</p></div><div class="col-11 d-flex align-items-center" data-v-247583b6><p class="text-uppercase" data-v-247583b6><a href="tel:757-937-3773" data-v-247583b6>757-937-3773</a></p></div></div>`);
      }
      _push(`</div></div>`);
      if (iframeLoaded) {
        _push(`<div class="row mt-3 mt-lg-4" data-v-247583b6><div class="col-12 d-flex justify-content-center" data-v-247583b6><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.518442376843!2d-76.2819904!3d36.7821183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baa361505b8a3b%3A0x5183a2f8d4d3755!2sParagon%20Hydraulics!5e0!3m2!1sen!2sus!4v1752897307929!5m2!1sen!2sus"${ssrRenderAttr("width", iframeWidth.value)}${ssrRenderAttr("height", iframeHeight.value)} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" data-v-247583b6></iframe></div></div>`);
      } else {
        _push(`<div class="row" data-v-247583b6><div class="col-12 d-flex justify-content-center" data-v-247583b6><p class="text-center" data-v-247583b6>Loading map...</p></div></div>`);
      }
      _push(`</div></section><section id="contactForm" class="justify-content-center" data-v-247583b6><div class="contact-us-form m-0 mb-5 p-0 mt-4 mt-md-5" data-v-247583b6>`);
      _push(ssrRenderComponent(_component_SectionHeader, {
        class: "mb-4",
        heading: "Send Us an RFQ",
        style: "dark"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contactus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactus = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-247583b6"]]);

export { contactus as default };
//# sourceMappingURL=contactus-BhJJdRhy.mjs.map
