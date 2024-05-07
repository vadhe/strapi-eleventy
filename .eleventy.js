
const markdownIt = require('markdown-it');
const md = new markdownIt();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addShortcode("formatDate", function(date) {
    const formattedDate = new Date(String(date)).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
    return formattedDate;
  });
  eleventyConfig.addFilter("markdown", content => md.render(content));
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };