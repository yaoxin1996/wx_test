// components/segmentBar/segmentBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titleList: {
            type: Array,
            value: []
        },
      
        
    },

    /**
     * 组件的初始数据
     */
    data: {
        selectId: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击item
        clickItem (e) {
            let id = e.currentTarget.dataset.id
            this.setData({
                selectId: id
            })
            this.triggerEvent('clickBarItem', {
                id
            })
        },
        // 获取 segmentPane 中 swiper的current 值 ，赋给对应的bar
        setIndex (e) {
            this.setData({
                selectId: e + 1
            })
        }
    }
})
