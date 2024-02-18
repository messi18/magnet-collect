// contentScript.js

// 在当前页面查找磁力链接
function findMagnetLinks() {
    // 在页面中查找所有链接
    const links = document.querySelectorAll('a');
    
    // 遍历链接并检查是否包含磁力链接
    for (const link of links) {
        if (link.href.startsWith('magnet:')) {
            console.log('Found magnet link:', link.href);
            // 找到磁力链接后执行相应操作，比如通知后台页面
            chrome.runtime.sendMessage({ type: 'magnetFound', magnetLink: link.href });
        }
    }
}

// 当页面加载完成时查找磁力链接
document.addEventListener('DOMContentLoaded', findMagnetLinks);
