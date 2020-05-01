<template>
  <div>
    <the-nav />
    <div id="onboard-container">
        <user-o-b v-if="!show" />
        <family-o-b v-if="show"/>
        <the-sign-up class="m-3"></the-sign-up>
    </div>
  </div>
</template>

<script>
import TheNav from '../../components/TheNavigation.vue';
import UserOB from '../../components/TheUserOB.vue';
import FamilyOB from '../../components/TheFamilyOB.vue';
import TheSignUp from '../../components/TheSignUp.vue';


export default {
    name: 'Onboard',
    components: {
        TheNav,
        UserOB,
        FamilyOB,
        TheSignUp
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        showNext: function(){
            this.show = true;
        }
    },
    mounted(){
        this.$root.$on('user-next', this.showNext)
    }
};
</script>

<style lang="scss" scoped>
</style>
