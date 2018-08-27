<template>
<el-form  label-width="80px">
   <el-form-item label="内容文件">
    <el-upload
  class="upload-demo"
  style="width:400px;"
  :action="webUrl"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :on-error = "handleError"
  :auto-upload=true
  list-type="text">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传json文件</div>
</el-upload>
  </el-form-item>
  <el-form-item label="图片文件">
     <el-upload
  class="upload-demo"
  style="width:400px;"
  :action="webUrl"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :on-error = "handleError"
  :auto-upload=true
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传图片文件</div>
  </el-upload>
  </el-form-item>
</el-form>

  
</template>

<script>
export default {
  data() {
    return {
      webUrl:'',
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response) {
     this.$message(response);
    },
    handleError(err) {
       this.$message.error(err);
    }
  },
  created(){
    this.webUrl = 'http://127.0.0.1:3000/'||localStorage.getItem('webUrl')
  }
};
</script>