<template>
  <el-row justify="center" style="margin-top: 200px;">
    <el-col :span="8">
      <label for="username" style="font-weight:bold;font-size: 20px"> Username: </label><br>
      <input type="text" id="username" v-model="username" style="font-size:20px;width:100%;border-radius:8px"/>
      <br /><br />
      <label for="password" style="font-weight:bold;font-size: 20px"> Password: </label><br>
      <input type="text" id="password" v-model="password" style="font-size:20px;width:100%;border-radius:8px"/>
      <br><br>
      <br><br>
      <br>
      <el-button type="primary" @click="Login">
        Login
      </el-button>
      <br><br>
      <a href="/">
        <button type="button" style="font-weight:normal;background-color:white;color:#838383;border-style:solid;border-color:white;font-size: 14px">
          Cancel
        </button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return{
      username:'',
      password:''
    }
  },
  methods: {
    Login() {
      // connect apigateway
    }
  }
}
</script>

<style scoped>

</style>