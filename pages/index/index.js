// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
   list: [{
     id: 1,
     name: '测试1',
     isDel: false,
     num: 100
   }, {
    id: 2,
    name: '测试2',
    isDel: false,
    num: 1000
  }, {
    id: 3,
    name: '测试3',
    isDel: false,
    num: 10000
  },{
    id: 4,
    name: '测试4',
    isDel: false,
    num: 10
  },{
    id: 5,
    name: '测试5',
    isDel: false,
    num: 300
  }, {
    id: 6,
    name: '测试6',
    isDel: false,
    num: 10000
  }, {
    id: 7,
    name: '测试7',
    isDel: false,
    num: 30
  }],
  // isDel: false
  },
  delItem (e) {
    var Id = e.currentTarget.id
    console.log(Id);
    this.data.list.forEach(item => {
      if (item.id == Id && !item.isDel) {
        item.isDel = true
      } else {
        item.isDel = false
      }
      this.setData({
        list: this.data.list
      })
    })

  },
  clickItem (e) {
    console.log(e.target);
  },
  delCard (e) {
    console.log(e);
    let that = this
    let Id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '是否删除',
      success (res) {
        that.data.list.forEach((item, index) => {
          if (item.id == Id) {
            if (res.confirm) {
              console.log(index);
              that.data.list.splice(index, 1)
            } else if (res.cancel) {
              item.isDel = false
            }
          }
          that.setData({
            list: that.data.list
          })
        })
      }
    })
  },
  onLoad(options) {
    console.log(options);
    let Id = options.id
  },
 
})
