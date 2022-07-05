<template>
  <el-card class="card">
    <!-- 数据表 -->
    <surgery-data-table ref="surgeryDataTable" />
    <!-- 按钮 -->
    <div style="margin-top: 10px">
      <el-button icon="el-icon-plus" circle @click="handleAdd" />
      <el-button icon="el-icon-refresh" circle @click="handleRefresh" />
    </div>
    <!-- 会话 -->
    <add-surgery-dialog ref="addSurgeryDialog" />
  </el-card>
</template>

<style scoped>
.card {
  border-radius: 20px;
}
</style>

<script>
import SurgeryDataTable from './components/SurgeryDataTable.vue'
import AddSurgeryDialog from './components/AddSurgeryDialog.vue'

export default {
  components: {
    SurgeryDataTable,
    AddSurgeryDialog
  },
  data() {
    return {
      addDialogVisible: false
    }
  },
  methods: {
    handleAdd() {
      this.$refs.addSurgeryDialog.visible = true
    },
    handleRefresh() {
      this.$refs.surgeryDataTable.refreshData().then(() => {
        this.$message({ message: '刷新成功', center: true, type: 'success' })
      })
    }
  }
}
</script>
