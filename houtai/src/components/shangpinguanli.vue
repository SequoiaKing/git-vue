<template>
  <Layout>
    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">商品后台管理界面</Header>
    <Content :style="{padding: '0 16px 16px'}">
      <Breadcrumb :style="{margin: '16px 0'}">
        <input type="button" @click="get()" value="读取数据">
        <!-- <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>-->
      </Breadcrumb>
      <Card>
        <div style="height: 600px">
          <template>
            <Table width="850" height="500" border :columns="columns" :data="gifxuekelist"></Table>
          </template>
        </div>
      </Card>
    </Content>
  </Layout>
</template>
<script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>
 <script>
export default {
  name: "shangpinguanli",
  data() {
    return {
      gifxuekelist: [],
      self: this,
      //定义列
      columns: [
        {
          title: "ID",
          type: "index",
          width: 150,
          fixed: "left",
          align: "center"
        },
        {
          title: "商品名称",
          key: "fName",
          width: 150,
          fixed: "left",
          align: "center"
        },

        {
          title: "图片",
          key: "imgsrc",
          width: 150,
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
          title: "数量",
          key: "fSellNum",
          align:'center',
          width: 150,
          filters: [
            {
              label: "大于20",
              value: "1"
            },
            {
              label: "小于20",
              value: "2"
            }
          ]
        },
        {
          title: "价格",
          key: "fPrice",
          width: 150
        },
        {
          title: "详细信息",
          key: "fDescription",
          width: 250,
          align: "left"
        },
        {
          title: "总价",
          key: "zip",
          width: 150
        },
        {
          title: "上架",
          key: "action",
          fixed: "right",
          width: 150,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "width:75"
                  }
                },
                "上架"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "width:75"
                  }
                },
                "下架"
              )
            ]);
          }
        }
      ],
      filterMultiple: false,
      fliterMethod(value, row) {
        if (value == 1) {
          return row.fSunNum > 20;
        } else if (value == 2) {
          return row.fSunNum < 20;
        }
      }
    };
  },
  computed: {
    imgsrc: function() {
      return "ownerID" + "storeFileName";
    }
  },
  methods: {
    get: function() {
      var that = this
      this.$ajax
        .post(
          'http://localhost:8080/baas/xiaodian/mypay/queryTakeout_food',
          { emulateJSON: true }
        )
        .then(function(res) {
          var items = [];
          for (let i = 0; i < res.data.rows.length; i++) {
          var object = {};
            object.fName = res.data.rows[i].fName.value;
            object.fPrice = res.data.rows[i].fPrice.value;
            object.fDescription = res.data.rows[i].fDescription.value;
            object.fSellNum = res.data.rows[i].fSellNum.value;
            object.imgsrc =
              "https://wxwaimai.oss-cn-huhehaote.aliyuncs.com/kyq/" +
              res.data.rows[i].ownerID.value +
              "/" +
              res.data.rows[i].storeFileName.value;
            items[i] = object;
          }
          that.gifxuekelist = items;
          console.log(res)
        })
        .catch(function() {
          alert("error");
          console.log("服务器异常");
        });
    }
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