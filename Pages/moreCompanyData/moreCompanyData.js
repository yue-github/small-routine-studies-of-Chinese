// Pages/moreCompanyData/moreCompanyData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    logo: getApp().globalData.logo,
    companyName: getApp().globalData.companyName,
      moreData:[
        {
          title: "加载中...",
          src:'',
          img: "",
          srcShow:true
        },
        {
          title: "加载中...",
          img: ""
        },
        {
          title: "加载中...",
          img: ""
        },
        {
          title: "加载中...",
          img: ""
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
  goLook(){
    console.log(this.data.moreData[0].src)
      wx.navigateTo({
        url: "../radio/radio?src="+this.data.moreData[0].src
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
    const globalData = getApp().globalData;
    wx.request({
      url: globalData.domain + '/api/nose/getMoreComData',
      method: 'post',
      success: res => {
         
        this.setData({
          moreData:res.data
        });
        wx.hideLoading();

      },
      fail: res => {
        wx.hideLoading();
      }

    })
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