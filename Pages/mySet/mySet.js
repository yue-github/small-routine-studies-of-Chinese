// Pages/mySet/mySet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         
          name:'',
          phone:'',
          bank:'',
          adrress:'',
          erweimaSrc:'',
          images:[],
          msg_boo:false
       
  },
  addimg(){
    
    wx.chooseImage({
      count:'1',
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        
        const images = res.tempFilePaths.concat(this.data.images);
        // 限制最多只能留下1张照片
        this.data.images = images.length <= 1 ? images : images.slice(0, 1)
        this.setData({
          erweimaSrc: images[0]
        });
        
      }
    })
   
  },
  submit(){
    wx.showLoading({
      title: "加载中",
      mask:true
    });
    this.setData({
      msg_boo: false
    })
    if (this.data.name=='' || this.data.phone=='' || this.data.adrress=='' || this.data.erweimaSrc==''){
        this.setData({
          msg_boo:true
        });
      wx.hideLoading();
        return false;
    }
    wx.showLoading({
      title: "加载中",
      mask:true
    });
   
    var promise=new Promise((resolve,reject)=>{
      wx.uploadFile({
        url: getApp().globalData.domain + '/api/img/upload',
        filePath: this.data.images[0],
        name: 'file',
        formData:{
          openid: getApp().globalData.idObj.openid,
          length: getApp().globalData.domain.length
        },

        success: res => {
          this.setData({
            erweimaSrc: getApp().globalData.domain + JSON.parse(res.data)['url']
          });
          resolve(this.data.erweimaSrc);
          wx.hideLoading();

        },
        fail: res => {
          wx.hideLoading();
          resolve(this.data.erweimaSrc);
        }
      })
    });
   
    promise.then(res=>{
      wx.showLoading({
        title: "加载中",
        mask: true
      });
      var globalData = getApp().globalData;
      wx.request({
        url: globalData.domain + '/api/user/goContact',
        method: 'POST',
        data: {
          openid: globalData.idObj.openid,
          name: this.data.name,
          phone: this.data.phone,
          adrress: this.data.adrress,
          erweimaSrc: this.data.erweimaSrc
        },
        success: res => {
          wx.hideLoading();
          wx.reLaunch({
            url: '../my/my',
          })
        },
        fail: res => {
          wx.hideLoading();
        }
      })
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
  input_fir(e){
    this.setData({
      name:e.detail.value
    });
  },
  input_sec(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  input_thir(e) {
    this.setData({
      adrress: e.detail.value
    });
    
  },
  input_four(e){
    this.setData({
      bank: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中",
      mask:true
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var globalData=getApp().globalData;
    wx.request({
      url: globalData.domain+'/api/user/getContact',
      method:'POST',
      data:{
        openid:globalData.idObj.openid
      },
      success:res=>{
        this.setData(Object.assign({},this.data,res.data[0]));
        wx.hideLoading();
        if (res.data[0]){
          this.setData({
            images: [res.data[0].erweimaSrc]
          });
        }
       
       
      },
      fail:res=>{
        wx.hideLoading();
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