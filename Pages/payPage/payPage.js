// Pages/payPage/payPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lineBool:false,
    imgalist: ['https://miao.su/images/2019/02/16/zhie525e.jpg','https://miao.su/images/2019/02/16/weixin4851e.jpg']
  },
  pre(){
    var imgSrc = this.data.lineBool == false ? "https://miao.su/images/2019/02/16/weixin4851e.jpg" :"https://miao.su/images/2019/02/16/zhie525e.jpg";
    wx.previewImage({
      current: imgSrc, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    }) 
  },
  changePay(data){
    const who = data.currentTarget.dataset.who;
      switch(who){
        case 'weixin':
        this.setData({
          lineBool:false
        });
        break;
        case 'zhi':
          this.setData({
            lineBool: true
          });
          break;
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