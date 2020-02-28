// var EventUtil = {
//   addHandler: function(element, type, handler) {
//     if (element.addEventListener) {
//       element.addEventListener(type, handler, false)
//     } else if (element.attachEvent) {
//       element.attachEvent('on' + type, function() {
//         handler.call(element)
//       })
//     } else {
//       element['on' + type] = handler
//     }
//   }
// }
// ;(function() {
//   var showCount = 0

//   EventUtil.addHandler(window, 'load', function() {
//     alert('Loaded fired')
//   })

//   EventUtil.addHandler(window, 'pageshow', function(event) {
//     showCount++
//     alert('Show has been fired ' + showCount + 'times.')
//     alert('Hiding,persisted? ' + event.persisted)
//   })
// })()
