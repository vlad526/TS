var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write("<ul>");
for (var _i = 0, listOfItems_1 = listOfItems; _i < listOfItems_1.length; _i++) {
    var item = listOfItems_1[_i];
    document.write("\n            <li>".concat(item, "</li>\n        "));
}
document.write("</ul>");
