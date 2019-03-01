// Pages/class-detail/class-detail.js
var globalData = getApp().globalData;
var domain = globalData.domain;
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classMsg:{
        id:1,
        url:'https://miao.su/images/2019/02/18/xu2535b.md.jpg',
        title:"风水国学",
        whoColumn:'董老师',
        price:"888.00",
        classCount:"信息",
        howPeople:'1235',
        other:'热销中...',
        integral:'0.15',
        howIntegral:8,
        inCount:88,
        popBoo:false,
        number:1000,
        tui_found:6,
        eye:'1',
        introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
      },
      userIntegral:0,
    theData:0

         
      
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
  userIntegral(){
      this.setData({
        popBoo:true
      })
  },
  bindinput(event){
    //  ?parseInt(event.detail.value) : this.data.inCount
    var val = parseInt(event.detail.value) ? parseInt(event.detail.value):0;
   
    if (val <= this.data.classMsg.inCount){
      this.setData({
        userIntegral: val
     });

    } 
    this.setData({
      theData: val
    })
   
      
  },
  ok(){
    
    if (this.data.theData <= this.data.classMsg.inCount && this.data.theData>=0) {
      this.cancelPop();
    }
      
  },
  cancel(){
    this.cancelPop();
  },
  cancelPop(){
    this.setData({
      popBoo: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  goPay(){
  var json=JSON.stringify(this.data.classMsg);

    var userIntegral = parseFloat(this.data.userIntegral).toFixed(2);
       wx.navigateTo({
         url: '../payMethod/payMethod?item=' + json + '&use=' + userIntegral
       }) 
  },
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    // 获取积分点
    var res_json = {
      inCount: 88
    }
     
    
    wx.request({
      url: domain +'/api/user/getInCount',
      method:'POST',
      data:{
        openid: getApp().globalData.idObj.openid
      },
      success:res=>{
       
        res_json = res.data ? res.data:res_json;
        var classMsg = Object.assign({}, this.data.classMsg, res_json);
        this.setData({
          classMsg: classMsg
        })
      }
    })
   
  
    if (options.item){
      var obj = JSON.parse(options.item);
       obj.integral=parseFloat(obj.integral)
      this.setData({
        classMsg: obj
      })
    }
      
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
      this.setData({
        useIntegral: this.data.classMsg.inCount
      })
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