var app = getApp();
var domain=app.globalData.domain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integral:''
  },
  goTabBar() {
    wx.reLaunch({
      url: '../newPage/newPage',
    })
  },
  gosaoma() {
    wx.reLaunch({
      url: '../saoma/saoma'
    })
  },
  goHome() {
    wx.reLaunch({
      url: '../newPage/newPage',
    })
  },
  makeMoney() {
    wx.showModal({
      title: '推广赚钱',
      content: '此功能暂未开放，请耐心等待！'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    
    if(options.options==1){
      
      wx.showToast({
        title: "签到成功",
        icon: "success",
        image: '../image/sign.png',
        duration: 2500,
        mask: true
      })
    }
    
    wx.request({
      url: domain+'/api/user/getIntegral',
      method: 'POST',
      data: {
        openid: app.globalData.idObj.openid
      },
      success:data=> {
        this.setData({
          integral: data.data.integral[0]
        })
      }
    })
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