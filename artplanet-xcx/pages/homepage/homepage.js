// pages/homepage/homepage.js
var WxAutoImage = require('../../utils/WxAutoImage.js');
var app = getApp();
Page({
  data:{
    currentTab:1,
    coverImg:[
      'https://static.artplanet.cn/h5/754069207955542016.jpg'
    ],
    indicatorDots:true,
    books:{},
    videos:{},
    currentBook:null,
    nmBook:{},
    hmBook:{},
    currentNm:0,
    currentHm:null,
    haha:1000,
    showImg : undefined,
    videoControl : undefined,
    checkNet:null
  },
  onLoad:function(options){
    // // 页面初始化 options为页面跳转所带来的参数
    // var _this = this;
    // console.log(app.globalData.magazineData);
    // this.setData({
    //   books:app.globalData.magazineData
    // })
  },
  onReady:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    this.setData({
      books:app.globalData.magazineData,
      nmBook:app.globalData.nmBook,
      hmBook:app.globalData.hmBook,
      videos:app.globalData.videoData
    })
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //选项卡
  switchNav:function(e){
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    })
    if(that.data.checkNet==null){
        wx.getNetworkType({
        success: function(res) {
          var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
          if(networkType != 'wifi'){
            wx.showModal({
              title: '提示',
              content: '当前非wifi环境，确定继续浏览吗？'
            })
          }
        }
      })
      that.setData({
        checkNet:1
      })
    }
    
  },
  // 跳转h5详细页
  magazineDetail:function(e){   
    var id = parseInt(e.currentTarget.id);
    this.setData({
      currentBook:id
    })
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail?currentBook='+JSON.stringify(this.data.currentBook)
    })
  },
  //跳转最新
  openNm:function(){
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail?currentNm=0'
    })
  },
  //跳转热门
  openHm:function(e){   
    var id = parseInt(e.currentTarget.id);
    this.setData({
      currentHm:id
    })
    wx.navigateTo({
      url: '../magazineDetail/magazineDetail?currentHm='+JSON.stringify(this.data.currentHm)
    })
  },
  //视频播放
  playVideo:function(e){
    var index = e.currentTarget.id;
    console.log(index);
    // for(var i=0; i<this.data.videos.length;i++){
    //   wx.createVideoContext(i).stop();
    // }
    //暂停旧的视频视频
    
    if(this.data.videoControl){
      var oldVC = wx.createVideoContext(this.data.videoControl);
      oldVC.pause();
    }
    
    
    this.videoContext = wx.createVideoContext(index);
    this.videoContext.play();
    
    this.setData({
      videoControl : index
    })
    this.setData({
      select: [1,0]
    });
    this.setData({
      showImg : index
    });
  },
  cusImageLoad: function (e){
      var that = this;
      //这里看你在wxml中绑定的数据格式 单独取出自己绑定即可
      that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})