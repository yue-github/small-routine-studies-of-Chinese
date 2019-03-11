// Pages/homeSearch/homeSearch.js
var domain = getApp().globalData.domain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classData: [],
    canGo: false,
    show_boo: false,
    inputData:'',
    pullHow:12,
    pullCount:0,
    canRequest:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
 
  goPay(res) {
    if (!this.data.canGo) {
      return false;
    } else {
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

        var globalData = getApp().globalData;
        wx.request({
          url: globalData.domain + '/api/class/addEye',
          method: "POST",
          data: {
            id: res.currentTarget.dataset.id
          },
          success: res => {
            // console.log(res);
          }
        })
        var json = JSON.stringify(res.currentTarget.dataset.item);
        wx.navigateTo({
          url: '../class-detail/class-detail?item=' + json
        })
      }
    }




  },
  changeData(e) {
     
    if (e.detail.value.replace(/\s*/g, '').length == 0) {
      this.setData({
        canRequest:true
      });
      wx.request({
        url: domain + '/api/class/getSearchClass',
        method: 'POST',
        data:{
            take:10,
            skip:0
        },
        success: res => {
          this.setData({
            classData: res.data
          });
        }
      })
    }
    this.setData({
      inputData: e.detail.value
    });

  },
  search() {
    if (!this.data.inputData.replace(/\s*/g, '')) {
      return false;
    }
    this.setData({
      canRequest:false,
      pullCount:0
    });
    wx.showLoading({
      title: "拼命搜索中..."
    });
    wx.request({
      url: domain + '/api/msg/shopSearch',
      method: 'post',
      data: {
        msg: this.data.inputData,
      },
      success: res => {

        this.setData({
          classData: res.data
        })
        wx.hideLoading();
      },
      fail: () => {
        wx.hideLoading();
      }

    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: domain + '/api/class/getSearchClass',
      method: 'POST',
      data:{
        take:10,
        skip:0
      },
      success: res => {
        if (!res.data) {
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

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    if(this.data.canRequest){
      wx.showNavigationBarLoading();
      this.setData({
        pullCount: this.data.pullCount + 1
      });
      wx.request({
        url: domain + '/api/class/getSearchClass',
        method: 'POST',
        data: {
          take: 10,
          skip: this.data.pullCount
        },
        success: res => {
          if (!res.data) {
            return false;
          }
          const arr=this.data.classData.concat(res.data);
          this.setData({
            classData: arr
          });
          this.setData({
            canGo: true,
            show_boo: true
          });
          wx.hideNavigationBarLoading();

        },
        fail: () => {
          wx.hideNavigationBarLoading();
        }


      })
    }
   
     
    
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})