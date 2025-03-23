<template>
  <div v-if="isOpen" class="overlay" v-motion-slide-bottom>
    <div class="form-container">
      <span class="close-btn"> <p @click="closeForm">&times;</p></span>

      <h2 v-if="!submitted">Message Me</h2>
      <form v-if="!submitted" @submit.prevent="submitForm">
        <input type="text" placeholder="Your Name" v-model="name" required />
        <input type="email" placeholder="Your Email" v-model="email" required />
        <textarea
          placeholder="Your Message"
          v-model="message"
          required
        ></textarea>
        <button type="submit" :disabled="loading">
          {{ loading ? "Submitting..." : "Submit" }}
        </button>
      </form>

      <!-- Success Message -->
      <div v-else class="success-message">
        <h2>🎉 Success!</h2>
        <p>Your message has been sent.</p>
        <button @click="closeForm">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitted: false,
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;

      // Replace with your Google Form's entry IDs
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSeCfhHpWcwqiHbgr353FC_Cd3I0EABgKLXxxXVnjUi5wd4Uig/formResponse";
      const formData = new FormData();
      formData.append("entry.1475980766", this.name); // Name Field
      formData.append("entry.1133551714", this.email); // Email Field
      formData.append("entry.1376333092", this.message); // Message Field

      try {
        await fetch(formUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors", // Prevents CORS errors
        });

        this.submitted = true; // Show success message
      } catch (error) {
        console.error("Error submitting form:", error);
      }

      this.loading = false;
    },
    closeForm() {
      this.submitted = false; // Reset form state
      this.name = "";
      this.email = "";
      this.message = "";
      this.$emit("close"); // Close form in parent
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 1000;
  border-radius: 50px;
  font-family: var(--primary-font);
}

.form-container {
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding: 20px;

  width: 30%;

  background: #000;
  color: white;
  border-radius: 30px;
  text-align: center;
}

.form-container h2 {
  line-height: 0;
  margin-bottom: 30px;
}

@media screen and (max-width: 601px) {
  .form-container {
    width: 100%;
    margin: 10px;
    background: transparent;
  }
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.close-btn {
  display: flex;
  position: relative;
  justify-content: flex-end;
}
.close-btn p {
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  line-height: 0;
}

input,
textarea {
  align-self: stretch;
  margin: 8px 0;
  padding: 10px 15px;
  border: 2px solid #464646;
  border-radius: 15px;
  max-width: 100%;
  color: #fff;
  font-size: var(--p);
  background: radial-gradient(
    closest-side,
    rgba(51, 51, 51, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
}

input {
  height: 25px;
}

textarea {
  height: 100px;
  resize: none;
  font-family: var(--primary-font);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #149ed4;
}

input::placeholder,
textarea::placeholder {
  color: #ffffff9d;
}

button {
  margin-top: 10px;
  padding: 15px 15px;
  border: none;
  border-radius: 15px;
  background: #149ed4;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--p);
}

button:hover {
  background: #14d42a;
}

button:disabled {
  background: gray;
}

.success-message {
  text-align: center;
}

.success-message button {
  text-align: center;
  padding: 10px 15px;
}

.success-message h2 {
  color: #14d42a;
}
</style>
