// Pages/companyIntroduce/companyIntroduce.js
var companyMsg = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:"",
    companyName:"",
    introduceData:[
      {
        title: "加载中...",
        content: "加载中..."
      },
      {
        title: "加载中...",
        content:'加载中...'
      },
      {
        title: "加载中...",
        content: "加载中..."
      },
      {
        title:"加载中...",
        content: "加载中...",
         
      }
    ],
    imgMsgData:{
      img1:"https://miao.su/images/2019/02/18/rong1d86b.md.jpg",
      img2:"https://www.miao.su/images/2019/03/11/ceoba6bf.png"
    }
    
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
     
    this.setData({
      logo:companyMsg.logo,
      companyName: companyMsg.companyName
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const globalData = getApp().globalData;
    wx.request({
      url: globalData.domain + '/api/nose/getComIntroduce',
      method: 'post',
      success: res => {
       
        this.setData({
          introduceData: res.data['intro'],
          imgMsgData: res.data['img'][0]
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