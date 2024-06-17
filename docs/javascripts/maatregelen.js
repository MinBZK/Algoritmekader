import * as yaml from "https://cdn.skypack.dev/js-yaml";

var md;
window.onload = function () {
    md = window.markdownit();
    getMaatregelen();
}

function getPathPrefix() {
    return "/maatregelen_raw/"
}

async function getMaatregelen() {
    var maatregelen = [];
    let pathPrefix = getPathPrefix();

    const response = await fetch(pathPrefix + "maatregelen.txt")
    const data = await response.text()
    var lines = data.split("\n").filter(function (el) {
        return el != null && el !== "";
    });

    for (var fileName of lines) {
        try {
            let fileResponse = await fetch(pathPrefix + fileName + ".txt");
            let mdData = await fileResponse.text();
            let regex = /---(.*?)---/gs;
            let matches = [...mdData.matchAll(regex)];
            let codeBlocks = matches[0][1].trim();
            let myJSONBlock = yaml.load(codeBlocks);
            maatregelen.push(myJSONBlock);
            // myJSONBlock["fileName"] = this.fileName;
            // technologies.push({ "json": myJSONBlock, "html": md.render(mdData) });
        } catch (e) {
            console.error(e)
        }
    }
    console.log(maatregelen);
}