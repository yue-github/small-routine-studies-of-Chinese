// pages/class/class.js
var domain=getApp().globalData.domain;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航数据
    navData:[
      {
        // index表示要更改的布尔值名
        index:'m_fir',
        font:'fa fa-book icon-color',
        font_content:'课程类'

      },
      {
        index: 'm_sec',
        font: 'fa fa-ra icon-color',
        font_content: '佛珠类'

      },
      {
        index:'m_thir',
        font: 'fa fa-viadeo-square icon-color',
        font_content: '手环类'

      },
      {
        index: 'm_four',
        font: 'fa fa-briefcase icon-color',
        font_content: '锦囊类'

      },
      {
        index: 'm_five',
        font: 'fa fa-files-o icon-color',
        font_content: '缘签类'

      },
      {
        index: 'm_six',
        font: 'fa fa-file-photo-o icon-color',
        font_content: '画类'

      },
      {
        index: 'm_sev',
        font: 'fa fa-gift icon-color',
        font_content: '饰品类'

      },
      {
        index: 'm_eight',
        font: 'fa fa-archive icon-color',
        font_content: '其它'

      },
    ],
    // 轮播
    dots: true,
    autoplay: true,
    interval: 3000,
    indicatorColor: '#fa8a46',
    indicatorActiveColor: '#fff',
    circular: true,
    loveContent: [],
    bannerSrc: [
      {
        id: 1,
        url: 'https://miao.su/images/2019/02/18/guoxue8a7df.md.jpg'
      },
      {
        id: 2,
        url: 'https://miao.su/images/2019/02/18/xu2535b.md.jpg'
      },
      {
        id: 3,
        url: 'https://miao.su/images/2019/02/18/lu1e508.jpg'
      },
      {
        id: 4,
        url: 'https://miao.su/images/2019/02/18/pucaee7.jpg'
      },
      {
        id: 5,
        url: 'https://miao.su/images/2019/02/18/wu9f062.jpg'
      },
      {
        id: 6,
        url: 'https://miao.su/images/2019/02/18/he739b3.md.jpg'
      }
    ],
    // 课程列表数据
      classData:[
        {
          id: 1,
          // 布尔类型为1时表示该课程是线下课程
          boo:1,
          line_is:"线下课程",
          url: 'https://miao.su/images/2019/02/18/guoxue8a7df.md.jpg',
          whoColumn: '董老师课程',
          howPeople: 1002,
          price: '688.00',
          title: "风水国学",
          classCount: "信息",
          other: '热销中...',
          integral: 0.15,
          howIntegral: 8,
          inCount: 88,
          popBoo: 0,
          number: 1,
          class_try_read:0,
          introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
        }
      ],
      canGo:false,
    show_boo:false,
    module_obj:{
      m_fir:true,
      m_sec:false,
      m_thir:false,
      m_five:false,
      m_six:false,
      m_sev:false,
      m_eight:false

    },
    the_list:''

  },
  changeModuleShow(attr){
    this.setData({
      the_list:attr.currentTarget.dataset.list
    });
    console.log(attr.currentTarget.dataset.index);
    var module_obj = this.data.module_obj;
    for (var key in module_obj){
      module_obj[key]=false
    }
    module_obj[attr.currentTarget.dataset.index]=true;
    this.setData({
      module_obj: module_obj 
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
  goSign() {
    wx.reLaunch({
      url: '../signIn/signIn',
    })
  },
  goMyIntegral() {
    wx.reLaunch({
      url: '../integral/integral'
    })
  },
  goPay(res){
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: domain+'/api/class/getClass',
      method:'POST',
      success:res=>{
        // console.log(res.data)
        this.setData({
          classData:res.data
        });
        this.setData({
          canGo:true,
          show_boo:true
        });
        wx.hideLoading();
       
      },
      fail:()=>{
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})