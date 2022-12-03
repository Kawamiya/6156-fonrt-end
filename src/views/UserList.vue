<template>
  <div class="add-section">
    <el-row style="margin:40px 250px 0px 250px;padding: 10px">
      <el-col>
        <el-button type="success" @click="addUser" link>Add New</el-button>
      </el-col>
    </el-row>
  </div>
  <!--add search functionality-->
  <div class="search-section">
    <el-row style="margin-top: 20px">
      <el-col :span="4" :offset="10">
        <span>Username:</span>
        <el-input v-model="usernameInput" placeholder="Username" />
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="4" :offset="10">
        <span>Email:</span>
        <el-input v-model="emailInput" placeholder="Email" />
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="2" :offset="12">
        <el-button v-on:click="search" type="primary">Search</el-button>
      </el-col>
    </el-row>
  </div>
  <div class="result" style="margin-top: 40px">
    <el-row class="user-list" v-for="user in userList" style="margin-top: 10px">
        <el-col :span="12" :offset="6" style="border-style: solid;border-width: 2px;border-radius: 8px;border-color: #E0E0E0">
          <el-row>
            <el-col :span="6">
              <div style='line-height:80px;height:80px;font-size: 24px'>
                <span>{{user.username}}</span>
              </div>
            </el-col>
            <el-col :span="6" :offset="12">
              <div style='line-height:80px;height:80px;'>
                <el-button v-on:click="getProfile(user.id)" type="default">View</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
    </el-row>
  </div>
  <div class="pagination" style="margin-top:50px;display: flex;justify-content: center">
    <el-pagination
      v-model:currentPage="currentPage"
      :page-size="10"
      :small=false
      :disabled=false
      :background=false
      layout="total, prev, pager, next"
      :total="totalPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
  </div>

</template>

<script>
import router from "@/router";
import {stringifyQuery} from "vue-router";
export default {
  name: "UserList",
  data() {
    return {
      usernameInput: '',
      emailInput: '',
      currentPage: 1,
      totalPage: 0,
      userList: []
    }

  },
  methods: {
    search() {
      let params = {
        'page': this.currentPage,
        'limit': 10,
        'key': ''
      }
      let data = stringifyQuery(params);
      this.$axios.get('https://3w7w9si4dd.execute-api.us-east-1.amazonaws.com/dev/user/user/list',data)
          .then(res => {
            console.log('hi');
            console.log(res);
            this.userList = res.data.page.list;
            this.totalPage = res.data.page.totalPage + 1;
            // ideal structure {username, id, image_url}

          })
          .catch(err => {
            console.log('err');
            console.log('Error: ', err.message);
          });
      // need something like GET /user/search?<username=<usrInput>&email=<usrInput>&offset=<pageOffset>&limit=<pageSize>
      // return type: JSON, including all the searched results' user id and username

      // offset=(currentPage-1)*10, pagination=10
      // this.$axios.get(/*API Gateway url for GET /search?q={username=input&email=input}*/)
      //     .then(res => {
      //       console.log(res);
      //       // ideal structure {username, id, image_url}
      //
      //     })
      //     .catch(err => {
      //       console.log('Error: ', err.message);
      //     });
      // for (let i=0; i <10; i++) {
      //   this.userList.push({username:"UserName",id: 'default'})
      // }
    },
    handleSizeChange() {
      console.log(`10 items per page`)
    },
    handleCurrentChange(){
      console.log(`current page: ${this.currentPage}`)
      this.userList = [];
      this.userList.push({username:"UserName2",id: 'nextPage'});
    },
    getProfile(id) {
      console.log(id)
      router.push({name:'UserProfile', params: {id: id}});
    },
    addUser() {
      router.push({name:'AddUser'});
    }
  }

}
</script>

<style scoped>

</style>