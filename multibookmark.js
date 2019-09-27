new URLSearchParams(window.location.search).getAll("page");
var pages = new URLSearchParams(window.location.search).getAll("page");
var thispage = pages.shift();
if (pages.length > 0) {
    let url = window.location.origin + window.location.pathname;
    let queryString = new URLSearchParams();
    pages.forEach(page=>queryString.append("page", page));
    var nextwindow = window.open(url + "?" + queryString);
    nextwindow.addEventListener('load', _=>console.log("hi"), false);
}

//this.location.href = thispage;
