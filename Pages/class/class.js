// pages/class/class.js
var domain=getApp().globalData.domain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputData:'',
    // 课程列表数据
      classData:[
        // {
        //   id: 1,
        //   // 布尔类型为1时表示该课程是线下课程
        //   boo:1,
        //   line_is:"线下课程",
        //   url: 'https://miao.su/images/2019/02/18/guoxue8a7df.md.jpg',
        //   whoColumn: '董老师课程',
        //   howPeople: 1002,
        //   price: '688.00',
        //   title: "风水国学",
        //   classCount: "信息",
        //   other: '热销中...',
        //   integral: 0.15,
        //   howIntegral: 8,
        //   inCount: 88,
        //   popBoo: 0,
        //   number: 1,
        //   class_try_read:0,
        //   eye:'1',
        //   introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
        // }
      ],
      canGo:false,
    show_boo:false
  },
  goTabBar() {
    wx.reLaunch({
      url: '../newPage/newPage',
    })
  },
  goHome() {
    wx.reLaunch({
      url: '../newPage/newPage',
    })
  },
  gosaoma() {
    wx.reLaunch({
      url: '../saoma/saoma'
    })
  },
  makeMoney() {
    wx.navigateTo({
      url: '../pushMakeMoney/pushMakeMoney',
    })
    // wx.showModal({
    //   title: '推广赚钱',
    //   content: '此功能暂未开放，请耐心等待！'
    // })
  },
  goSign() {
    wx.reLaunch({
      url: '../signIn/signIn',
    })
  },
  goMyIntegral() {
    wx.reLaunch({
      url: '../integral/integral'
    })
  },
  goPay(res){
    if(!this.data.canGo){
      return false;
    }else{
      if (res.currentTarget.dataset.boo && res.currentTarget.dataset.try == 0) {
        wx.showModal({
          title: '关于购买课程',
          content: '请先在此支付,完后线下领取商品',
          success(res) {
            if (res.confirm == true) {
              wx.navigateTo({
                url: '../payPage/payPage'
              })
            }
          }
        })
      } else {
         
        var globalData=getApp().globalData;
        wx.request({
          url: globalData.domain+'/api/class/addEye',
          method:"POST",
          data:{
            id: res.currentTarget.dataset.id
          },
          success:res=>{
            // console.log(res);
          }
        })
        var json = JSON.stringify(res.currentTarget.dataset.item);
        wx.navigateTo({
          url: '../class-detail/class-detail?item=' + json
        })
      }
    }
    
     
     
    
  },
  changeData(e) {

    if (e.detail.value.replace(/\s*/g, '').length == 0) {
      wx.request({
        url: domain + '/api/class/getClass',
        method: 'POST',
        success: res => {
          this.setData({
            classData: res.data
          });
        }
      })
    }
    this.setData({
      inputData: e.detail.value
    });

  },
  search() {
    if (!this.data.inputData.replace(/\s*/g, '')) {
      return false;
    }
    wx.showLoading({
      title: "拼命搜索中..."
    });
    wx.request({
      url: domain + '/api/msg/shopSearch',
      method: 'post',
      data: {
        msg: this.data.inputData
      },
      success: res => {

        this.setData({
          classData: res.data
        })
        wx.hideLoading();
      },
      fail: () => {
        wx.hideLoading();
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: domain+'/api/class/getClass',
      method:'POST',
      success:res=>{
        if(!res.data){
          return false;
        }
        this.setData({
          classData:res.data
        });
        this.setData({
          canGo:true,
          show_boo:true
        });
        wx.hideLoading();
       
      },
      fail:()=>{
        wx.hideLoading();
      }

       
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})