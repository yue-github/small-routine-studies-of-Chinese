// Pages/my/my.js
var domain = getApp().globalData.domain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMsg:{
      nickName:'蓝之静云',
      avatarUrl:'',
      huiyuan_is:'普通会员',
      openid:'3432hfkdjnk'
    },
    classData:[
    ],
    canGo: false,
    show_boo: false
  },
goSign(){
  wx.navigateTo({
    url: '../signIn/signIn',
    
  })
},
  gopIntegral(){
    wx.navigateTo({
      url: '../integral/integral',

    })
  },
  goTuiguang(){
    wx.navigateTo({
      url: '../myTuiGuang/myTuiGuang',
    })
    // wx.showModal({
    //   title: "关于推广通知",
    //   content: "我的推广暂不对外开放，请耐心等待"
    // });
  },
 
goPay(res){
  var globalData = getApp().globalData;
  wx.request({
    url: globalData.domain + '/api/class/addEye',
    method: "POST",
    data: {
      id: res.currentTarget.dataset.id
    },
    success: res => {
      console.log(res);
    }
  })
  if (res.currentTarget.dataset.pay==1){
    var json = JSON.stringify(res.currentTarget.dataset.item);
    wx.navigateTo({
      url: '../listenClass/listenClass?item=' + json
    })
    return false;
   }
    if(!this.data.canGo){
      return false;
    }else{
      if (res.currentTarget.dataset.boo && res.currentTarget.dataset.try == 0) {
        wx.showModal({
          title: '关于购买课程',
          content: '请先在此支付,完后线下领取商品',
          success(res) {
            if (res.confirm == true) {
              wx.navigateTo({
                url: '../payPage/payPage'
              })
            }
          }
        })
      } else {
        var json = JSON.stringify(res.currentTarget.dataset.item);
        wx.navigateTo({
          url: '../class-detail/class-detail?item=' + json
        })
      }
    }




  },
  goSet(){
    wx.navigateTo({
      url: '../mySet/mySet',
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
  onReady(){
    wx.request({
      url: domain + '/api/class/getClassPay',
      method: 'POST',
      data: {
        openid: getApp().globalData.idObj.openid
      },
      success: res => {
        if (!res.data) {
          wx.hideLoading();
          return false;
        }
        this.setData({
          classData: res.data
        });
        this.setData({
          canGo: true,
          show_boo: true
        });
        wx.hideLoading();

      },
      fail: () => {

        wx.hideLoading();
      }


    })
    var json = this.data.userMsg;
    var obj = Object.assign({}, json, getApp().globalData.userInfo, { openid: getApp().globalData.idObj.openid.substring(0, 13) });
    this.setData({
      userMsg: obj
    });
  }
 
})