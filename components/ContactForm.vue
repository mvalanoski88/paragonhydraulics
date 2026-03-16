<template>
    <div class="flex justify-center mx-0">
        <form id="PHRFQ" @submit.prevent="emailSubmission" class="px-4 lg:px-0">
            <div class="flex flex-col">
                <label>Name<span class="px-2 text-paragon-red">*</span></label>
                <input type="text" id="name" name="name" maxlength="35" v-model="name" required>
            </div>
            <div class="flex flex-col">
                <label>Email<span class="px-2 text-paragon-red">*</span></label>
                <input type="email" id="email" name="email" v-model="email" required>
            </div>
            <div class="flex flex-col">
                <label class="block">Phone Number<span v-if="phoneRequired" class="px-2 text-paragon-red">*</span></label>
                <input id="phone" class="block w-full"
                    placeholder="(###) ###-####"
                    type="tel"
                    inputmode="numeric"
                    maxlength="14"
                    :required="phoneRequired"
                    :value="formattedPhone"
                    @input="handleInput"
                />
            </div>
                
            <div class="flex flex-col">
                <label>Company</label>
                <input type="text" id="company" name="company" v-model="company">
            </div>
            <div class="w-full">
                <StateDropdown @stateSelection="getState"/>
            </div>
            <input type="text" name="beepboop" v-model="beepboop" autocomplete="off" tabindex="-1" class="hidden"/>
            <div class="my-4 text-center">
                <button type="submit" class="btn uppercase px-8 py-2" id="rfQSubmission" value="Submit Form"
                    data-sitekey="6Lcdm5AoAAAAAGa2sDFblYckqe-t2exwT_68_4Mk"
                    data-action="submit">Submit Form
                </button>
            </div>
            <div id="result-text">
                <p class="disclaimer-text lh-sm">No personal information collected in this form is stored. The information collected is for communication purposes only.</p>
            </div>
        </form>
    </div>
</template>
    
<script setup>
import {ref} from 'vue';

const name = ref(null);
const email = ref(null);
const company = ref(null);
const beepboop = ref(null);
const phone = ref('');
const selectedState = ref('');
const runtimeConfig = useRuntimeConfig();
const dateCheck = Date.now();

const phoneRequired = computed(() => {
    return !!phone.value
})

const formattedPhone = computed(() => {
    const digits = phone.value

    const part1 = digits.slice(0, 3)
    const part2 = digits.slice(3, 6)
    const part3 = digits.slice(6, 10)

    if (digits.length <= 3) return part1
    if (digits.length <= 6) return `(${part1}) ${part2}`
    return `(${part1}) ${part2}-${part3}`
  })

const getState = (state) => {
    selectedState.value = state
}

function handleInput(e) {
  phone.value = e.target.value
    .replace(/\D/g, '')   // remove junk
    .slice(0, 10)
}

const submitEmail = async (api, emailBody) => {
  if (beepboop.value) {
    return;
  }
  else if (Date.now() - dateCheck < 1000) {
    return;
  }
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: emailBody,
    });

    const contentType = response.headers.get("content-type");
    let data = null;

    if (contentType?.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    const isError = response.status >= 400 || typeof data === 'string';

    return {
      status: response.status,
      data,
      error: isError ? `API error or unexpected response format.` : null,
    };
  }
  catch (error) {
    return {
      status: null,
      data: null,
      error: `An error occurred during the request: ${error.message || error}`,
    };
  }
};

const emailSubmission = async (event) => {
    event.preventDefault();

    const endpoint = runtimeConfig.public.emailApiBase;
    const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        senderPhone: phone.value,
        senderCompany: company.value,
        senderState: selectedState.value
    });

    try {
    const result = await submitEmail(endpoint, body);

    if (result.status >= 400 || result.error) {
        alert("A network error occurred. Please try again later.");
        await navigateTo('/')
    } else {
        await navigateTo('/email-success')
    }
    } catch (error) {
        alert("Something went wrong. Please try again later.");
        console.error("Unexpected error during email submission:", error);
        await nextTick()
        alert("A network error occurred. Please try again later.");
        await navigateTo('/')
    }
};

</script>

<style lang="scss">

select, input {
    height: 3.5rem;
    border: 4px solid #051535;
    color: #051535;
    outline: none;
    padding: 15px 40px 15px 15px;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

input::placeholder {
    color: #051535;
}

label {
    font-size: 1.05rem;
    font-weight: 700;
    color: #051535;
    margin-bottom: 0.85rem;
    text-transform: uppercase;
}


</style>