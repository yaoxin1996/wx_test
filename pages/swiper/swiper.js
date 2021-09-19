// pages/swiper/swiper.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList: [{
            id: 1,
            url: 'https://imgcps.jd.com/ling4/100016034372/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6ee/e06aeddf/cr/s/q.jpg'
        }, {
            id: 2,
            url: 'https://img12.360buyimg.com/pop/s1180x940_jfs/t1/202350/38/3391/80986/6128bd43E878bf072/0b8885d21b09a342.jpg.webp'
        }, {
            id: 3,
            url: 'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/182494/25/19742/74515/611b4f39E89f87248/12923168b90920fe.jpg.webp'
        }]
    },
    // 点击图片跳转
    clickImg (e) {
        console.log(e);
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: `/pages/index/index?id=${id}`,
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