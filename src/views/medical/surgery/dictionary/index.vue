<template>
  <el-card class="card">
    <!-- 数据表 -->
    <surgery-data-table ref="child" />
    <!-- 按钮 -->
    <div style="margin-top: 10px">
      <el-button icon="el-icon-plus" circle @click="handleAdd" />
      <el-button icon="el-icon-refresh" circle @click="handleRefresh" />
    </div>
    <!-- 会话 -->
    <el-dialog title="提示" :visible.sync="addDialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
}
</style>

<script>
import SurgeryDataTable from './components/SurgeryDataTable.vue'

export default {
  components: {
    SurgeryDataTable
  },
  data() {
    return {
      addDialogVisible: false
    }
  },
  methods: {
    handleAdd() {
      this.addDialogVisible = true
    },
    handleRefresh() {
      this.$refs.child.refreshData().then(() => {
        this.$message({ message: '刷新成功', center: true, type: 'success' })
      })
    }
  }
}
</script>
