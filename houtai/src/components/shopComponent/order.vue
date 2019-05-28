 <template> 
  <div class="content">
    <div class="top">
        <Menu mode="horizontal" :theme="theme1" active-key="1">
          <Menu-item key="1">
            <Icon type="ios-paper"></Icon>所有订单
          </Menu-item>
          <Menu-item key="2">
           <Icon type="ios-star"></Icon>已发货
          </Menu-item>
           <Menu-item key="3">
          <Icon type="ios-color-filter"></Icon>未发货
          </Menu-item>
          <Menu-item key="4">
           <Icon type="ios-heart"></Icon>已完成
          </Menu-item>
          <Menu-item key="5">
             <Icon type="ios-cart"></Icon>已付款
          </Menu-item>
           <Menu-item key="6">
          <Icon type="ios-navigate"></Icon>意外终止
          </Menu-item>
        </Menu>
    </div>
       <div class="bottom">
         <div class="item1">
           <div>关键词:</div>
              <i-input icon="ios-search" placeholder="请输入..." style="width: 210px"></i-input>
         </div>
         <div class="item2">
           <div>订单发货日期：</div>
                  <row>
                <i-col span="12">
                    <Date-picker type="date" placeholder="选择日期" style="width: 120px"></Date-picker>
                </i-col>
                  </row>
                  <div>到</div>
                  <row>
                <i-col span="12">
                    <Date-picker type="date" placeholder="选择日期" style="width: 120px"></Date-picker>
                </i-col>
                </row>
                <i-button type="info" style="width:60px">查询</i-button>
         </div>
         <div class="item3">
           <div>运送情况:</div>
           <i-select :model.sync="model3" style="width:100px">
             <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
          </i-select>
         </div>
      </div>
      <div class="last">
        <div class="left"><input type="button" @click="get()" value="订单列表"></div>
        <div class="right" style="float: right;">
            <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changePage" show-elevator></Page>
        </div>
      </div>
       <i-table size="small" :columns="columns1" :data="showList">
           <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right:5px" @click="show(index)">修改</Button>
            <Button type="error" size="small" @click="handleDelete(index)">删除</Button>
           </template>
       </i-table>
      </div>
  </div>
 </template>
<style>
.content {
  width: 100%;
  height: 100%;
  /* background-color: blueviolet; */
}
.top {
  width: 100%;
  height: 45px;
  background-color: greenyellow;
}
.bottom {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px gray solid;
}
.item1{
  width: 280px;
  height: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 11pt;
  margin-left: 15px;
}
.item2{
  width: 450px;
  height: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 11pt;
  margin-left: 10px
}
.item3{
  width: 170px;
  height: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  font-size: 11pt;
  margin-left: 20px
}
.last{
  width: 100%;
  height: 30%;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  padding-right: 25px
}
.left{
  width: 100px;
  height: 45px;
  border: 1px solid gray;
  font-size: 11pt;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 25px
}
</style>
<script>
export default {
  name: "order",
  data() {
    return {
      showList:[],
      dataCount:0,
      pageSize:9,
      theme1: "light",
      cityList: [
                    {
                        value: 'yifukuan',
                        label: '已付款'
                    },
                    {
                        value: 'weifahuo',
                        label: '未发货'
                    },
                    {
                        value: 'daifahuo',
                        label: '待发货'
                    },
                    {
                        value: 'yifahuo',
                        label: '已发货'
                    },
                    {
                        
                        value: 'yiqianshou',
                        label: '已签收'
                    },
                    {
                        value: 'tuihuozhong',
                        label: '退货中'
                    },
                    {
                        value: 'tuihuowanjie',
                        label: '退货完结'
                    }
     ],
                data1:[],
                self: this,
                columns1: [
                    {
                        title: 'ID',
                        type: 'index',
                        align: "center"
                    },
                    {
                        title: '商品名称',
                        key: 'fName',
                        align: "center"
                    },
                    // {
                    //     title: '金额',
                    //     key: 'money',
                    //      align: "center"
                    // },
                    {
                        title: '图片',
                        key: 'imgsrc',
                        align: "center",
                          render: (h, params) => {
                      return h("div", [
                              h("img", {
                                  attrs: {
                                  src: params.row.imgsrc
                                 },
                       style: {
                       width: "40px",
                       height: "40px"
                }
              })
            ]);
          }
                    },
                    {
                        title: '描述',
                        key: 'fDescription',
                        align: "center"
                    },
                    {
                        title: '库存',
                        key: 'fSumNum',
                        align: "center",
                          filter: [
                         {
                            lable: "大于20",
                            value: 1
                          },
                         {
                            lable: "小于20",
                            value: 2
                          }
                               ],
                            filterMultiple: false,
                            filterMethod(value, row) {
                            if (value === 1) {
                            return row.fSumNum > 20;
                            } else if (value === 2) {
                            return row.fSumNum < 20;
                             }
                         }
                    },
                    {
                        title: "操作",
                        slot: "action",
                        width: 150,
                        align: "center"
                    }
                ],
          
        // data1: [
        //             {
        //                 name: '王小明',
        //                 age: 18,
        //                 address: '北京市朝阳区芍药居'
        //             },
        //             {
        //                 name: '张小刚',
        //                 age: 25,
        //                 address: '北京市海淀区西二旗'
        //             },
        //             {
        //                 name: '李小红',
        //                 age: 30,
        //                 address: '上海市浦东新区世纪大道'
        //             },
        //             {
        //                 name: '周小伟',
        //                 age: 26,
        //                 address: '深圳市南山区深南大道'
        //             }
        //         ],
              model2: '',
              model3: '',
              model4: ''
         }
           },
methods:{
      get: function() {
      var that = this;
      this.$http
        .post(
          "https://nimowang.work/Baas/xiaodian/mypay/queryTakeout_food",
          // https://nimowang.work/Baas/xiaodian/mypay/queryTakeout_food
          {
            emulateJSON: true
          }
        )
        .then(function(res) {
          var items = new Array();
          for (let i = 0; i < res.data.rows.length; i++) {
            var object = new Object();
            object.fID = res.data.rows[i].fID.value;
            object.fName = res.data.rows[i].fName.value;
            object.fPrice = res.data.rows[i].fPrice.value;
            object.fDescription = res.data.rows[i].fDescription.value;
            object.fSumNum = res.data.rows[i].fSumNum.value;
            object.imgsrc =
              "https://wxwaimai.oss-cn-huhehaote.aliyuncs.com/kyq/" +
              res.data.rows[i].ownerID.value +
              "/" +
              res.data.rows[i].storeFileName.value;
            items[i] = object;
          }
          that.data1 = items;
          that.dataCount = that.data1.length;
          if(that.dataCount<that.pageSize){
            that.showList=that.data1;
          }else{
            that.showList=that.data1.slice(0,that.pageSize);
          }
        })
        .catch(function() {
          alert("error");
          console.log("服务器异常");
        });
    },
       changePage(index){
         var that = this;
         var _start = (index-1)*that.pageSize;
         var _end = index*this.pageSize;
         that.showList = that.data1.slice(_start,_end);
       }
    }
   }
</script>