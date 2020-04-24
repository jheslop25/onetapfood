<template>
  <div>
    <the-nav />
    <div id="onboard-container">
        <user-o-b />
        <family-o-b />
    </div>
  </div>
</template>

<script>
import TheNav from '../../components/TheNavigation.vue';
import UserOB from '../../components/TheUserOB.vue';
import FamilyOB from '../../components/TheFamilyOB.vue';
export default {
    name: 'Onboard',
    components: {
        TheNav,
        UserOB,
        FamilyOB
    }
};
</script>

<style lang="scss" scoped>
</style>
