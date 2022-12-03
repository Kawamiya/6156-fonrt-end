<template>
  <div style="margin-left: 250px;margin-right: 250px">
    <el-row style="margin-top: 140px;" :gutter="20">
      <el-col :span="9" style="text-align: right">
        <span style="font-weight: bold;font-size: 20px">Item Name:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Seller ID:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Volume:</span><br><br>
        <span style="font-weight: bold;font-size: 20px">Price:</span><br><br>
      </el-col>
      <el-col :span="6">
        <el-input type="text" v-model="itemName" />
        <br><br>
        <el-input type="text" v-model="sellerID" />
        <br><br>
        <el-input-number size="small" v-model="volume" :min="1" :max="5000" :step="1" step-strictly />
        <br><br>
        <el-input-number size="small" v-model="price" :min="0" :max="500" :precision="2" />
      </el-col>
    </el-row>

    <br><br>
    <br><br>
    <br>
    <el-row justify="center">
      <el-col :span="8">
        <el-button type="primary" @click="addItem">
          Sell
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
  name: "AddItem",
  data() {
    return{
      itemName:'',
      sellerID: '',
      volume: 0,
      price: 0.0
    }
  },
  methods:{
    addItem() {
      // need something like PUT /item/add
      // request body: JSON
      // params: itemName, sellerID, volume, price, etc (depend on how the database looks like)
    }
  }
}
</script>

<style scoped>

</style>