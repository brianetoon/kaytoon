<template>
    <div class="contact">
        <p>I’d love to hear from you! Feel free to ask questions about my work, leave a comment, or just say hi.</p>
        <Form @submit="submit" class="contact-form" :validation-schema="schema">

            <Field name="name" v-slot="{ field }">
                <input type="text" v-bind="field" v-model="form.name" name="name" placeholder="Name">
            </Field>
            <transition name="error">
                <ErrorMessage class="error" name="name" />
            </transition>

            <Field name="email" v-slot="{ field }">
                <input type="email" v-bind="field" v-model="form.email" name="email" placeholder="Email">
            </Field>
            <transition name="error">
                <ErrorMessage class="error" name="email" />
            </transition>

            <Field name="message" v-slot="{ field }">
                <textarea v-bind="field" v-model="form.message" name="message" placeholder="Your message..."></textarea>
            </Field>
            <transition name="error">
                <ErrorMessage class="error" name="message" />
            </transition>

            <button class="submit" :disabled="submitting">
                <div class="button-text" v-if="!submitting">Send message</div>
                <div class="button-text" v-if="submitting">Sending</div>
                <Spinner v-if="submitting" />
            </button>
            
        </Form>
    </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import Spinner from '@/components/Spinner.vue'
import emailjs from 'emailjs-com'

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    Spinner
  },
  data() {
    const schema = yup.object({
        name: yup.string().required().min(3),
        email: yup.string().required().email(),
        message: yup.string().required().min(20)
    })
    return {
        schema,
        form: {
            name: '',
            email: '',
            message: '',
        },
        submitting: false
    }
  },
  methods: {
        submit() {
            this.submitting = true

            emailjs.send(
                "service_ggql7zd", 
                "template_efh2c1g", 
                {
                    name: this.form.name,
                    email: this.form.email,
                    message: this.form.message
                },
                "fcx-li92gIHcfXpqQ"
            )
            .then(() => {
                this.$emit('success')
                this.form.name = ''
                this.form.email = ''
                this.form.message = ''
            })
            .catch((error) => {
                console.error('Email send error:', error)
                alert('Oops! Something went wrong. Please try again.')
            })
            .finally(() => {
                this.submitting = false
            })
        }
    }
}
</script>

<style>
form.contact-form {
    position: relative;
}
input, textarea {
    display: block;
    width: 100%;
    margin-top: 23px;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid lightgray;
}
button.submit {
    display: flex;
    padding: 12px;
    margin-top: 23px;
    border: none;
    background: var(--clr-primary);
    cursor: pointer;
    border-radius: 4px;
}
button.submit:disabled {
    background: grey;
    cursor: not-allowed;
}
div.button-text {
    font-family: 'mr-eaves-sans', sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
}
textarea {
    height: 200px;
}
input:focus,
textarea:focus {
    outline: transparent;
    border: 2px solid var(--clr-primary);
}
button:focus {
    outline: transparent;
    border: 1px solid lightgray;
}
.error {
    color: crimson;
    position: absolute;
}

.error-enter-from,
.error-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
.error-enter-to,
.error-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.error-enter-active,
.error-leave-active {
    transition: all 0.3s ease;
}

@media screen and (min-width: 600px) {
    input, textarea, button.submit {
        margin-top: 30px;
    }
}
@media screen and (min-width: 850px) {
    div.button-text {
        font-size: 18px;
    }
}
</style>