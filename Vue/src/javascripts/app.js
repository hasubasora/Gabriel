 var len = document.getElementsByTagName('td').length;
 var tag = document.getElementsByTagName('td')
 for (var t = 0; t < len; t++) {
     tag[t].addEventListener('click', function(e) {
         this.setAttribute('contenteditable', 'true');
         this.focus();
         e.cancelBubble = true;
     });

 }
 //取消后的
 document.onclick = function(event) {
     event = event || window.event;
     var target = event.target || event.srcElement;
     console.log(target.nodeName)
     if (target.nodeName == target.nodeName) {
         for (var o = 0; o < len; o++) {
             tag[o].removeAttribute('contenteditable');
         }
     }
 };

 //创建
 var btn = document.getElementById('btn');
 var thead = document.getElementsByTagName('thead')[0];
 var th = thead.getElementsByTagName('th')
 var thLen = th.length;
 btn.onclick = function() {
     // insertRow
     var tbody = document.getElementsByTagName('tbody')[0].insertRow(0);
     tbody.setAttribute('role', 'row');
     for (var r = 0; r < thLen; r++) {
         var y = tbody.insertCell(r);
         y.innerHTML = "&nbsp;";
     }
 }