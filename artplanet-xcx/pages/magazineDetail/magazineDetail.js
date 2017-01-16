// pages/magazineDetail/magazineDetail.js
var app = getApp()
Page({
  data:{
    detailData:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // console.log("接收到的参数是obj="+options.extra)
    // console.log(app.globalData.magazineData);
    // console.log(options.currentBook);
    // console.log(app.globalData.magazineData[options.currentBook])
    if(options.currentBook){
      this.setData({
        detailData:app.globalData.magazineData[options.currentBook]
      })
    }
    if(options.currentNm){
      this.setData({
        detailData:app.globalData.nmBook
      })
    }
    if(options.currentHm){
      this.setData({
        detailData:app.globalData.hmBook[options.currentHm]
      })
    }
    
  },
  onReady:function(){
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
  showImg:function(e){
    wx.previewImage({
      urls: [e.currentTarget.dataset.imgdetail] // 需要预览的图片http链接列表
    })
  }
})