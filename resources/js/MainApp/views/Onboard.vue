<template>
  <div>
    <div id="onboard-container">
        <user-o-b v-if="!show" />
        <family-o-b v-if="showFam"/>
        <the-sign-up v-if="showSub" class="m-3"></the-sign-up>
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
            show: false,
            showFam: false,
            showSub: false
        }
    },
    methods: {
        showNext: function(){
            this.show = true;
            this.showFam = true;
        },
        showSubBox: function(){
            this.showSub = true;
            this.showFam = false;
        }
    },
    mounted(){
        this.$root.$on('user-next', this.showNext);
        this.$root.$on('subscription', this.showSubBox);
    }
};
</script>

<style lang="scss" scoped>
</style>
