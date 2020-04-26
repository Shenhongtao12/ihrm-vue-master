<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-table
          :data="dataList"
          border
          style="width: 100%">
          <el-table-column fixed type="index" label="序号" width="100" />
          <el-table-column fixed prop="name" label="企业名称" width="200" />
          <el-table-column fixed prop="version" label="版本" width="150" />
          <el-table-column fixed prop="companyphone" label="联系电话" width="150" />
          <el-table-column fixed prop="expirationDate" label="截止时间" width="150" />
          <el-table-column fixed prop="name" label="所在地区" width="150" />
          <el-table-column fixed prop="state" label="状态" width="100" >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.state"
                inactive-value="0"
                active-value="1"
                active-color="#13ce66"
                disabled
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <router-link :to="'/saas-clients/details/'+scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
     </div>
  </div>
</template>

<script>
  import {list} from '@/api/base/saasClients'
export default {
  name: 'saas-clients',
  data() {
    return{
      dataList: []
    }
  },
  methods: {
    // 获取列表数据
    getList() {
      list().then(result => {
        console.log(result.data)
        this.dataList = result.data.data
      })
    }
  },
  // 创建完毕状态
  created() {
    this.getList()
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
