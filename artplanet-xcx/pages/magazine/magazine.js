// pages/homepage/homepage.js
Page({
  data:{
    currentTab:1,
    coverImg:[
      'https://static.artplanet.cn/h5/754069207955542016.jpg'
    ],
    indicatorDots:true,
    books:{},
    videos:{},
    nmBook:{},
    hmBook:{},
    currentNm:0,
    currentHm:null,
    haha:1000
    
  },

  onReady:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'https://artplanet.cn/api/wx/magazine/list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          books:res.data.list,
          hmBook:res.data.hm,
          nmBook:res.data.nm
        })
      },
      fail: function() {
        // fail
        console.log('获取失败')
      },
      complete: function() {
        // complete
      }
    })
    // 页面渲染完成
  },
  
  //选项卡
  switchNav:function(e){
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    })
    
    
  },
  // 跳转h5详细页
  magazineDetail:function(e){   
    var id = parseInt(e.currentTarget.id);
    
    wx.setStorageSync('bookDetail', this.data.books[id])
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail'
    })
  },
  //跳转最新
  openNm:function(){
    wx.setStorageSync('bookDetail', this.data.nmBook)
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail'
    })
  },
  //跳转热门
  openHm:function(e){   
    var id = parseInt(e.currentTarget.id);
    wx.setStorageSync('bookDetail', this.data.hmBook[id])
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail'
    })
    
  }
  
  // cusImageLoad: function (e){
  //     var that = this;
  //     //这里看你在wxml中绑定的数据格式 单独取出自己绑定即可
  //     that.setData(WxAutoImage.wxAutoImageCal(e));
  //   }
})