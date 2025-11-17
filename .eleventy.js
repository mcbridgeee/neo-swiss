const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Copy CSS file directly into output
  eleventyConfig.addPassthroughCopy({
    "src/css/main.css": "css/main.css"
  });

  // Date filter
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy") {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/_layouts"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};