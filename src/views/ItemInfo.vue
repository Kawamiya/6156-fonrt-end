<template>
  <el-row style="padding: 10px;margin-top: 60px;margin-bottom: 100px;">
    <el-col :span="10">
      <span style="font-weight: bold;font-size: 24px">{{itemName}}</span>
    </el-col>
    <el-col :span="14" align="left">
      <span style="font-weight: bold;font-size: 20px">Price: </span>
      <span style="font-weight: normal;font-size: 20px">{{price}}</span>
      <br><br>
      <span style="font-weight: normal;font-size: 16px">{{totVolume}} Left</span>
      <br><br>
      <span style="font-size: 16px">Qty: </span>
      <el-input-number size="small" v-model="selectedNum" :min="1" :max="totVolume"  :step="1" step-strictly/>
      <br><br>
      <span style="font-size: 16px">Buyer: </span>
      <el-input v-model="buyerID" placeholder="buyer's ID" style="width: 50%"/>
      <br><br>
      <el-button type="success" key="primary" @click="BuyIt">Buy It</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="2"  :offset="18">
      <a href="/item/list">
        <el-button type="primary">Back</el-button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
import {useRoute} from "vue-router";
export default {
  name: "ItemInfo",
  data() {
    return {
      id: '',
      itemName: 'Item1',
      price: 39,
      totVolume: 499,
      selectedNum: 0,
      sellerID: 'default',
      buyerID: ''


    }
  },
  methods:{

    getItem(){
      const route = useRoute();
      this.id = route.params.itemID;
      // then gather info from api gateway
      // need something like GET /item/<id>
      // return type: JSON, params include: seller id, price, volume, etc.
    },
    BuyIt() {
      // need something like POST /tradeItem
      // request form: JSON; return form: JSON
      // body params: at least item ID, seller id, buyer id, price, quantity(volume), orderTime
      // It require a composite microservice for Item and Trade resources:
      // 1. it calls POST /item/<id> to update the volume (or any other things)
      // 2. it calls PUT /trade to create a new trade history
    }
  },created() {
    this.getItem();
  }
}
</script>

<style scoped>

</style>