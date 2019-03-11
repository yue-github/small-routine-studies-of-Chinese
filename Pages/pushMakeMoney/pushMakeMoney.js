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
          
          
          var src = res.data[0].tuiguangma_src;
          if (src){
            this.setData({
              erweimasrc: globalData.domain+'/'+src,
              imgalist: [globalData.domain + '/' +src],
              font_boo: false
            });
            wx.hideLoading();
          }else{
            // 获取小程序码
            
            var that = this;
            wx.request({
              url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' +  globalData.appid + '&secret=' + globalData.secret,
              method: "GET",
              success: data => {
                var access_token = data.data.access_token;
                var scene = ((new Date()).getTime() + 'a' + (Math.random() * 100000)).substr(0, 31);
                var json = {
                  
                  scene: scene ,
                  page: "Pages/newPage/newPage"
                };
                wx.request({
                  url: "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token="+access_token,
                  method: "POST",
                  data: JSON.stringify(json),
                  encoding:'binary',
                  // responseType: 'stream',
                  success: data => {
                    // console.log(data)
                    return false;
                    // 将获取到二进制流发到后台处理
                    wx.request({
                      url:  globalData.domain + '/api/change2Code',
                      method: "POST",
                      data: {
                        openid: globalData.idObj.openid,
                        code: data.data,
                        scene:scene
                      },
                      success: res => {
                          if(res.status==200){
                             
                              this.setData({
                                erweimasrc: globalData.domain + '/' +res.data.url,
                                imgalist: [globalData.domain + '/' +res.data.url],
                                font_boo: false
                              });
                           
                          }
                        wx.hideLoading();
                      },
                      fail:res=>{
                        wx.hideLoading();
                      }
                    })
                    // this.globalData.erweima = "data:image/jpeg;base64," + encodeURI(data.data);

                  }
                })
              }
            })
//获取小程序码
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