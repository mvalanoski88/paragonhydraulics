<template>
    <div class="row justify-content-center mx-0">
        <div class="col-8">
            <form id="PHRFQ">
                <label>Name
                <input type="text" id="name" name="name" maxlength="35" v-model="name" required></label>
                <label>Email
                <input type="email" id="email" name="email" v-model="email" required></label>
                <label>Phone Number
                <input type="tel" id="phone" name="phone" minlength="10" placeholder="###-###-####" v-model="phone" required></label>
                <label>Company
                <input type="text" id="company" name="company" v-model="company" required></label>
                <StateDropdown @selected-state="handleSelectedState"/>
                <div class="my-4" style="text-align: center;">
                    <button type="submit" class="btn text-uppercase" id="submission" value="Submit Form" data-sitekey="6Lcdm5AoAAAAAGa2sDFblYckqe-t2exwT_68_4Mk" data-callback='onSubmit' data-action="submit">Submit Form</button>
                </div>
                <div id="result-text">
                    <p class="disclaimer-text">No personal information collected in this form is stored. The information collected is for communication purposes only.</p>
                </div>
            </form>
        </div>
    </div>
</template>
    
<script setup>
import {InputFormatter} from '@levidavidmurray/input-formatter';
import {ref} from 'vue';

const selectedState = ref('');

function onSubmit(token) {
            document.getElementById("PHRFQ").submit();
        }
function handleSelectedState(state) {
    selectedState.value = state;
}

onMounted(() => {

    const formatter = InputFormatter({
    formats: {
        10: '(xxx) xxx-xxxx'
    },
    replaceChar: 'x',
    skipFormatOpts: [{length: 10, position: 1, skip: false}],
    });
    formatter.on('#phone');

    //Email Submission
    const form = document.getElementById("PHRFQ");
    form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, email, phone, company } = event.target;

    const endpoint = "https://t7hi1xq663.execute-api.us-east-1.amazonaws.com/default/paragonhydraulics-emailsend";
    
    const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        senderPhone: phone.value,
        senderCompany: company.value,
        senderState: state.value
    });
        
    const requestOptions = {
        method: "POST",
        body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (response.ok || !response.ok) {
                document.getElementById("result-text").innerHTML =
                '<p style="font-size: 1rem; margin-bottom: 0; text-align: center; line-height: 1.5rem;">Thank you for your request. A representative will be in contact with you.</p>';
                document.getElementById('submission').disabled="true";
                console.log(body)
            }
        })
        .catch((error) => {
            console.log('no working', error)
        })
    });
    //End Email Submission

})

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
}

input::placeholder {
    color: #051535;
}

label {
    display: flex;
    flex-direction: column;
    font-size: 1.05rem;
    font-weight: 700;
    color: #051535;
    margin-bottom: 0.85rem;
    text-transform: uppercase;
}


</style>