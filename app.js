//app.js
App({
  globalData: {
    userInfo: null,
    appid: "wxcdcea82c094087d6",
    secret: "9850092e558a13e91cbe2cfce87eda31",
    idObj:{},
    
    domain:'http://localhost/geomancy/public',
    logo:'https://miao.su/images/2019/02/18/logof015a.png',
    companyName:"明正道大学堂",
    erweima:""
  },
  onLaunch: function () {

    // 统计访问量
    wx.request({
      url: this.globalData.domain + '/api/visit/addVisit',
      method: 'POST'
    })
    if (wx.getStorageSync('idObj') && wx.getStorageSync('userInfo')) {
      this.globalData.idObj = JSON.parse(wx.getStorageSync('idObj'));
      this.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo'));
      return false;
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that=this;
    // this.globalData.getUserMsg = getUserMsg;
    
 
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

          wx.getUserInfo({
            success: res => {
              // console.log(res);
              wx.setStorage({
                key: 'userInfo',
                data: JSON.stringify(res.userInfo),
              })
              wx.setStorageSync('nickName', res.userInfo.nickName)
              // console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              wx.setStorageSync('userInfo', JSON.stringify(res.userInfo))
              wx.login({
                success: res => {
                
                  var src = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + this.globalData.appid + '&secret=' + this.globalData.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
                  wx.request({
                    url: src,
                    method: "GET",
                    success: res => {
                       
                      this.globalData.idObj = res.data;
                      wx.setStorageSync('idObj', JSON.stringify(res.data ));
                     
                      wx.request({
                        url: this.globalData.domain+"/api/user/getUserInfo",
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
    // 获取小程序码
    return;
    var that=this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.globalData.appid+'&secret='+this.globalData.secret,
      method:"GET",
      success:data=>{
        var access_token=data.data.access_token;
        var json = {
          access_token: access_token,
          scene: "123782423dncsdjfs",
          path: "Pages/newPage/newPage"
        };
          wx.request({
            url: "https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=" + access_token,
            method:"POST",
            data:json,
            responseType: 'stream',
            success:data=>{
              console.log(data)
              // wx.request({
              //   url: this.globalData.domain+'/api/change2Code',
              //   method:"POST",
              //   data:{
              //     code:encodeURI(data.data)
              //   },
              //   success:res=>{
                   
              //   }
              // })
              // this.globalData.erweima = "data:image/jpeg;base64," + encodeURI(data.data);
              
            }
          })
      }
    })
 
   
    
    
    
   }


})