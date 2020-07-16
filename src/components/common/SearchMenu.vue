<template>
  <div class="h-right">
    <!-- 菜单 -->
    <a @click="handleMore" class="h-btn moreBtn">
      <van-icon size=".6rem" color="#626262" name="more-o"></van-icon>
    </a>
    <div v-show="isMore" class="tab-nav">
      <router-link
        tag="a"
        :to="item.href"
        v-for="(item, index) in moreLists"
        :key="index"
      >
        <p><em :class="item.iconClass"></em>{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moreLists: [
        {
          href: "/",
          iconClass: "icon-1",
          name: "首页",
        },
        {
          href: "/categories",
          iconClass: "icon-2",
          name: "分类",
        },
        {
          href: "/cart",
          iconClass: "icon-3",
          name: "购物车",
        },
        {
          href: "/mine",
          iconClass: "icon-4",
          name: "我的",
        },
      ],
      isMore: false,
    };
  },
  methods: {
    handleMore() {
      this.isMore = !this.isMore;
    },
  },
};
</script>
<style lang="stylus">
.h-right
    display flex
    align-items center
    margin-right 10px
    position: relative
    height 44px
    .moreBtn
        display flex
        align-items center

.tab-nav
    display: none;
    width: 185px;
    margin-right: auto;
    margin-left: -33px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.94);
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 52px;
    z-index: 1;
    display: block;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
    &:after
        content: "";
        display: block;
        overflow: hidden;
        width: 0;
        height: 0;
        display: inline-block;
        border-width: 0rem 10px 10px 10px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.94) transparent;
        position: absolute;
        right: 7px;
        top: -9px;
    a
        display: block;
        overflow: hidden;
        color: #666;
        line-height: 44px;
    p
        position: relative;
        height: 47px;
        line-height: 47px;
        color: #00050A;
        font-size: 16px;
        text-align: left;
        padding-left: 60px;
        em
            position: absolute;
            left: 20px;
            top: 11px;
            color: #00050A;
            width: 22px
            height: 22px;
            &:before
                content ""
                display: block;
                width: 22px;
                height: 22px;
        .icon-1:before
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA8CAMAAAAJ1/l9AAAAjVBMVEUAAABeXmE5QEY7QEQ5PkM6PkM5PkI7P0Q5PkI5P0JBRkg/QkZNTVI7PkRCQ0U6P0I6PkI5P0I5P0M6PkI6PkM6P0Q5PkI5PkM5P0I6P0I5PkI6P0M6P0M6P0M5P0I6P0I6PkM6P0Q7QUU6QEQ5P0I5PkM8QkU5PkI5PkI5QEM6P0I6QEQ8QUQ6PkM5PkIWXGaHAAAALnRSTlMABSg39biXdfvdDh4JUhT47amH2JJZ58yxmuJ/ZFzSx1VLPTCinSrAv3RsQyR7Pkgy6wAAAfNJREFUSMftld16gjAMhtPBsBQERRFEVBQ3dXO5/8tbsscJyBi07nDfCaXpS0N+WuhRAA9IZegqY/oyQ8TE1IH3CbLcixH9Jonl/ReWPiyWBMocInrYO106OBI22V+dkLke/eoSvfGANQ5pvNKhdzYR6XfK9hxCRwymRxy0qOZLxl/zh8H+ARHDdX3K29DUNhgUtO0PuVInTqLXT5fsaNJa6E/5o2UfPeagTX/6zTkXwPvv9Aq7k3TmkMQd4M1Du+gyx1wA507aS8iclb/0EP/ZvMNoLXqzUy66IgNrdu3QUxsed+BJtQ3cWXI0rCo293lV6dC+9Hll9gqtonR5rl/C+W5lqLfUsRa0/uIIx7fXXHI8+xuyAcjz1Zk5sp60zoOqo5eoj8OWkQM57EvEmTb+jKwXGjkyDUzwDFH6nEkQJvhHKh1gmeEj2vchHP7xf/zPcS+P5qRVoQxwEUm8alJo42qDNS118Re+kNMl6WTTMNbD93yY+NXdN1E6OG+eiFsMbdpeC0/I3lgdaeEu4rh6cxCdhvmI+PYAPkMszHElES1zfE2pEMa4IN8PYIzzFWsZ4zlfyGCIK76R3cAIV1a04BYs4Q4P7YZoZl0tmCJKng3xS7MnaOIttfBKYaTAGE8+PLiX1VIRx7U9LnG8s1ieaIKfzQRravS3nCkAAAAASUVORK5CYII=') no-repeat;
            background-size: 22px 22px;
        .icon-2:before
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTBBREEyRjJDNDgzMTFFNzhCRTFGN0RBRDZCOUY5MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTBBREEyRjNDNDgzMTFFNzhCRTFGN0RBRDZCOUY5MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDhDMzkyNkM0ODMxMUU3OEJFMUY3REFENkI5RjkxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDhDMzkyN0M0ODMxMUU3OEJFMUY3REFENkI5RjkxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pju7/KsAAAtOSURBVHja7Ft7bJPX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') no-repeat;
            background-size: 22px 22px;
        .icon-3:before
                content: "";
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTdGRDFGQTFDNDgzMTFFN0JDQzZFQUJGREVDMkVEREQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTdGRDFGQTJDNDgzMTFFN0JDQzZFQUJGREVDMkVEREQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBN0Q4Q0VDQUM0ODMxMUU3QkNDNkVBQkZERUMyRURERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBN0Q4Q0VDQkM0ODMxMUU3QkNDNkVBQkZERUMyRURERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiXIjloAAAXjSURBVHja7FtNbBtF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') no-repeat;
                background-size: 22px 22px;
            .icon-4:before
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODNCNzdDQTZDNDgzMTFFNzlDRENCOUY0NDhGREI4NDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODNCNzdDQTdDNDgzMTFFNzlDRENCOUY0NDhGREI4NDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MzZGMkFFOUM0ODMxMUU3OUNEQ0I5RjQ0OEZEQjg0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MzZGMkFFQUM0ODMxMUU3OUNEQ0I5RjQ0OEZEQjg0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pui6DiUAAAhbSURBVHja5Jt9cFTV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') no-repeat;
                background-size: 22px 22px;
</style>
