function findAndSendMagnetLinks() {
    const links = document.querySelectorAll('a');
    const magnetLinks = [];

    for (const link of links) {
        if (link.href.startsWith('magnet:')) {
            magnetLinks.push(link.href);
        }
    }

    // 将磁力链接发送到后台脚本
    chrome.runtime.sendMessage({ type: 'magnetLinksFound', magnetLinks });
}

// 在每个标签页加载完成后触发查找磁力链接操作
window.addEventListener('load', findAndSendMagnetLinks);