// Pages/payMehod/payMethod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classMsg: {
      // id: 1,
      // url: 'https://miao.su/images/2019/02/18/xu2535b.md.jpg',
      // title: "风水国学",
      // whoColumn: '董老师',
      // price: "888.00",
      // classCount: "信息",
      // howPeople: '1235',
      // other: '热销中...',
      // integral: 0.15,
      // howIntegral: 8,
      // inCount: 88,
      // popBoo: false,
      // number: 100000000,
      // introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    },
    payok:'888.00',
    useHowIntegral:0

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
  goMyIntegral() {
    wx.reLaunch({
      url: '../integral/integral'
    })
  },
  payLoad(){
    wx.showLoading({
      title: "加载中",
      mask:true
    });
    var glo = getApp().globalData;
    var json = this.data.classMsg;
    json.openid = glo.idObj.openid,
    json.pay_is=1;
    json.useHowIntegral = this.data.useHowIntegral;
    
    // delete json.id;

     wx.request({
       url: glo.domain+'/api/pay/upload',
       method:"POST",
       data: json,
       success:(res)=>{
          if(res.data.status==200){
            wx.showToast({
              title: "恭喜获得课程",
              icon: "success",
              image: '../image/sign.png',
              duration: 1500,
              mask: true
            })
            setTimeout(() => {
              var json=JSON.stringify(res.data.class_data);
              wx.reLaunch({
                url: "../msg/msg"
              })
            }, 1300);
            wx.hideLoading();
          }else{
            wx.showToast({
              title:'请联系客服',
              icon: "fail",
              image: '../image/sad.png',
              duration: 1300,
              mask: true
            })
            wx.hideLoading();
          }
          
       },
       fail(){
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
    if (options.item){
      this.setData({
        classMsg: JSON.parse(options.item)
      })
    }
    if (options.use){
      this.setData({
        useHowIntegral: parseInt(options.use)
      });
      this.setData({
        payok: (parseFloat(this.data.classMsg.price) - ((parseInt(options.use) / this.data.classMsg.howIntegral) * this.data.classMsg.integral)).toFixed(2)
      })
    }
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading();
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