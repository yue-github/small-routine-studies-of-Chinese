// Pages/saoma/saoma.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://miao.su/images/2019/02/16/erweimac1e88.jpg'],
    erweimasrc: "",
    font_boo:true
  },
  pre() {
  
    if (this.data.font_boo){
      wx.showLoading({
        title: "加载中"
      });
      var globalData=getApp().globalData;
       
      wx.request({
        url: globalData.domain +'/api/user/getTuiGuangMa',
        method:"POST",
        data:{
          openid: globalData.idObj.openid
        },
        success:res=>{
          
          wx.hideLoading();
          var src = res.data[0].tuiguangma_src;
          if (src){
            this.setData({
              erweimasrc: src,
              imgalist: [src],
              font_boo: false
            });
          }else{

          }
        },
        fail(){
          wx.hideLoading();
        }
      })

      
    }else{
      
      wx.previewImage({
        current: this.data.erweimasrc, // 当前显示图片的http链接   
        urls: this.data.imgalist // 需要预览的图片http链接列表   
      }) 
    }
   

   
      // wx.previewImage({
      //   current: this.data.erweimasrc, // 当前显示图片的http链接   
      //   urls: this.data.imgalist // 需要预览的图片http链接列表   
      // })
     
   
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
  goMyIntegral() {
    wx.reLaunch({
      url: '../integral/integral'
    })
  },
  showDetail(){
    wx.showModal({
      title:'推广详情',
      content:'任何人通过此小程序码进入并购买商品,你都将获得佣金'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    // ../image/erweima.jpg
     
   

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