<template>
  <div>
    <div>
      <v-btn>
        <router-link :to="{ name: 'main'}">Main</router-link>
      </v-btn>
      <v-btn>
        <router-link :to="{ name: 'cooking'}">Cook</router-link>
      </v-btn>
      <v-btn>
        <router-link :to="{ name: 'profile'}">Profile</router-link>
      </v-btn>
    </div>
    <div>
        <v-btn>
            <router-link :to="{ name: 'pantry'}">Pantry</router-link>
        </v-btn>
        <v-btn @click="logout">Logout</v-btn>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
  methods: {
    logout: function() {
      let context = this;
      let config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token")
        }
      };
      axios
        .post(
          "api/user/logout",
          {
            userID: localStorage["user-id"]
          },
          config
        )
        .then(result => {
          console.log(result.data.msg);
          context.$router.push("/");
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-id");
          localStorage.clear();
        })
        .catch(err => {
          console.log(err);
        });
    },
    reloadWindow: function() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
