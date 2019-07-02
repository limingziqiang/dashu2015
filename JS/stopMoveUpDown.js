scrollObj.addEventListener('touchstart', function(e){
  this._targetY = e.targetTouches[0].clientY
})

scrollObj.addEventListener('touchmove',function(e){
  var NewTargetY = e.targetTouches[0].clientY
  // 向下
  if(this.scrollTop <= 0 && NewTargetY - this._targetY > 0){
    e.preventDefault()
  } else if(this.scrollTop >= this.scrollHeight - this.clientHeight && NewTargetY - this._targetY < 0){
    e.preventDefault()
  }
  
},false)
