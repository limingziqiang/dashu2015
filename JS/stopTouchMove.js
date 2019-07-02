 function fnStopTouchMove(obj){
  obj.addEventListener('touchmove',function(e){
    e.stopPropagation()
    if(e.target == obj){
      e.preventDefault()
    }
  },false)
 }
