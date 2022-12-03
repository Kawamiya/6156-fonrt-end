<template>

</template>

<script>
import router from "@/router";
import {getGoogleToken} from "@/utils/getGoogleUrl";

export default {
  name: "GoogleAuth",
  methods: {
    getCode() {
      let code = router.currentRoute.value.query.code;
      localStorage.setItem('code', code);
      window.dispatchEvent(new CustomEvent('code-localstorage-changed', {
        detail: {
          storage: localStorage.getItem('code')
        }
      }));
      let header = {
        headers: {
          'Host': 'oauth2.googleapis.com',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      let url = getGoogleToken(code);
      this.$axios.post(url, header)
          .then(res => {
            console.log(res)
            let IDtoken = res.data.id_token;
            localStorage.setItem('IDToken', IDtoken);

          })
      router.push('/');
      this.$notify({type:"success", text: "Successfully Login!"});

    }
  },created() {
    this.getCode();
  }
}
</script>

<style scoped>

</style>