// Pages/myTuiGuang/myTuiGuang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      found:0,
      earth:'../image/fo.png',
      msg:[
      {
        name:'加载中...',
        title:'加载中...',
        get_found:'加载中...',
        
      }
      ],
    dui_role:{
      how_integral:8,
      money:3
    },
    popBoo: false,
    userIntegral: 0,
    theData: 0
  },
  pop(){
    wx.showLoading({
      title: "加载中",
      mask:true
    });
    var globalData=getApp().globalData;
    wx.request({
      url: globalData.domain+'/api/user/proveContact',
      method:'POST',
      data:{
        openid: globalData.idObj.openid
      },
      success:res=>{
        wx.hideLoading();
        if(res.data.status==200){
          this.setData({
            popBoo: true
          });
        } else if (res.data.status == 201){
       
            wx.navigateTo({
              url: '../mySet/mySet',
            })
        }
      },
      fail(){
        wx.hideLoading();
      }
    })
   
  
  },
  bindinput(event) {
    //  ?parseInt(event.detail.value) : this.data.inCount
    var val = parseInt(event.detail.value) ? parseInt(event.detail.value) : 0;

    if (val <= this.data.found) {
      this.setData({
        userIntegral: val
      });

    }
    this.setData({
      theData: val
    })
  },
  ok() {
    var globalData = getApp().globalData;
    if (this.data.theData <= this.data.found && this.data.theData>=10) {
      wx.showLoading({
        title: "加载中",
        mask:true
      });
      wx.request({
        url: globalData.domain+'/api/found/useFound',
        method:'POST',
        data:{
          openid: globalData.idObj.openid,
          how_integral: this.data.dui_role.how_integral,
          money: this.data.dui_role.money,
          promotion_fund: this.data.theData
        },
        success:res=>{
          console.log(res)
          if(res.data.status==200){
              this.setData({
                found:res.data.found
              })
            wx.showModal({
              title: '恭喜你',
              content: '你兑换的推广金已提交申请，请耐心等待3-5个工作日',
              success:res=>{
                wx.reLaunch({
                  url: '../msg/msg',
                })
              }

            })
              wx.hideLoading();

          }else{
            wx.showToast({
              title: "兑换失败",
              image: "../image/sad.png",
              duration: 1500,
              mask: true,
            })
            wx.hideLoading();
          }
            
        },
        fail:res=>{
          wx.showToast({
            title: "兑换失败",
            image: "../image/sad.png",
            duration: 1500,
            mask: true,
          })
          wx.hideLoading();
        }
      })
      

      this.cancelPop();
    }

  },
  cancel() {
    this.cancelPop();
  },
  cancelPop() {
    this.setData({
      popBoo: false
    })
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
  showDetail(){
    wx.showModal({
      title: '推广金兑换',
      content: '推广金每' + this.data.dui_role['how_integral'] + '点可以兑换人民币' + this.data.dui_role['money']+'元,'+'至少兑换10个点'
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
    var globalData = getApp().globalData;
    wx.request({
      url: globalData.domain + '/api/user/getFound',
      method: 'POST',
      data: {
        openid:globalData.idObj.openid
      },
      success:res=>{
        wx.hideLoading();
        this.setData({
          found: res.data[0]['promotion_fund'] ? res.data[0]['promotion_fund']:0
        });
          
      },
      fail(){
        wx.hideLoading();
      }
    });
    wx.request({
      url: globalData.domain + '/api/msg/getTuiMsg',
      method: 'POST',
      data: {
        openid: globalData.idObj.openid
      },
      success: res => {
        wx.hideLoading();
        this.setData({
          msg: res.data ? res.data : 0
        });
        
      },
      fail() {
        wx.hideLoading();
      }
    });
    wx.request({
      url: globalData.domain +'/api/rule/getTuiRule',
      method:'POST',
      success:res=>{
        this.setData({
          dui_role:res.data[0]
        });
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