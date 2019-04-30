#!/usr/bin/env nodejs
const fs = require("fs");
const $ = require("cheerio");
const path = require("path");
const glob = require("fast-glob");
const chalk = require("chalk");

// initial 'dom'
let svg = $.load(
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"></svg>'
);
let file;

console.log(chalk.green(`Starting in ${__dirname}`));
const svgIconFiles = glob.sync(path.join(__dirname, "./svg/*.svg"));
if (svgIconFiles.length === 0) {
  console.error(chalk.red("Cannot find source individual svg files"));
}

svgIconFiles.forEach(svgIconFile => {
  console.log(chalk.blue(`Processing ${svgIconFile}`));
  let symbolNode = $("<symbol></symbol");

  let filename = path.basename(svgIconFile);
  svgFile = fs.readFileSync(svgIconFile);

  svgNode = $.load(svgFile, {
    normalizeWhitespace: true,
    xmlMode: true
  });
  svgNode = svgNode("svg");
  symbolNode.attr("viewbox", svgNode.attr("viewBox"));
  symbolNode.attr("id", filename.replace(/.svg/gi, ""));
  svgNode.removeAttr("id");
  svgNode.removeAttr("viewbox");

  symbolNode.append(svgNode.contents());
  svg("svg").append(symbolNode);
});

let outputFile = path.join(__dirname, "../../src/assets/svg/wi-symbol.svg");
fs.writeFileSync(outputFile, svg("body").html());
console.log(chalk.green(`Wrote ${outputFile}`));
