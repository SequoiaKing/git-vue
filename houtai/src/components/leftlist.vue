<template>
  <Layout>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>商品管理系统
          </MenuItem>
        </div>
      </Menu>
    </Header>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>商品发布管理
            </template>
            <MenuItem name="1-1">商品价格</MenuItem>
            <MenuItem name="1-2">商品信息</MenuItem>
            <MenuItem name="1-3">商品数量</MenuItem>
            <MenuItem name="1-4">商品图片</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>商品进货管理
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>上架商品管理
            </template>
            <MenuItem name="3-1">上架中</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
    </Layout>
  </Layout>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      gifxuekelist: [],
      self: this,
      //定义列
      filterMultiple: false,
      data4: []
    };
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: dark;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 55%;
  font-size: 30px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>