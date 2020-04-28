<template>
  <div>hello instacart</div>
</template>

<script>
export default {
  name: "TheInstacart",
  methods: {
    instaLogin: function() {
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios.post("/api/v1/instacart/login", {
          input: {
              email: this.email,
              password: this.password
          }
      }, config);
    }
  },
  data(){
      return {
          email: null,
          password: null,
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
