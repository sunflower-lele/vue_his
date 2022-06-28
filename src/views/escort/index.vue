<template>
  <div class="app-container">
    <el-card class="el-card-panel">
      <div class="filter-container">
        <el-input v-model="cardno" placeholder="请输入患者就诊卡号" style="width: 200px;" />
        <el-button style="margin-left: 10px;" type="primary" icon="el-icon-search">{{ '查询' }}</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column label="就诊卡号" prop="cardno" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="性别" width="60" prop="sex" />
        <el-table-column label="年龄" width="60" prop="age" />
        <el-table-column label="身份证号" width="160" prop="ideno" />
        <el-table-column label="电话号码" prop="phone" />
        <el-table-column label="电子邮箱" width="160" prop="email" />
        <el-table-column label="GCP患者" width="100" prop="gcp" />
        <el-table-column align="center" width="360" label="操作" prop="action">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleAdd(scope.$index, scope.row)">绑定陪护人</el-button>
            <el-button type="success" @click="peihuVisable = true">查看陪护人</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync="peihuVisable" custom-class="el-dialog-aside">
        <div v-if="flag">
          <div v-for="i in list" :key="i" class="peihu" style="border:2px solid #cfcfcf;margin-bottom:20px;">
            <el-form ref="dataForm" label-position="left" label-width="100px" style="width: 300px; margin-left:20px;margin-top:20px;">
              <el-form-item label="陪护证号" prop="peihuno">
                <el-input v-model="peihuno" disabled style="width: 260px;" />
              </el-form-item>
              <el-form-item label="陪护人卡号" prop="peihucardno">
                <el-input v-model="peihucardno" disabled style="width: 260px;" />
              </el-form-item>
              <el-form-item label="姓名" prop="peihname">
                <el-input v-model="peihname" disabled style="width: 260px;" />
              </el-form-item>
              <el-form-item label="性别" prop="peihusex">
                <el-input v-model="peihusex" disabled style="width: 260px;" />
              </el-form-item>
              <el-form-item label="年龄" prop="peihuage">
                <el-input v-model="peihuage" disabled style="width: 260px;" />
              </el-form-item>
            </el-form>
            <el-button type="primary" style="display:block;margin:0 auto;margin-bottom:20px;" @click="dialogStatus==='create'?createData():updateData()">
              {{ '注销陪护人' }}
            </el-button>
          </div>
        </div>
        <h2 v-else style="">无陪护人信息</h2>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
// import { MessageBox } from 'element-ui';
export default {
  data() {
    return {
      cardno: null,
      peihuno: null,
      peihucardno: null,
      peihname: null,
      peihusex: null,
      peihuage: null,
      tableData: [{
        cardno: '201211111',
        name: '王小虎',
        sex: '男',
        age: '25',
        ideno: '1212121212121212',
        phone: '18617161918',
        email: '111@qq.com',
        gcp: '是'

      }],
      list: [1, 2, 3],
      peihuVisable: false,
      flag: true
    }
  },
  methods: {
    handleAdd(index, row) {
      this.$prompt('请输入陪护人卡号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '绑定成功',
          center: true
        })
      })
    }
    /* console.log(index, row); */
  }
  /* handleSearch(index, row) {
        console.log(index, row);
      } */
}
</script>

<style scoped lang="scss">
.app-container {
  .el-card-panel {
    height: 100%;
    .filter-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .dialog-footer {
      text-align: center;
    }
  }
}
</style>
