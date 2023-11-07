const btn1 = document.getElementById('btn1')
const btn1div = document.getElementById('btn1div')
const btn2 = document.getElementById('btn2')
const btn2div = document.getElementById('btn2div')

btn1.addEventListener('click', function (e) {
  console.log('按钮被点击');
});

btn1div.addEventListener('click', function (e) {
  console.log('按钮外被点击');
});

btn2.addEventListener('click', function (e) {
  console.log('按钮被点击');
  e.stopPropagation(); // 阻止事件继续传播
});

btn2div.addEventListener('click', function (e) {
  console.log('按钮外被点击');
});

const myList = document.getElementById('myList');

myList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    console.log('点击了列表项：' + e.target.textContent);
  }
});

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

outer.addEventListener('click', function (e) {
  console.log('外层元素被点击，捕获阶段');
}, true); // 第三个参数为 true，启用事件捕获

inner.addEventListener('click', function (e) {
  console.log('内层元素被点击，冒泡阶段');
});

function triggerAlert(ele) {
  alert('Hey ' + ele.getAttribute('data-name'));
}

document.body.addEventListener('click', function(event) {
  // 把字體改成黃色
  event.target.style.color = 'yellow';
});

window.onbeforeunload = function(event) {
  // 返回要顯示給使用者看的提醒文字
  return '你確定要離開本頁面嗎？';
};