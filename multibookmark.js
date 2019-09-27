var thispage;
function main(query){
    var pages = query.getAll("page");
    thispage = pages.shift();
    var url = window.location.origin + window.location.pathname;
    if (pages.length > 0) {
        var newQuery = new URLSearchParams();
        pages.forEach(page=>newQuery.append("page", page));
        var nextwindow = window.open(url + "?" + newQuery);
        console.log(nextwindow);
        nextwindow.addEventListener('load', test, false);
    } else {
        setTimeout(_=>loadPage(thispage), 5);
    }
    
}
function test(){
    console.log("test");
    loadPage(thispage);
}
function loadPage(url) {
    this.location.href = url;
}
var queryString = new URLSearchParams(window.location.search);
if(!queryString.has("blockedPopups")){
    main(queryString);
}
