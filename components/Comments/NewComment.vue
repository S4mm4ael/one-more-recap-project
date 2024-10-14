<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment:</h2>
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name"> Name: </AppInput>
        <AppTextArea v-model="comment.text"> Text: </AppTextArea>
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
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
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited!";
      this.comment.name = "";
      this.comment.text = "";
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
