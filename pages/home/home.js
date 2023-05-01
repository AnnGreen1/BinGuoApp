Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_items: ["头条", "新闻", "国内", "国际", "政治", "财经", "体育", "娱乐", "军事", "教育", "科技", "NBA", "股票", "星座", "女性", "健康", "育儿"],
    //记录呗选中的导航项的文本
    current_item:"头条",
    //轮播图数组
    banner_imgs:["banner1.png","banner2.png","banner3.png"],
    //新闻列表数组
    newsList:[],
    //请求参数
    requestPara:
    {
      num:10,//每页的数量
      start:0,//每页的起始位置
      appkey:"6b0ffed5b3a9abe45d8379e9ca8bbdb6"
    }
  },
  //获取新闻列表数据的方法
  getNewsList: function()
  {
    wx.request({
      url: 'https://way.jd.com/jisuapi/get',
      data: {
        channel: this.data.current_item,
        num: this.data.requestPara.num,
        start: this.data.requestPara.start,
        appkey: this.data.requestPara.appkey
      },
      dataType:"json",
      success:(res) => {
        console.log(res.data.result.result.list);
        this.setData(
          {
            newsList: [...this.data.newsList, ...res.data.result.result.list]
          }
        )
      }
    })
  },
  selectNav: function(e)
  {
    //console.log(e.target.dataset.selected);
    this.setData({
      current_item: e.target.dataset.selected
    })
    this.setData({
      newsList: []
    })
    this.getNewsList();
  },
  readNews(e)
  {
    //将当前新闻内容存储起来
    wx.setStorage(
      {
        key:"news",
        data: e.target.dataset.news
      }
    )
    //导航到新闻详情页面
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList();
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
    console.log("刷新了");
    //更新start，数据的起始位置
    this.setData(
      {
        //每次触发上拉时，在start原来的基础上加上 num
        'requestPara.start': this.data.requestPara.start + this.data.requestPara.num
      }
    )
    console.log(this.data.requestPara.start);
    this.getNewsList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})