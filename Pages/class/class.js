// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 课程列表数据
      classData:[
        {
          src:'../image/guoxue.jpg',
          className:'课程',
          price:'888.00',
          name:'未知',
          eyes:"未知",
          boo:true,
          introduce:"线下课程"
        }
      ]
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
  makeMoney() {
    wx.showModal({
      title: '推广赚钱',
      content: '此功能暂未开放，请耐心等待！'
    })
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
  goPay(){
    wx.showModal({
      title: '关于购买课程',
      content: '请先在此支付,完后线下领取商品',
      success(res){
         if(res.confirm==true){
             wx.navigateTo({
               url: '../payPage/payPage'
             })
         }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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