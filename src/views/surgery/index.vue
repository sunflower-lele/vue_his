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
                @click="alert"
                @click.stop.prevent="stopCollapse"
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
                @click="alert"
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
      }
    }
  },
  methods: {
    alert() {
      this.$alert('test')
    },
    stopCollapse() {
      // do nothing
    }
  }
}
</script>
