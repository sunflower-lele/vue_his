<template>
  <div>
    <el-card id="config-card">
      <el-collapse accordion>
        <!-- 医生项 -->
        <el-collapse-item>
          <template slot="title">
            <div style="margin-left: 20px">
              <i
                class="el-icon-user-solid"
                @click.stop.prevent="config.doctorDialogVisible = true"
              />
              姓名: {{ doctor.name }}
            </div>
          </template>
          <div style="margin-left: 20px">
            <el-row :gutter="20">
              <el-col :span="6"> 性别: {{ doctor.sex }} </el-col>
              <el-col :span="6"> 身份证号: {{ doctor.identityNo }} </el-col>
              <el-col :span="6"> 电话号码: {{ doctor.telephone }} </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <!-- 科室项 -->
        <el-collapse-item>
          <template slot="title">
            <div style="margin-left: 20px">
              <i
                class="el-icon-s-cooperation"
                @click.stop.prevent="stopCollapse"
              />
              科室: {{ dept.name }}
            </div>
          </template>
          <div style="margin-left: 20px">
            <el-row :gutter="20">
              <el-col :span="6"> 编码: {{ dept.code }} </el-col>
            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!-- 会话 -->
    <el-dialog title="选择医生" :visible.sync="config.doctorDialogVisible">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="50" />
        <el-table-column property="date" label="日期" width="120" />
        <el-table-column property="name" label="姓名" width="120" />
        <el-table-column property="address" label="地址" />
      </el-table>
    </el-dialog>
  </div>
</template>

<style lang="postcss" scoped>
#config-card {
  margin: 20px;
  border: 2px;
  border-radius: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      doctor: {
        name: '覃鹏展',
        sex: '男',
        identityNo: 'xxxxxxxxxxxxxx',
        telephone: 'xxxxxxxxxxx'
      },
      dept: {
        name: '信息中心',
        code: '1000'
      },
      config: {
        doctorDialogVisible: false,
        deptDialogVisible: false
      }
    }
  },
  methods: {
    stopCollapse() {
      this.$alert('test')
    }
  }
}
</script>
