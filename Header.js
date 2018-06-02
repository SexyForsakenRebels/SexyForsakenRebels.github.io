function writeHeader(linkDepth, fromHome) {
    if (linkDepth == null) { linkDepth = 0; }
    var sRoot = "";
    while (linkDepth > 0) {
        sRoot += "../";
        linkDepth--;
    }
    document.write("<table>");
    document.write("<tr>");
    writeMenuCell("Home", sRoot, null, fromHome);
    writeMenuCell("Rings", sRoot + "rings", "rings", false);
    writeMenuCell("Mounts", sRoot + "insigniaBonus", "insigniabonus", false);
    document.write("</tr>");
    document.write("</table>");
}

function writeMenuCell(linkText, linkURL, linkURLBase, fromHome) {
    var bSelected = (location.href.toLowerCase().indexOf(linkURLBase) != -1) || (linkText == "Home" && (fromHome || false));

    document.write("<th class=\"" + (bSelected ? "selectedMenuCell" : "menuCell") + "\">");

    if (!bSelected) {
        document.write("<a href=\"" + linkURL + "\">" + linkText + "</a>");
    }
    else {
        document.write(linkText);
    }
    document.write("</th>");

}