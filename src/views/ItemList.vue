<template>
  <!--add search functionality-->
  <div class="search-section">
    <el-row style="margin-top: 20px">
      <el-col :span="4" :offset="10">
        <span>Search:</span>
        <el-input v-model="keyword" placeholder="keyword" />
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="2" :offset="12">
        <el-button v-on:click="search" type="primary">Search</el-button>
      </el-col>
    </el-row>
  </div>
  <div class="result" style="margin-top: 40px">
    <el-row class="item-list" v-for="item in itemList" style="margin-top: 10px">
      <el-col :span="12" :offset="6" style="border-style: solid;border-width: 2px;border-radius: 8px;border-color: #E0E0E0">
        <el-row>
          <el-col :span="6">
            <div style='line-height:80px;height:80px;font-size: 24px'>
              <span>{{item.name}}</span>
            </div>
          </el-col>
          <el-col :span="6" :offset="12">
            <div style='line-height:80px;height:80px;'>
              <el-button v-on:click="getItem(item.id)" type="default">View</el-button>
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

export default {
  name: "ItemList",
  data() {
    return {
      keyword: '',
      currentPage: 1,
      totalPage: 100,
      itemList: []
    }

  },
  methods: {
    search() {
      console.log(this.keyword);

      // need something like GET /item/search?keyword=<keyword>&offset=<pageOffset>&limit=<pageSize>
      // return type: JSON, including all the searched results' item id and item name (or any other keywords)

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
      for (let i=0; i <10; i++) {
        this.itemList.push({name:"Item1",id: 'default'})
      }
    },
    handleSizeChange() {
      console.log(`10 items per page`)
    },
    handleCurrentChange(){
      console.log(`current page: ${this.currentPage}`)
      this.itemList = [];
      this.itemList.push({name:"Item2",id: 'nextPage'});
    },
    getItem(id) {
      console.log(id)
      router.push({name:'ItemInfo', params: {itemID: id}});
    }
  }

}
</script>

<style scoped>

</style>