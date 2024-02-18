// 在 Popup 页面中显示全局列表中的磁力链接
function displayGlobalMagnetLinks() {

    const magnetLinksList = document.getElementById('magnets');
    const globalMagnetLinks = chrome.extension.getBackgroundPage().getGlobalMagnetLinks();

    magnetLinksList.innerHTML = '';
    globalMagnetLinks.forEach(magnetLink => {
        const listItem = document.createElement('li');
        listItem.textContent = magnetLink;
        magnetLinksList.appendChild(listItem);
    });
}

function bindEvents() {
  var clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    // 清除存储在Chrome插件中的全局变量中的磁力链接
    console.log("clicked clearButton");
    chrome.extension.getBackgroundPage().clearMagnetLinks();
    displayGlobalMagnetLinks();
  });
}

function init() {
  bindEvents();
  displayGlobalMagnetLinks();
}

// 在 Popup 页面加载时显示全局列表中的磁力链接
document.addEventListener('DOMContentLoaded', init);
