<template>
  <div>
    <the-nav />
    <div id="onboard-container">
        <user-o-b />
    </div>
  </div>
</template>

<script>
import TheNav from '../../components/TheNavigation.vue';
import UserOB from '../../components/TheUserOB.vue';
export default {
    name: 'Onboard',
    components: {
        TheNav,
        UserOB
    }
};
</script>

<style lang="scss" scoped>
</style>
