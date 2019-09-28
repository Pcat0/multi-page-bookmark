function main(query){
    var pages = query.getAll("page");
    var thispage = pages.shift();
    var url = window.location.origin + window.location.pathname;
    if (pages.length > 0) {
        var newQuery = new URLSearchParams();
        pages.forEach(page=>newQuery.append("page", page));
        var nextwindow = window.open(url + "?" + newQuery);
        if(nextwindow !== null)
            loadPage(thispage);
    } else {
        loadPage(thispage);
    }
    
}
function loadPage(url) {
    window.location.href = url;
}
var queryString = new URLSearchParams(window.location.search);
if(!queryString.has("blockedPopups"))
    main(queryString);


    

