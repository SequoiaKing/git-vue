
<template>

  <div class="pageEntire">
    <div class="register">
      <div class="inputBox">
        <span>用户名：</span>
        <Input v-model="userName" placeholder="输入用户名" style="width: 45%"/>
      </div>
      <div class="inputBox">
        <span>手机号：</span>
        <Input v-model="cellPhone" placeholder="输入手机号" style="width: 45%"/>
      </div>
      <div class="inputBox">
        <span>密码：</span>
        <Input v-model="password" type="password" placeholder="输入密码" style="width:45%"/>
      </div>
      <div class="inputBox">
        <span>确认密码：</span>
        <Input v-model="confirmPassword" type="password" placeholder="确认密码" style="width: 45%"/>
      </div>
      <div class="inputBox" id="butRegister">
        <Button type="warning" ghost>注册</Button>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>
 <script>
export default {
  name: "register",
  data() {
    return {
      userName: "",
      cellPhone: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    
  }
};
</script>

<style>
* {
  margin: opx;
  padding: 0px;
  font-size: 10pt;
  color: #666;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}

.pageEntire {
  width: 100%;
  height: 100vh;
  background-image: url(https://hbimg.huabanimg.com/f67f52237575604128c30362045850654523ccd356997-zc8mS3_fw658);
  z-index: -5;
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-position-y: 20%;
  background-position-x: 20%; */
}
.register {
  width: 70%;
  height: 90vh;
  position: relative;
  top: 5%;
  left: 15%;
  background-color: white;
  opacity: 0.7;
  padding-top: 10%;
  padding-left: 18%;
}
.inputBox{
    height: auto;
    padding: 10px;
    /* margin-left: 30%; */

}
.inputBox span{
    display: inline-block;
    width:15%;
}
#butRegister button{
    width: 60%;
}
</style>