var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn');

oBtn.onclick = function () {
    Search();
}

document.onkeydown = function () {
    if (event.keyCode == 13) {
        Search();
    }
}

function Search() {
    var url = 'https://cn.bing.com/search?q=site%3azh.cppreference.com+' + oInp.value;
    window.open(url);
}