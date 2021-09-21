<template>
  <Head title="Log in" />

  <!-- Form-->
  <form @submit.prevent="submit">
    <div class="form">
      <div class="form-panel one">
        <div class="form-header text-primary">
          <h1>Log in</h1>
        </div>
        <div class="form-content">
          <div class="form-group">
            <label for="email">EMAIL</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              required
              autofocus
              autocomplete="username"
            />
          </div>
          <div class="form-group">
            <label for="label">PASSWORD</label>
            <input
              id="password"
              type="password"
              v-model="form.password"
              required
              autocomplete="current-password"
            />
          </div>
          <div class="form-group">
            <label class="form-remember">
              <input type="checkbox" name="remember" v-model="form.remember" />
              <span>Remember me</span>
            </label>
          </div>
          <div class="form-group">
            <button type="submit">LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import GuestLayout from "@/Layouts/Guest.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";

export default {
  layout: GuestLayout,

  components: {
    Head,
    Link,
  },

  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false,
      }),
    };
  },

  methods: {
    submit() {
      this.form.post(this.route("login"), {
        onFinish: () => this.form.reset("password"),
      });
    },
  },
};
</script>

<style>
.form {
  position: relative;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin: 100px auto 10px;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
}
.form-group:last-child {
  margin: 0;
}
.form-group label {
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.2em;
}
.form-group input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  line-height: inherit;
}
.form-group button {
  background: #08228d;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
}
.form-group button:hover {
  background: #061b71;
}
.form-group .form-remember {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}
.form-group .form-remember input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
}
.form-group .form-recovery {
  color: #08228d;
  font-size: 12px;
  text-decoration: none;
}
.form-group .form-register {
  color: #08228d;
  font-size: 14px;
  text-decoration: none;
}
.form-panel {
  padding: 60px;
  box-sizing: border-box;
}
.form-header {
  margin: 0 0 40px;
}
.form-header h1 {
  padding: 4px 0;
  color: #08228d;
  font-size: 24px;
  font-weight: 700;
}
</style>
