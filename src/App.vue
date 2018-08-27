<template>
<div>
  {{addWebUrl}}
  <el-container>

    <h1 style="width:100%;text-align:center;">欢迎使用本地mock平台</h1>
  </el-container>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>功能</template>
        <el-menu-item-group>
          <template slot="title">模块一</template>
          <router-link to="/submit"><el-menu-item index="1-1">上传api</el-menu-item></router-link>
       <router-link to="/use">
          <el-menu-item index="1-2">调用api</el-menu-item>
       </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-dialog title="webUrl选择" :visible.sync="dialogFormA">
  <el-form>
    <el-form-item label="当前使用的webUrl" :label-width="formLabelWidth">
      <el-select v-model="webUrl"  placeholder="请选择webUrl" @change="chooseWebUrl">
        <el-option v-for="(item ,index) in webUrls" :key='index' :value="item"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</el-dialog>
    <el-dialog title="webUrl新增" :visible.sync="dialogFormB">
  <el-form>
    <el-form-item label="新增url" :label-width="formLabelWidth">
      <el-input v-model="addWebUrl"  auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="toggleDialog('add')">确 定</el-button>
  </div>
</el-dialog>
    <el-dialog title="webUrl修改" :visible.sync="dialogFormC">
</el-dialog>
    <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
  <i class="el-icon-setting" style="margin-right: 15px"></i>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="search">查看</el-dropdown-item>
    <el-dropdown-item command="add">新增</el-dropdown-item>
    <el-dropdown-item command="mod">修改</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      <span>mock</span>
    </el-header>
    <el-main>
       <transition name="el-fade-in-linear">
         <keep-alive>
              <router-view ></router-view>
         </keep-alive> 
       </transition>
    </el-main>
  </el-container>
</el-container>
</div>

</template>
<script>
export default {
  data() {
    return {
      addWebUrl: "",
      webUrl: "",
      webUrls: [],
      dialogFormA: false,
      dialogFormB: false,
      dialogFormC: false,
      formLabelWidth: "240px"
    };
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "search":
          this.dialogFormA = !this.dialogFormA;
          break;
        case "add":
          this.dialogFormB = !this.dialogFormB;
          break;
        case "mod":
          this.dialogFormC = !this.dialogFormC;
          break;
      }
    },
    toggleDialog(command) {
      var that = this 
      switch (command) {
        case "add":
          that.dialogFormB = !that.dialogFormB;
          that.webUrls.push(that.addWebUrl),localStorage.setItem('webUrls',JSON.stringify(that.webUrls)),localStorage.setItem('webUrl',that.addWebUrl)
          break;
        case "mod":
          that.dialogFormC = !that.dialogFormC;
          break;
      }
    },
    chooseWebUrl(){
      localStorage.setItem('webUrl',this.webUrl)
    }
  },
  created() {
    this.webUrl = localStorage.getItem("webUrl");
    if (!localStorage.getItem("webUrls")) {
    } else {
      this.webUrls = JSON.parse(localStorage.getItem("webUrls"));
    }
    !!this.webUrl?this.$router.push("/submit"):this.$router.push("/")
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
