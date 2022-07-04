<template>
  <el-card class="card">
    <el-table :data="tableData" height="750px" border>
      <el-table-column prop="icdCode" label="ICD-9编码" width="180" />
      <el-table-column prop="name" label="手术名称" width="540" />
      <el-table-column prop="level" label="手术分级" width="180" />
      <el-table-column prop="teleprompter" label="提词器" />
    </el-table>
  </el-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
}
</style>

<script>
import { getDictionary } from '@/api/surgery'

export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    getDictionary().then(Response => {
      const { data } = Response
      this.tableData = data
    })
  }
}
</script>
