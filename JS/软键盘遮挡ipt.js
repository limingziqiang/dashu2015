var inp = document.querySelector('#inp')
    var bodyHeight = document.body.offsetHeight
    inp.onclick = function(ev) {
      document.querySelector('body').style.height = '9999px'
      setTimeout(function() {
        document.body.scrollTop = document.documentElement.scrollTop = inp.getBoundingClientRect().top + pageYOffset - 5
      }, 50)
      window.addEventListener('touchmove', fn, false)
    }

    inp.onblur = function() {
      document.querySelector('body').style.height = 'auto'
      document.querySelector('body').removeAttribute('style')
      window.removeEventListener('touchmove', fn, false)
    }
    //触摸取消blur
    function fn(ev) {
      var _target = ev.target || ev.srcElement
      if (_target.nodeName != 'INPUT') {
        inp.blur()
      }
      ev.preventDefault()
    }
