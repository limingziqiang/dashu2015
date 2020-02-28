const fnHide = function() {
        var hidden = 'hidden'

        localStorage.hide = ''

        var bfWorker = new Worker(window.URL.createObjectURL(new Blob(['1'])))
        // Standards:
        if (hidden in document) document.addEventListener('visibilitychange', onchange)
        else if ((hidden = 'mozHidden') in document) document.addEventListener('mozvisibilitychange', onchange)
        else if ((hidden = 'webkitHidden') in document) document.addEventListener('webkitvisibilitychange', onchange)
        else if ((hidden = 'msHidden') in document) document.addEventListener('msvisibilitychange', onchange)
        // IE 9 and lower:
        else if ('onfocusin' in document) document.onfocusin = document.onfocusout = onchange
        // All others:
        else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange

        function onchange(evt) {
          var v = 'visible',
            h = 'hidden',
            evtMap = {
              focus: v,
              focusin: v,
              pageshow: v,
              blur: h,
              focusout: h,
              pagehide: h
            }

          evt = evt || window.event
          if (evt.type in evtMap) {
            document.body.setAttribute('hide', evtMap[evt.type])

            if(evtMap[evt.type] == 'hidden'){
              localStorage.hide = '1'
              document.body.style.background = 'blue'
            } else {
              localStorage.hide && setTimeout(function(){
                localStorage.hide=''
             //   location.reload()
             document.body.style.background = 'yellow'
              },1e3)
            }
          
            //bfWorker.terminate()
          } else {
            document.body.setAttribute('hide', this[hidden] ? 'hidden' : 'visible')
           
            if(this[hidden]){
              localStorage.hide = '1'
              document.body.style.background = 'blue'
            } else {
              localStorage.hide && setTimeout(function(){
                localStorage.hide=''
               // location.reload()
               document.body.style.background = 'yellow'
              },1e3)
            }
            //bfWorker.terminate()
          }
        }

        // set the initial state (but only if browser supports the Page Visibility API)
        if (document[hidden] !== undefined) onchange({ type: document[hidden] ? 'blur' : 'focus' })
      }

      fnHide()
