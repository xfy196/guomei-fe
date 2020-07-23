function changeObjectProperty(o) {
    o.siteUrl = "http://www.csser.com/";
    o = new Object();
    o.siteUrl = "http://www.popcg.com/";
}
var CSSer = new Object();
changeObjectProperty(CSSer);