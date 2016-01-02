window.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
	var element = document.body;
	if (event.target.nodeName != "HTML") {
		element = event.target;
	}

	var style = window.getComputedStyle(element, false);
	var image = '';
	if (style) image = style.backgroundImage.slice(4, -1);

	var userInfo = {
		name: event.target.nodeName,
		url: event.target.src,
		bg: image
	}

	// window.console.log(userInfo.bg);

	safari.self.tab.setContextMenuEventUserInfo(event, userInfo)
}
