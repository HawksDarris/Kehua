function wrapEmojis(node) {
    if (node.nodeType === Node.TEXT_NODE) {
	const regex = /([\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}])/gu;
	const html = node.textContent.replace(regex, '<span class="emoji">$1</span>');
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = html;
	while (tempDiv.firstChild) {
	    node.parentNode.insertBefore(tempDiv.firstChild, node);
	}
	node.parentNode.removeChild(node);
    } else {
	node.childNodes.forEach(wrapEmojis);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slideContent = document.querySelector('.reveal .slides');
    wrapEmojis(slideContent);
});
