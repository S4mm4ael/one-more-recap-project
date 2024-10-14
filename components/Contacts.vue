<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name"> Name: </AppInput>
        <AppInput v-model="user.email" type="email"> Email: </AppInput>
        <AppTextArea v-model="user.text"> Text: </AppTextArea>
        <div class="controls">
          <AppButton class="btnWhite"> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppInput from "~/components/UI/Controls/Input.vue";
import AppTextArea from "~/components/UI/Controls/TextArea.vue";
import AppButton from "~/components/UI/Controls/Button.vue";
import Message from "~/components/UI/Message.vue";

export default {
  components: {
    AppInput,
    AppTextArea,
    AppButton,
    Message,
  },
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited!";
      // Reset
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
