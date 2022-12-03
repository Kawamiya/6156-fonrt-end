<script setup>
  import { getGoogleUrl } from './utils/getGoogleUrl';

  const from = '/';
</script>
<template>
  <div style="background-color: #FDFDFD;box-shadow:0 5px 5px rgba(0,0,0,0.3)">
    <el-row :gutter="3" style="padding: 10px">
      <el-col :span="2" :offset="16" style="text-align: center;font-size: 14px">
        <button type="button" @click="tryLogout" :style="[isLogin ? {'visibility':'visible'}:{'visibility':'hidden'}]" style="background-color: #FDFDFD;border:none">Logout</button>
      </el-col>
      <el-col :span="2" style="text-align: center;font-size: 14px">
        <a :href="getGoogleUrl(from)" :style="[isLogin ? {'visibility':'hidden'}:{'visibility':'visible'}]">
          <button type="button" @click="tryLogin" style="background-color: #FDFDFD;border:none">
            Login
          </button>
        </a>
      </el-col>
    </el-row>
    <el-row :gutter="6" style="padding: 40px">
      <el-col :span="3" :offset="2" style="text-align: center">
        <el-dropdown>
        <span class="el-dropdown-link" style="font-size: 24px;font-weight: bold">
          Items
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="ToItemList">Buy</el-dropdown-item>
              <el-dropdown-item @click="ToAddItem">Sell</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="3" style="text-align: center">
        <el-dropdown>
        <span class="el-dropdown-link" style="font-size: 24px;font-weight: bold">
          Users
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="ToUserList">List</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>

    </el-row>
  </div>
  <notifications position="top center"/>

  <router-view/>
</template>
<script>
import router from "@/router";
export default {
  name: "Layout",
  mounted() {
    window.addEventListener('code-localstorage-changed', (event) => {
      this.code = event.detail.storage;
      console.log(localStorage.getItem('code'));
      if (this.code !== null && this.code !== '') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  },
  data() {
    return {
      isLogin:false,
      code: null
    }

  },
  methods: {
    checkLogin() {
      if (localStorage.getItem('code') && localStorage.getItem('code')!=='') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    tryLogout() {
      this.checkLogin();
      //check whether logged in, if logged in, call API gateway
      if (this.isLogin) {
        this.$notify({type:"success", text: "Successfully Logout!"})

        this.isLogin=false;
        localStorage.setItem('code','');
        localStorage.setItem('IDToken', '');
      } else {
        this.$notify({type:"error",text:"Please Login First!"})
      }
    },
    tryLogin() {
      this.checkLogin();
      if (this.isLogin) {
        this.$notify({type:"error", text: "You are logged in!"})

      }
    },
    ToUserList() {
      router.push({name:'UserList'});
    },
    ToItemList() {
      router.push({name:"ItemList"});
    },
    ToAddItem() {
      router.push({name:"AddItem"});
    }
  },created() {
    this.checkLogin();
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
