Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: 5,
    timeInterval: 0
  },

  startCountdown() {
    this.data.timeInterval = setInterval(()=>{
      this.setData({
        countdown: this.data.countdown - 1
      })
      if (this.data.countdown == 0) {
        this.toHome();
      }
    }, 1000)
  },

  toHome(){
    clearInterval(this.data.timeInterval)
    wx.switchTab({
      url: '../home/home',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.startCountdown()
  },
})