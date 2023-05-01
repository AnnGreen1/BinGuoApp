Page({

  /**
   * 页面的初始数据
   */
  data: {
    html:"<h5>内容加载中...</h5>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage(
      {
        key: "news",
        success:(res)=>
        {
          console.log(res.data);
          let title = `<h1 class="news-title" style="margin-bottom: 15px;">${res.data.title}</h1>`
          let msg = `<p class="news-info" style="color:gray; font-size:15px; margin-bottom: 5px;">
                        <span class="news-time" style="margin-right: 30px;">${res.data.time}</span>
                        <span class="news-source">${res.data.src}</span>
                    </p>`
          this.setData(
            {
              html:res.data.title + msg +res.data.content
            }
          )
        }
      }
    )
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