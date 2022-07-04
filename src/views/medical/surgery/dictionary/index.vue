<template>
  <el-card class="card">
    <el-table
      :data="tableData"
      max-height="750px"
      stripe
      border
      highlight-current-row
    >
      <el-table-column prop="icdCode" label="ICD-9编码" width="180" sortable />
      <el-table-column prop="name" label="手术名称" width="540" />
      <el-table-column
        prop="level"
        label="手术分级"
        width="180"
        sortable
        :filters="[
          { text: '一级', value: '一级' },
          { text: '二级', value: '二级' },
          { text: '三级', value: '三级' },
          { text: '四级', value: '四级' },
        ]"
        :filter-method="filterLevel"
      />
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
  },
  methods: {
    filterLevel(value, row) {
      return row.level === value
    }
  }
}
</script>
