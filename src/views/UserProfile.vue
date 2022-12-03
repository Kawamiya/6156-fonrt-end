<template>
<el-row style="padding: 10px;margin-top: 60px;margin-bottom: 100px;">
  <el-col :span="10">
    <span style="font-weight: bold;font-size: 24px">{{username}}</span>
  </el-col>
  <el-col :span="14" align="left">
    <span style="font-weight: bold;font-size: 20px">Nickname: </span>
    <span style="font-weight: normal;font-size: 20px" v-if="notEdit">{{nickname}}</span>
    <el-input v-model="nicknameInput" placeholder="nickname" v-else/>
    <br>
    <span style="font-weight: bold;font-size: 20px">Email: </span>
    <span style="font-weight: normal;font-size: 20px">{{email}}</span>
    <br>
    <span style="font-weight: bold;font-size: 20px">Phone number: </span>
    <span style="font-weight: normal;font-size: 20px" v-if="notEdit">{{phone}}</span>
    <el-input type="number" v-model="phoneInput" v-else/>
    <br><br>
    <el-button type="success" :style="[notEdit ? {'visibility':'hidden'}:{'visibility':'visible'}]" @click="tryEdit">Submit</el-button>
  </el-col>
</el-row>
  <el-row>
    <el-col :span="2" :offset="16">
      <el-button type="info" key="plain" @click="EditProfile" link :disabled="notEdit!==true">Edit</el-button>
    </el-col>
    <el-col :span="2">
      <a href="/user/list">
        <el-button type="primary">Back</el-button>
      </a>
    </el-col>
  </el-row>
  <el-row class="trade-history">

  </el-row>
</template>

<script>
import {useRoute} from "vue-router";
export default {
  name: "UserProfile",
  data() {
    return {
      id: '1',
      username: 'Username',
      email: 'xxxx@xxx.xxx',
      nickname: 'Some nickname',
      phone:'xxx-xxxx-xxxx',
      notEdit: true,
      nicknameInput: '',
      phoneInput: 0

    }
  },
  methods:{
    getProfile(){
      const route = useRoute();
      // this.id = route.params.id;
      this.id = '1';
      let url = 'https://3w7w9si4dd.execute-api.us-east-1.amazonaws.com/dev/user/user/info/'+this.id;
      this.$axios.get(url)
          .then(res => {
            console.log('hi');
            console.log(res);
            // ideal structure {username, id, image_url}
            this.username = res.data.user.username;
            this.nickname = res.data.user.nickname;
            this.phone = res.data.user.telephone;
            this.email = res.data.user.email;


          })
          .catch(err => {
            console.log('err');
            console.log('Error: ', err.message);
          });
      // then gather info from api gateway
      // need something like GET /user/<id>
      // for Sprint1, provide all necessary information stored in User database,
      // for Sprint2, user's trading history(composite microservice) goes here.
      // We need both User resource and trade resource
      // So the API GW may be GET /userinfo/<id> and link to the composite microservice:
      // eg. it GET /user/<id> and GET /trade?buyerID=<id>
    },
    EditProfile() {
      // need something like POST /edit/<id>
      // request form: JSON; return form: JSON
      // body params: depend on the user database, currently at least username, email, phoneNum, and address
      let code = localStorage.getItem('code');
      if (code === null || code === '') {
        this.$notify({type:"error",text:"Please Login First!"})
      } else {
        this.notEdit = false;
      }
    },
    tryEdit() {
      this.notEdit = true;
      var data = {
        'id': this.id
      }
      if (this.nicknameInput.trim() !== '') {
        data['nickname'] = this.nicknameInput;
      }
      console.log(this.phoneInput);

      this.$axios.post('https://3w7w9si4dd.execute-api.us-east-1.amazonaws.com/dev/user/user/update',
        data).then(res => {
          console.log(res);
      })

    }
  },created() {
    this.getProfile();
  }
}
</script>

<style scoped>

</style>