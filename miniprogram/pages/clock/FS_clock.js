// miniprogram/pages/clock/FS_clock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_color: "#000000",
    background_color: "#ffffff",

    hour: "00",
    minute: "00",
    second: "00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      text_color: options.text_color,
      background_color: options.background_color
    });
    var navigation_text_color = options.background_color == "#ffffff" ? "#000000" : "#ffffff";
    wx.setNavigationBarColor({
      frontColor: navigation_text_color,
      backgroundColor: this.data.background_color,
    });

    wx.setNavigationBarTitle({
      title: '当前时间',
    });

    wx.setKeepScreenOn({
      keepScreenOn: true,
    });


    this.updateTime();

    var that = this;
    interval_id = setInterval(function () { that.updateTime() }, 1000);


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
    clearInterval(interval_id);

    wx.setKeepScreenOn({
      keepScreenOn: false,
    });
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

  },
  updateTime: function() {
    var current_time = new Date();

    this.setData({
      hour: ('0' + current_time.getHours()).slice(-2),
      minute: ('0' + current_time.getMinutes()).slice(-2),
      second: ('0' + current_time.getSeconds()).slice(-2)
    });

  }
})