const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Make Eleventy copy your CSS folder to _site
  eleventyConfig.addPassthroughCopy("src/css");

  // Add date filter for Nunjucks
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy") {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "src/_includes",
      layouts: "src/_includes/_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};