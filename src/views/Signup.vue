<template>
  <div style="margin-left: 250px;margin-right: 250px">
    <el-row style="margin-top: 140px;" :gutter="20">
      <el-col :span="9" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Username:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Password:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Confirm password:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Email:</span>
        <span style="font-weight: bold;font-size: 20px">Phone number:</span>
        <span style="font-weight: bold;font-size: 20px">Address:</span>
      </el-col>
      <el-col :span="6">
        <input type="text" v-model="username" style="font-size:20px;width:100%;border-radius:8px"/>
        <br><br>
        <input type="text" v-model="password" style="font-size:20px;width:100%;border-radius:8px"/>
        <br><br>
        <input type="text" v-model="confirm_password" style="font-size:20px;width:100%;border-radius:8px"/>
        <br><br>
        <input type="text" v-model="email" style="font-size:20px;width:100%;border-radius:8px"/>
        <br><br>
        <input type="text" v-model="phone" style="font-size:20px;width:100%;border-radius:8px"/>
        <br><br>
        <input type="text" v-model="address" style="font-size:20px;width:100%;border-radius:8px"/>
      </el-col>
    </el-row>

    <br><br>
    <br><br>
    <br>
    <el-row justify="center">
      <el-col :span="8">
        <el-button type="primary" @click="Signup">
          Sign up
        </el-button>
        <br><br>
        <a href="/">
          <button type="button" style="font-weight:normal;background-color:white;color:#838383;border-style:solid;border-color:white;font-size: 14px">
            Cancel
          </button>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return{
      username:'',
      password:'',
      confirm_password:'',
      email:'',
      address:'',
      phone:''
    }
  },
  methods:{
    Signup() {

    }
  }
}
</script>

<style scoped>

</style>