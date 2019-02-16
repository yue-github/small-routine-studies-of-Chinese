//app.js

App({
  globalData: {
    userInfo: null,
    appid: "wxcdcea82c094087d6",
    secret: "9850092e558a13e91cbe2cfce87eda31",
    idObj:{}
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that=this;
     
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              wx.login({
                success: res => {
                  var src = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + this.globalData.appid + '&secret=' + this.globalData.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
                  wx.request({
                    url: src,
                    method: "GET",
                    success: res => {
                      this.globalData.idObj = res.data;
                      wx.request({
                        url: "http://localhost/geomancy/public/api/user/getUserInfo",
                        method: "POST",
                        data: {
                          userMsg: that.globalData.userInfo,
                          openid: res.data.openid
                        },
                        success: res => {
                           
                        }
                      });
                    }

                  });

                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 登录
 
   
    
    
    
   }


})