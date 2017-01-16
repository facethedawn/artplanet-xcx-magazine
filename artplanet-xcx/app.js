//app.js
App({
  onLaunch: function () {
    this.getMagazineData()
    this.getVideoData()
  },
  getMagazineData:function(mData){
    var _this = this;
    wx.request({
      url: 'https://artplanet.cn/api/wx/magazine/list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        _this.globalData.magazineData = res.data.list
        _this.globalData.nmBook = res.data.nm
        _this.globalData.hmBook = res.data.hm
      },
      fail: function() {
        // fail
        console.log('获取失败')
      },
      complete: function() {
        // complete
      }
    })
  },
  getVideoData:function(mData){
    var _this = this;
    wx.request({
      url: 'https://artplanet.cn/api/wx/video/list',
      data: {},
      method: 'GET',
      success: function(res){
        _this.globalData.videoData = res.data
      }
    })
  },
  globalData:{
    userInfo:null,
    magazineData:{},
    nmBook:{},
    hmBook:{},
    videoData:{}
  }
})


