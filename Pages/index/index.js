 
Page({
  goNewPage(){
    wx.switchTab({
      url: '../newPage/newPage',
    })
  },
  data:{
    logo: "",
    userInfo:null
  },
  onLoad(){
    var nickName = wx.getStorageSync("nickName");
    if(nickName!=""){
      wx.switchTab({
        url:"../newPage/newPage"
      })
    }
     this.setData({
       logo: getApp().globalData.logo
     })
  },
  getUserInfo: function () {
    this.goNewPage();
    var that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              console.log(res)
              getApp().getUserInfo();
              // that.UserLogin();
            }
          })
        }
        else {
          // that.UserLogin();
        }
      }
    })
  },
 onUnload(){
   getApp().onLaunch();
 },
  // getUserInfo: function () {
  //   wx.switchTab({
  //     url:"../newPage/newPage"
  //   });
  //   var that = this
  //   wx.getSetting({
  //     success:res=>{
  //       if (!res.authSetting['scope.userInfo']) {
  //         wx.authorize({
  //           scope: 'scope.userInfo',
  //           success:res=> {
  //             // 微信授权
  //           wx.getUserInfo({
  //           success: res => {
  //             console.log(res)
  //             this.setData({
  //               userInfo:res.userInfo
  //               })
  //              wx.login({
  //                success:res=>{
  //                  var gd = getApp().globalData;
  //                  var src = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + gd.appid + '&secret=' + gd.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
  //                 wx.request({
  //                   url: src,
  //                   method: "GET",
  //                   success: res => {

  //                     wx.setStorage({
  //                       key: 'openid',
  //                       data: res.data.openid
  //                     })
  //                     wx.request({
  //                       url: gd.domain+"/api/user/getUserInfo",
  //                       method: "POST",
  //                       data: {
  //                         userMsg: this.data.userInfo,
  //                         openid: res.data.openid
  //                       },
  //                       success: res => {
  //                           console.log(res)
  //                       }
  //                     });
  //                   }
  //                 })
  //                }
  //              })
  //           }
  //           })
  //           }
  //         })
  //       }
  //       else {
  //       }
  //     }
  //   })
  // },
 
  onShareAppMessage: function () {
       
  },
   
         
  
})