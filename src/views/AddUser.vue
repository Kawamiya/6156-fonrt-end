<template>
  <div style="margin-left: 250px;margin-right: 250px">
    <el-row style="margin-top: 140px;" :gutter="20">
      <el-col :span="9" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Username:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Email:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Phone number:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Address:</span>
      </el-col>
      <el-col :span="6">
        <input type="text" v-model="username" style="font-size:20px;width:100%;border-radius:8px"/>
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
        <el-button type="primary" @click="addUser">
          Add
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
  name: "AddUser",
  data() {
    return{
      username:'',
      email:'',
      address:'',
      phone:''
    }
  },
  methods:{
    addUser() {
      // need something like PUT /user/add
      // request body: JSON
      // params: username, email, address, phoneNum, etc (depend on how the database looks like)
    }
  }
}
</script>

<style scoped>

</style>