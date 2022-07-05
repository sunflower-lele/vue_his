<template>
  <el-card class="card">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.icdCode.toLowerCase().includes(search.toLowerCase())
        )
      "
      max-height="700px"
      stripe
      highlight-current-row
    >
      <el-table-column prop="icdCode" label="ICD-9编码" width="180" sortable />
      <el-table-column prop="name" label="手术名称" width="500" />
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
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 按钮 -->
    <div style="margin-top: 10px">
      <el-button icon="el-icon-plus" circle />
      <el-button icon="el-icon-refresh" circle />
    </div>
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
      tableData: [],
      search: ''
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
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
