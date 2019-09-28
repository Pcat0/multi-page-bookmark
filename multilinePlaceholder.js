var textAreas = ;
Array.prototype.forEach.call(document.getElementsByTagName('textarea'), (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});
