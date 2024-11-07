// 解除复制限制的主要函数
function removeCopyRestrictions() {
  // 移除复制相关事件监听器
  document.addEventListener(
    'copy',
    function (e) {
      e.stopPropagation()
    },
    true
  )

  // 移除右键菜单限制
  document.addEventListener(
    'contextmenu',
    function (e) {
      e.stopPropagation()
    },
    true
  )

  // 移除选择文本限制
  document.addEventListener(
    'selectstart',
    function (e) {
      e.stopPropagation()
    },
    true
  )

  // 遍历所有元素移除复制限制
  document.querySelectorAll('*').forEach(function (element) {
    // 移除user-select: none样式
    element.style.cssText += 'user-select: auto !important;'
    element.style.cssText += '-webkit-user-select: auto !important;'

    // 移除oncopy事件
    element.oncopy = null
    // 移除oncontextmenu事件
    element.oncontextmenu = null
    // 移除onselectstart事件
    element.onselectstart = null
  })
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', removeCopyRestrictions)

// 定期检查并移除新添加元素的复制限制
setInterval(removeCopyRestrictions, 1000)
