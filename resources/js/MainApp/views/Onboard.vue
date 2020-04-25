<template>
  <div>
    <the-nav />
    <div id="onboard-container">
        <user-o-b v-if="!show" />
        <family-o-b v-if="show"/>
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
