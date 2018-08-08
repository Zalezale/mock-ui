<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="Api名称">
    <el-input v-model="form.webUrl"></el-input>
  </el-form-item>
   <el-form-item label="调用方式">
    <el-select v-model="form.methods" placeholder="请选择活动区域">
      <el-option label="get" value="get"></el-option>
      <el-option label="post" value="post"></el-option>
      <el-option label="head" value="head"></el-option>
      <el-option label="put" value="put"></el-option>
    </el-select>
  </el-form-item>
<el-form-item label="传入数据" v-for="(pro,index) in form.params" v-bind:key="index">
  <el-col :span="1">key</el-col>
  <el-col :span="7">
      <el-input  placeholder="属性" style="width: 80%;" v-model="pro.name"></el-input>
    </el-col>
      <el-col :span="1">value:</el-col>
    <el-col :span="7">
      <el-input  placeholder="值" style="width: 80%;" v-model="pro.value"></el-input>
    </el-col>
    <el-col :span="2"></el-col>
      <el-col :span="1">
    <el-button type="success" icon="el-icon-plus" circle @click="addPro"></el-button>
    </el-col> <el-col :span="1">
    <el-button type="danger" icon="el-icon-minus" circle @click="delPro(index)"></el-button>
    </el-col>
</el-form-item>
  <el-form-item label="返回数据">
    <el-input type="textarea"  autosize v-model="form.response" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">调用</el-button>
  </el-form-item>
</el-form>

  
</template>

<script>
export default {
  data() {
    return {
      form: {
        webUrl: "http://10.123.0.130:3000/source",
        methods: "",
        response: "",
        params: [{ name: "", value: "" }]
      }
    };
  },
  methods: {
    addPro() {
      this.form.params.push({name:'',value:''})
    },
    delPro(index) {
      if(this.form.params.length===1){
        return
      }
      this.form.params.splice(index,1)
    },
    getParames() {
      let params = null;
      if (this.form.methods === "get") {
        params = this.form.params.reduce((pre, cur, index, arr) => {
          pre
            ? (pre += "&" + cur.name + "=" + cur.value)
            : (pre += cur.name + "=" + cur.value);
          return pre;
        }, "");
        return params;
      } else {
        params = {};
        this.form.params.forEach(function(value, index) {
          Object.defineProperty(params, value.name, {
            enumerable: true,
            configurable: false,
            writable: true,
            value: value.value
          });
        });
        return params;
      }
    },
    onSubmit() {
      let data = "";
      if ((data = this.form.methods) === "get") {
        this.axios[data](this.form.webUrl + "?" + this.getParames())
          .then(res => {
            this.form.response = JSON.stringify(res.data);
            this.$notify({
              title: "成功",
              message: "调用成功",
              type: "success"
            });
          })
          .catch(err => {
            this.$notify.error({
              title: "错误",
              message: err.response.data
            });
          });
      } else {
        this.axios[data](this.form.webUrl, this.getParames())
          .then(res => {
            this.form.response = JSON.stringify(res.config.data);
            this.$notify({
              title: "成功",
              message: "调用成功",
              type: "success"
            });
          })
          .catch(err => {
            this.$notify.error({
              title: "错误",
              message: err.response.data
            });
          });
      }
    }
  }
};
</script>