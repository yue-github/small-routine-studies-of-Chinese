var loveContent = require('../data/data');
Page({
  data: {
    dots:true,
    autoplay: true,
    interval: 2000,
    indicatorColor:'#fa8a46',
    indicatorActiveColor:'#fff',
    circular:true,
    loveContent:[],
    bannerSrc:[
      {
        url:'../image/banner1.jpg'
      },
      {
        url: '../image/banner2.jpg'
      },
      {
        url: '../image/banner3.jpg'
      },
      {
        url: '../image/banner1.jpg'
      },
      {
        url: '../image/banner2.jpg'
      },
      {
        url: '../image/banner3.jpg'
      }
    ],
    bagua:'../image/bagua.png',
    people:1008,
    groupName:"风水国学学习交流群",
    navData:[
      {
        id:1,
        fontClassName:'fa fa-book',
        navName:"课程"
      },
      {
        id: 2,
        fontClassName: 'fa fa-podcast',
        navName: "推广赚钱"
      },
      {
        id: 3,
        fontClassName: 'fa fa-shopping-bag',
        navName: "抢活动奖品"
      },
      {
        id: 4,
        fontClassName: 'fa fa-thumbs-up',
        navName: "专栏"
      },
      {
        id: 5,
        fontClassName: 'fa fa-sun-o',
        navName: "活动"
      },
    ],
    columnData:[
      {
        id: 1,
        url:'../image/guoxue.jpg',
        whoColumn:'董老师专栏',
        howPeople:1002,
        price:688
      },
      {
        id: 2,
        url: '../image/guoxue.jpg',
        whoColumn: '蒲老师专栏',
        howPeople: 25,
        price: 12080
      },
      {
        id: 3,
        url: '../image/guoxue.jpg',
        whoColumn: '徐老师专栏',
        howPeople: 1230,
        price: 688
      },
      {
        id: 4,
        url: '../image/guoxue.jpg',
        whoColumn: '魏老师专栏',
        howPeople: 13,
        price: 36608
      },
      {
        id: 5,
        url: '../image/guoxue.jpg',
        whoColumn: '吴老师专栏',
        howPeople: 872,
        price: 6885
      },
      {
        id: 6,
        url: '../image/guoxue.jpg',
        whoColumn: '张老师专栏',
        howPeople: 1305,
        price: 686
      },
      {
        id: 7,
        url: '../image/guoxue.jpg',
        whoColumn: '何老师专栏',
        howPeople: 133,
        price: 6589
      },
      {
        id: 8,
        url: '../image/guoxue.jpg',
        whoColumn: '卢老师专栏',
        howPeople: 1335,
        price: 685
      },
    ],
    special:"综合-专业-深度-广度",
    cultureSpecial:"深邃-人生-精髓-透彻",
    talkData:[
      {
        'userLogo': '../image/li.jpg',
        'userName': '李肇峰',
        'date': '2019/2/18',
        'title': '心存善念，换位思考，事事顺利！',
        'titleImage': 'https://miao.su/images/2019/02/16/flower23cfe.jpg',
        'contentDetail': '这世上最难的，不是待人以诚，而是待你不喜欢的人以诚。这世上最难公道的，不是对外人，而是对你讨厌的人。人活在世总是有立场，这人好，那人不好，但谁来做裁判呢？谁给人以伤害别人的权力呢？无论从哪个角度去看人，都只能看到一个侧面，不要轻易伤害人，更不要轻易伤害人心，这是最大的善。',
        'star': 108,
        'comments': 668
      },
      {
        'userLogo': '../image/zhen.jpg',
        'userName': '郑老师',
        'date': '2019/2/16',
        'title': '心存自己，天地乾坤',
        'titleImage': 'https://miao.su/images/2019/02/16/xuewenf1d3b.md.jpg',
        'contentDetail': '即使全世界都说你做不到，只有自己说做不到才算数。其实我们要战胜的始终是自己，和自己那无能的恐惧。带着恐惧上路，以便于更好的战胜它。',
        'star': 66,
        'comments': 608
      },
    ]
  },
  goRegister(){
      wx.navigateTo({
        url: '../signIn/signIn',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      loveContent:loveContent.loveContent
      });
    wx.request({
      url:"http://localhost/geomancy/public/api/test",
      method:"GET",
      success(data){
          // console.log(data.data)
      }
    })
  },
  joinUs:function(){
    wx.showModal({
      title:"加入群聊,请联系群主",
      content:"微信号为：lyj13802950491"
    });
  },
  goClass(key){
    switch(key.currentTarget.dataset.newid){
      case 1:
        wx.navigateTo({
          url: "../class/class"
        })
        break;
      case 2:
        wx.showModal({
          title: "关于推广赚钱通知",
          content: "推广赚钱暂不对外开放，请耐心等待"
        });
        
        console.log(2);
        break;
      case 3:
        wx.navigateTo({
          url: "../activityReward/activityReward"
        })
        break;
      case 4:
        wx.showModal({
          title: "关于专栏内容通知",
          content: "专栏内容暂不对外开放，请耐心等待"
        });
        break;
      case 5:
        wx.showModal({
          title: "关于活动内容通知",
          content: "活动内容暂不对外开放，请耐心等待"
        });
        break;
    }
     
  },
  goSearch(){
    wx.showModal({
      title: "关于搜索内容通知",
      content: "搜索内容暂不对外开放，请耐心等待"
    });
  },
  goMoreColumn(){
    wx.showToast({
      title: "暂无更多专栏",
      image: "../image/sad.png",
      duration: 2000,
      mask: true,
    })
  },
  goColumnDetail(){
    wx.showToast({
      title: "商品已售空",
      image: "../image/sad.png",
      duration: 2000,
      mask: true,
    })
  },
  goMoreCulture(){
    wx.showToast({
      title: "暂无更多语录",
      image: "../image/sad.png",
      duration: 2000,
      mask: true,
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