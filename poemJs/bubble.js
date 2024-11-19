document.addEventListener('DOMContentLoaded', function() {
// 获取所有的.bubble元素
let bubbles = document.querySelectorAll('.bubble');

// 为每个.bubble元素添加点击事件监听器
bubbles.forEach(function(bubble) {
  bubble.addEventListener('click', function() {
    // 点击时刷新页面
    window.location.reload();
  });
});
});
