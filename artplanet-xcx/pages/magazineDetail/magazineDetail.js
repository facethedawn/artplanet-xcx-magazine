// pages/magazineDetail/magazineDetail.js
var app = getApp()
Page({
  data:{
    detailData:{}
  },
  onLoad:function(options){
      var p = wx.getStorageSync('bookDetail');
      this.setData({
        detailData:p
      })
  },
  
  showImg:function(e){
    wx.previewImage({
      urls: [this.data.detailData.cover] // 需要预览的图片http链接列表
    })
  }
})