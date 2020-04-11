<template>
  <div>
    <Clients />
    <AuthorizedClient />
    <PersonalAccessTokens />
  </div>
</template>
<script>
    import Clients from '../../components/passport/Clients.vue';
    import AuthorizedClient from '../../components/passport/AuthorizedClients.vue';
    import PersonalAccessTokens from '../../components/passport/PersonalAccessTokens.vue';

    export default {
        name: 'Login',
        components: {
            Clients,
            AuthorizedClient,
            PersonalAccessTokens
        }
    }
</script>


<style scoped>

</style>
