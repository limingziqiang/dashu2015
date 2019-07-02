var testDiv = document.createElement('div');
document.documentElement.appendChild(testDiv);
testDiv.style.WebkitOverflowScrolling = 'touch';
var scrollSupport = 'getComputedStyle' in window && window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
document.documentElement.removeChild(testDiv);
