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
          title: "區洛锜老师接受中央电视台采访网页：",
          src:'https://v.qq.com/x/page/r073025cbcf.html',
          img: "https://miao.su/images/2019/02/18/img1d1c76.md.jpg",
          srcShow:true
        },
        {
          title: "易学泰斗张志哲教授和易学泰斗邵伟华大师参加明正道大学堂开业仪式",
          img: "https://miao.su/images/2019/02/18/img2882bf.md.jpg"
        },
        {
           title: "广东电视台主持人和杨公风水传承人杨院长参加明正道开业仪式",
          img: "https://miao.su/images/2019/02/18/img49528e.md.jpg"
        },
        {
          title: "明正道大学堂區洛锜导师被江西龙虎山群仙会聘为百位道家长老之一",
          img: "https://miao.su/images/2019/02/18/img3e3701.md.jpg"
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