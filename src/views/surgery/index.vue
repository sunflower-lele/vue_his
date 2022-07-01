<template>
  <div>
    <el-card id="config-card" class="radio">
      <el-collapse accordion>
        <!-- 医生项 -->
        <el-collapse-item>
          <template slot="title">
            <div style="margin-left: 20px">
              <i
                class="el-icon-user-solid"
                @click.stop.prevent="doctor.dialog.visible = true"
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
    <el-dialog title="选择医生" :visible.sync="doctor.dialog.visible">
      <el-table
        ref="singleTable"
        :data="
          doctor.dialog.data.filter(
            (data) =>
              !doctor.dialog.filter || data.code.includes(doctor.dialog.filter)
          )
        "
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="50" />
        <el-table-column property="code" label="工号" width="120" />
        <el-table-column property="name" label="姓名" width="120" />
        <el-table-column property="sex" label="性别" width="120" />
        <el-table-column property="dept">
          <template slot="header" slot-scope="{}">
            <el-row type="flex" class="text-center">
              <el-col :span="6">
                <div style="text-align: left; margin-top: 2px">科室</div>
              </el-col>
              <el-col :span="12" :offset="6">
                <el-input
                  v-model="doctor.dialog.filter"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<style lang="postcss" scoped>
.radio {
  border-radius: 20px;
}

#config-card {
  margin: 20px;
  border: 2px;
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
        telephone: 'xxxxxxxxxxx',
        dialog: {
          visible: false,
          filter: '',
          data: [{
            code: '000306',
            name: '覃鹏展',
            sex: '男',
            dept: '信息中心'
          }]
        }
      },
      dept: {
        name: '信息中心',
        code: '1000',
        dialog: {
          visible: false,
          data: {}
        }
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
