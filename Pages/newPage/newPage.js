var loveContent = require('../data/data');
var domain=getApp().globalData.domain;
Page({
  data: {
    logo: getApp().globalData.logo,
    dots:true,
    autoplay: true,
    interval: 3000,
    indicatorColor:'#fa8a46',
    indicatorActiveColor:'#fff',
    circular:true,
    loveContent:[],
    bannerSrc:[
      {
        id:1,
        url:'https://miao.su/images/2019/02/19/new1649aa.md.png'
      },
      {
        id: 2,
        url: 'https://miao.su/images/2019/02/19/new2fb293.md.png'
      },
      {
        id: 3,
        url: 'https://miao.su/images/2019/02/20/banner837dac.md.jpg'
      },
      {
        id:4,
        url: 'https://miao.su/images/2019/02/19/new58e01e.md.jpg'
      },
      {
        id:5,
        url: 'https://miao.su/images/2019/02/19/new3b9ff5.md.jpg'
      },
      {
        id:6,
        url: 'https://miao.su/images/2019/02/19/new49c577.md.jpg'
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
        navName: "语录"
      },
      {
        id: 5,
        fontClassName: 'fa fa-sun-o',
        navName: "活动"
      },
    ],
    columnData:[
    //   {
    //     id: 1,
    //     url: 'https://miao.su/images/2019/02/18/guoxue8a7df.md.jpg',
    //     whoColumn:'董老师课程',
    //     howPeople:1002,
    //     price:'688.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number:1,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
        
    //   },
    //   {
    //     id: 2,
    //     url: 'https://miao.su/images/2019/02/18/xu2535b.md.jpg',
    //     title: "风水国学",
    //     whoColumn: '蒲老师课程',
    //     price: "888.00",
    //     classCount: "信息",
    //     howPeople: '1235',
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
      
    //   {
    //     id: 3,
    //     url: 'https://miao.su/images/2019/02/18/lu1e508.jpg',
    //     whoColumn: '徐老师课程',
    //     howPeople: 1230,
    //     price: '688.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
    //   {
    //     id: 4,
    //     url: 'https://miao.su/images/2019/02/18/pucaee7.jpg',
    //     whoColumn: '魏老师课程',
    //     howPeople: 13,
    //     price: '36608.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 8,
    //     pay_is:0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
        
    //   },
    //   {
    //     id: 5,
    //     url: 'https://miao.su/images/2019/02/18/he739b3.md.jpg',
    //     whoColumn: '吴老师课程',
    //     howPeople: 872,
    //     price: '6885.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 9,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
    //   {
    //     id: 6,
    //     url: 'https://miao.su/images/2019/02/18/zhanga11ca.jpg',
    //     whoColumn: '张老师课程',
    //     howPeople: 1305,
    //     price: '686.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
    //   {
    //     id: 7,
    //     url: 'https://miao.su/images/2019/02/18/wu9f062.jpg',
    //     whoColumn: '何老师课程',
    //     howPeople: 133,
    //     price: '6589.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
    //   {
    //     id: 8,
    //     url: 'https://miao.su/images/2019/02/18/weic9a18.jpg',
    //     whoColumn: '卢老师课程',
    //     howPeople: 233,
    //     price: '3333.00',
    //     title: "风水国学",
    //     classCount: "信息",
    //     other: '热销中...',
    //     integral: 0.15,
    //     howIntegral: 8,
    //     inCount: 88,
    //     popBoo: false,
    //     number: 0,
    //     introduce: "人人都有向好之心，人人都有主吉之愿，所以人们相信风水，当然风水作为几千年的文明传承，更值得人们相信！有人说，好的风水是福人居福地，让所有的好能量磁场为我所用；有人说，好的风水是居龙脉、住吉宅，无煞无灾无阻碍；有人说，好的风水是藏风聚气，风生水起，助力自己平安健康、事事顺利、财源广进。这些观点都对，但并不全面。课程认为，你自己才是最好的风水！人才是主宰世界的主人，没有人，再好的风水也失去了用武之地；没有人，风水二字就是去了文化内涵和实际意义，只剩下流动的风和婉转的水。古人云，心生万法，道法自然。自然界的一切都是为人所用的。如果这个人没有向好之心、主吉之愿，没有良好的德行，没有担大任的鸿鹄之志和创业精神……再好的风水也白瞎！"
    //   },
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
        'titleImage': 'https://miao.su/images/2019/02/19/xuewen5df03.md.jpg',
        'contentDetail': '即使全世界都说你做不到，只有自己说做不到才算数。其实我们要战胜的始终是自己，和自己那无能的恐惧。带着恐惧上路，以便于更好的战胜它。',
        'star': 66,
        'comments': 608
      },
    ],
    dataMsg:"浏览-信息"
  },
  goRegister(){
      wx.navigateTo({
        url: '../signIn/signIn',
      })
  },
  dianzhan() {
    wx.showToast({
      title: "点赞未开放",
      image: "../image/sad.png",
      duration: 1500
    })
  },
  comment() {
    wx.showToast({
      title: "评论未开放",
      image: "../image/sad.png",
      duration: 1500
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const scene = decodeURIComponent(options.scene);
    this.setData({
      scene:scene
    })
    wx.request({
      url: domain +'/api/banner/list',
      method:'GET',
      success:res=>{
        this.setData({
          bannerSrc:res.data
        });
      }
    })
    wx.showLoading({
      title: "加载中"
    })
    this.setData({
      loveContent:loveContent.loveContent
      });
      // 测试
    // wx.request({
    //   url: domain +"/api/test",
    //   method:"POST",
    //   data:{
    //     name:'gdmzd',
    //     password:'li123456'
    //   },
    //   success(data){
    //       console.log(data)
    //   }
    // })
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
      wx.navigateTo({
        url: '../pushMakeMoney/pushMakeMoney',
      })
        // wx.showModal({
        //   title: "关于推广赚钱通知",
        //   content: "推广赚钱暂不对外开放，请耐心等待"
        // });
        
        console.log(2);
        break;
      case 3:
        wx.navigateTo({
          url: "../activityReward/activityReward"
        })
        break;
      case 4:
      wx.navigateTo({
        url: '../quotation/quotation',
      })
        // wx.showModal({
        //   title: "关于语录内容通知",
        //   content: "语录内容暂不对外开放，请耐心等待"
        // });
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
    wx.navigateTo({
      url: '../homeSearch/homeSearch'
    })
    // return;
    // wx.showModal({
    //   title: "关于搜索内容通知",
    //   content: "搜索内容暂不对外开放，请耐心等待"
    // });
  },
  goMoreColumn(){
    wx.navigateTo({
      url: "../class/class"
    })
    return;
    wx.showToast({
      title: "暂无更多课程",
      image: "../image/sad.png",
      duration: 1500
      // mask: false,
    })
  },
  goClassDetail(pope){
    if (pope.currentTarget.dataset.number==0){
      wx.showToast({
        title: "商品已售空",
        image: "../image/sad.png",
        duration: 1500,
      })
    }else{
      var json = JSON.stringify(pope.currentTarget.dataset.item);
      wx.navigateTo({
        url: '../class-detail/class-detail?item=' + json,
      })
    }
    
    
  },
  goMoreCulture(){
    wx.navigateTo({
      url: '../quotation/quotation',
    })
    // wx.showToast({
    //   title: "暂无更多语录",
    //   image: "../image/sad.png",
    //   duration: 1500
    // })
  },
  goCompanyIntroduce(){
    wx.showLoading({
      title:"加载中"
    });
    
      wx.navigateTo({
        url: '../companyIntroduce/companyIntroduce',
      })
  },
  goMoreData(){
    wx.showLoading({
      title: "加载中"
    })
    wx.navigateTo({
      url: '../moreCompanyData/moreCompanyData',
    })
  },
  goConcact(){
    wx.showLoading({
      title: "加载中"
    })
    wx.navigateTo({
      url: '../concact/concact',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: domain + '/api/class/getClassLimit',
      method: 'POST',
      data:{
        scene: this.data.scene ? this.data.scene:0,
        openid:getApp().globalData.idObj.openid
      },
      success: res => {
        if(res.data.status==200){
          this.setData({
            columnData: res.data.data
          });
        }
       
        
        wx.hideLoading();

      },
      fail: () => {
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