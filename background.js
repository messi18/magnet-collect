let globalMagnetLinks = [];

// 监听来自 Content Script 的消息，将磁力链接添加到全局列表中
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'magnetLinksFound') {
        globalMagnetLinks.push(...message.magnetLinks);
    }
});

// 获取全局列表中的磁力链接
function getGlobalMagnetLinks() {
    return globalMagnetLinks;
}

function clearMagnetLinks() {
  globalMagnetLinks.splice(0, globalMagnetLinks.length); 
}