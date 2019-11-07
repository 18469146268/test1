
/**
 *代码实时预览
 */
  window.onload = function () {
    var runBtn = document.getElementById('input');
    var runTextArea = document.getElementById('textarea');
    var result = document.getElementById('result');
    runBtn.onclick = function() {
      result.innerHTML = runTextArea.value;
    }
  }