function _parents(el:any, selector: string){
  var result = [];
  var matchesSelector = el.matches || el.webkitMatchesSelector;
  el = el.parentElement;
  
  while(el) {
    if(matchesSelector.call(el, selector)) {
      result.push(el);
    }
    el = el.parentElement;
  }
  return result;
} 


export function scrollFix(option?: any) {
  const scrollSelector = option || '.scroller'
  const pos = {
    x:0,
    y:0
  }
  
  function stopEvent(e:TouchEvent){
    if(e.cancelable){
      e.preventDefault();  
    }
    e.stopPropagation();
  }
  
  function recordPosition(e.TouchEvent) {
    pos.x = e.touches[0].clientX;
    pos.y = e.touches[0].clientY;
  }
  
  
  function watchTouchMove(e.TouchEvent) {
    var target = e.target as HTMLElement;
    
    var parents = _parents(target, scrollselector);
    var el = null;
    
    if(target.classList.contains(scrollSelector.slice(1))) {
      el = target;
    } else if(parents.length){
      el = parents[0]
    } else {
      return stopEvent(e);
    }
    
    var dx = e.touches[0].clientX - pos.x;
    var dy = e.touches[0].clientY - pos.y;
    var direction = dy > 0 ? '10' : '01';
    var scrollTop = el.scrollTop;
    var scrollHeight = el.scrollHeight;
    var offsetHeight = el.offsetHeight;
    var isVertical = Math.abs(dx) < Math.abs(dy);
    
    var status = '11'
    if(scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if(scrollTop + offsetHeight >= scrollHeight) {
      status = '10'
    }
    
    if(status !== '11' && isVertical && !(parseInt(status,2) & parseInt(direction,2))){
      return stopEvent(e)
    }
  }
  
  function lock() {
    document.addEventListener('touchstart',recordPosition, { passive: false });
    document.addEventListener('touchmove', watchTouchMove, { passive: false });
  }
  
  function unlock() {
    document.removeEventListener('touchstart', recordPosition);
    document.removeEventListener('touchmove', watchTouchMove);
  }
  
  unlock();
  
  return {
    lock,
    unlock
  }
}
