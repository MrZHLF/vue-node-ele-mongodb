<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>运营管理
          </template>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ads/create">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>系统设置
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown trigger="click" @command='setDialogInfo'>
        <span class="el-dropdown-link">
          <span>{{username}}</span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item command='info'>个人信息</el-dropdown-item> -->
          <el-dropdown-item command='logout'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main>
        <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>


<script>
  export default {
    data() {
      return {
        username:""
      }
    },
    methods: {
      setDialogInfo(cmditem) {
				switch (cmditem) {
					case 'logout':
						this.logout()
						break;
				}
			},
      logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.$router.push('/login')
      }
    },
    created() {
      let user = JSON.parse(localStorage.getItem('user'))
      this.username = user.username
    },
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
