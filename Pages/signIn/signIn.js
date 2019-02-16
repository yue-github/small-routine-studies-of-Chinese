const date = new Date()
const years = []
const months = []
const days = []
var app = getApp();     // 取得全局App

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: date.getMonth()+1,
    days,
    day: date.getDate(),
    value: [date.getFullYear(), date.getMonth(), date.getDate()-1],
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
    console.log(val);
  },
  goTabBar(){
    wx.switchTab({
      url: '../newPage/newPage'
    })
  },
  goHome(){
    wx.switchTab({
      url: '../newPage/newPage',
    })
  },
  sign(){
    wx.showLoading({
      title:"签到进行中...",
      mask:true,
      success(){
        wx.request({
          url: 'http://localhost/geomancy/public/api/user/sign',
          method:"POST",
          data:{
            openid: app.globalData.idObj.openid,
            nowTimeStamp: (new Date()).getTime()/1000
          },
          fail(){
            wx.hideLoading();
            wx.showToast({
              title: "签到失败",
              image: "../image/sad.png",
              duration: 2000,
              mask: true,
            })
          },
          success(data){
            if(data.data.status==200){
              wx.hideLoading();
              wx.reLaunch({
                url: '../integral/integral?options=1',
              })
             
            }else{
              wx.hideLoading();
              wx.showToast({
                title: data.data.msg,
                image:"../image/sad.png",
                duration:2000,
                mask: true,
              })
              
            }
            
          }
        })
      }
    })
  },
  goMyIntegral(){
    wx.reLaunch({
      url: '../integral/integral'
    })
  },
  makeMoney(){
    wx.showModal({
      title:'推广赚钱',
      content:'此功能暂未开放，请耐心等待！'
    })
  },
  onShow(){
  }
  
})