// pages/video/video.js
Page({
  data:{
    videos:{},
    prevVideo:null,
    videoControl : undefined,
    checkNet:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: 'https://artplanet.cn/api/wx/video/list',
      data: {},
      method: 'GET',
      success: function(res){
        // success
        that.setData({
          videos:res.data
        });
        console.log(that.data.videos)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  
  playVideo:function(e){
    var that = this;
    var index = e.currentTarget.id;
    this.setData({
      showImg:index
    });
    if(this.data.prevVideo){
      var prevV = wx.createVideoContext(this.data.prevVideo);
      prevV.pause()

    }
    var currentV = wx.createVideoContext(index);
    currentV.play();
    this.setData({
      prevVideo:index
    });
  }
})