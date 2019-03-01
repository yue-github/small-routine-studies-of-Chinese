// Pages/quotation/quotation.js
var loveContent = require('../data/data');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loveContent: [],
    talkData: [
      {
        'userLogo': '../image/li.jpg',
        'userName': '李肇峰',
        'date': '2019/2/18',
        'title': '心存善念，换位思考，事事顺利！',
        'titleImage': 'https://miao.su/images/2019/02/16/flower23cfe.jpg',
        'contentDetail': '这世上最难的，不是待人以诚，而是待你不喜欢的人以诚。这世上最难公道的，不是对外人，而是对你讨厌的人。人活在世总是有立场，这人好，那人不好，但谁来做裁判呢？谁给人以伤害别人的权力呢？无论从哪个角度去看人，都只能看到一个侧面，不要轻易伤害人，更不要轻易伤害人心，这是最大的善。',
        'star': 108,
        'comments': 668
      },
      {
        'userLogo': '../image/zhen.jpg',
        'userName': '郑老师',
        'date': '2019/2/16',
        'title': '心存自己，天地乾坤',
        'titleImage': 'https://miao.su/images/2019/02/19/xuewen5df03.md.jpg',
        'contentDetail': '即使全世界都说你做不到，只有自己说做不到才算数。其实我们要战胜的始终是自己，和自己那无能的恐惧。带着恐惧上路，以便于更好的战胜它。',
        'star': 66,
        'comments': 608
      },
    ],
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
  dianzhan(){
    wx.showToast({
      title: "点赞未开放",
      image: "../image/sad.png",
      duration: 1500
    })
  },
  comment(){
    wx.showToast({
      title: "评论未开放",
      image: "../image/sad.png",
      duration: 1500
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    })
    this.setData({
      loveContent: loveContent.loveContent
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