Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频列表
    videos: [{
      title: "猫咪被手提袋绊住脚，下一秒反应乐坏网友：猫咪的天敌是手提袋吧",
      source: "九点视频video",
      cover: "https://f7.baidu.com/it/u=3502518340,511821724&fm=222&app=108&f=PNG@s_0,w_660,h_370,q_80",
      time: "2021年12月18日",
      avatar: "https://user-center.cdn.bcebos.com/head/raw/uc.101.64d84ee7.1fRLYXE2ODt_qlIKzMmVxg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=4798%22);%20margin:%200px%20auto;",
      src: "https://vd2.bdstatic.com/mda-mmh38e346djj0b3r/sc/cae_h264_nowatermark/1639794193433101179/mda-mmh38e346djj0b3r.mp4"
    },
    {
      title: "美疾控中心：奥密克戎成美国第一大感染源",
      source: "中国网直播",
      cover: "https://t14.baidu.com/it/u=2647748346,941262274&fm=225&app=113&size=f256,170&n=0&f=JPEG&fmt=auto?s=6CF027C4528A055B8391BC9F0300C0C0&sec=1640192400&t=484b1fdaa905cd7c03ad847a5af0dd5d",
      time: "2021年12月20日",
      avatar: "https://user-center.cdn.bcebos.com/head/raw/uc.101.80b97ab6.fA-exQnimSV1SIpzPr0rrg@s_2,w_272,h_272,q_80",
      src: "https://vd3.bdstatic.com/mda-mmk20jcbgjpttbvi/720p_frame30/h264_cae/1640049926735662437/mda-mmk20jcbgjpttbvi.mp4"
    },
    {
      title: "长沙从入境人员中检出2例奥密克戎变异株感染者",
      source: "抽屉视频",
      cover: "https://f7.baidu.com/it/u=2493755805,1732451688&fm=222&app=108&f=JPEG@s_0,w_660,h_370,q_80",
      time: "2021年12月18日",
      avatar: "https://user-center.cdn.bcebos.com/head/raw/uc.101.31ed1c5e.j7-g9s1Fb5vF5NGu1jpW-w?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=5709%22);%20margin:%200px%20auto;",
      src: "https://vd2.bdstatic.com/mda-mmhiqtvb6irnyh44/sc/cae_h264_nowatermark/1639833534657757590/mda-mmhiqtvb6irnyh44.mp4"
    },
  ],
  },
  playVideo: function(e)
  {
    //暂停正在播放的视频
    //1、获取曾在播放的视频
    wx.getStorage({
      key: "playing",
      success: (res)=>{
        //判断当前正在播放的视频id和被点击的视频id是否相等
        if(res.data != e.target.dataset.id){
        //不相等说明我点了两个视频，那就需要把之前点击的视频停掉
          this.selectComponent("#" + res.data).pause();
      }
    }
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