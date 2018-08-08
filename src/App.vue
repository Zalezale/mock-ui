<template>
<div>
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
          <router-link to="/"><el-menu-item index="1-1">上传api</el-menu-item></router-link>
       <router-link to="/use">
          <el-menu-item index="1-2">调用api</el-menu-item>
       </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
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
  data(){
    return {}
  },
  created() {
    this.$router.push("/");
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
