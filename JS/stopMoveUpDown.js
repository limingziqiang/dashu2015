
scrollObj.targetY = null
scrollObj.addEventListener('touchstart', function(e){
  this.targetY = e.targetTouches[0].clientY
})

scrollObj.addEventListener('touchmove',function(e){
  var NewTargetY = e.targetTouches[0].clientY,
      iScrollTop = this.scrollTop,
      iScrollHeight = this.scrollHeight,
      iClientHeight = this.clientHeight;
  
  // 向下
  if(iScrollTop <= 0 && NewTargetY - this.targetY > 0){
    e.preventDefault()
  } else if(iScrollTop >= iScrollHeight - iClientHeight && NewTargetY - this.targetY < 0){
    e.preventDefault()
  }
  
},false)
