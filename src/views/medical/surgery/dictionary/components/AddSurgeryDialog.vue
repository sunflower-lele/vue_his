<template>
  <el-dialog
    title="添加手术"
    :visible.sync="visible"
    :before-close="handleClose"
    width="40%"
  >
    <el-form ref="form" :model="form">
      <el-form-item label="ICD-9编码" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
      <el-form-item label="手术名称" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
      <el-form-item label="手术等级" :label-width="formLabelWidth">
        <el-select
          v-model="form.region"
          placeholder="选择手术等级"
          class="form-width"
        >
          <el-option label="一级" value="1" />
          <el-option label="二级" value="2" />
          <el-option label="三级" value="3" />
          <el-option label="四级" value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="提词器" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          class="form-width"
          suffix-icon="el-icon-edit"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="visible = false"> 确 定 </el-button>
    </div>
  </el-dialog>
</template>

<style scoped>
.form-width {
  width: 70%;
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      form: {
        name: '',
        region: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
