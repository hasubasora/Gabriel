 let sf = {
     config: {
         tbodys: document.getElementsByTagName('tbody')[0],
         tag: document.getElementsByTagName('td'),
         len: document.getElementsByTagName('td').length,
         btn: document.getElementById('btn'),
         thead: document.getElementsByTagName('thead')[0]
     },
     init() {
         document.addEventListener('click', sf.unbodys)
         sf.config.tbodys.addEventListener('click', sf.bodys)
         sf.config.btn.addEventListener('click', sf.addBodys)
     },
     bodys(event) {
         event = event || window.event;
         var target = event.target || event.srcElement;
         console.log(sf.config.tag[0].nodeName)
         if (target.nodeName == sf.config.tag[0].nodeName) {
             target.setAttribute('contenteditable', 'true');
             target.focus();
             event.cancelBubble = true;
         }
     },
     unbodys(event) {
         event = event || window.event;
         var target = event.target || event.srcElement;
         // console.log(target.nodeName)
         if (target.nodeName == target.nodeName) {
             for (let o = 0, i = sf.config.len; o < i; o++) {
                 sf.config.tag[o].removeAttribute('contenteditable');
             }
         }
     },
     addBodys() {
         var thLen = sf.config.thead.getElementsByTagName('th').length;
         // insertRow
         var tbody = document.getElementsByTagName('tbody')[0].insertRow(0);
         tbody.setAttribute('role', 'row');
         for (var r = 0; r < thLen; r++) {
             var y = tbody.insertCell(r);
             y.innerHTML = "&nbsp;";
         }
     }


 }