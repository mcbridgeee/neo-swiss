const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy CSS to final _site/css
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Date filter
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy") {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",             // <-- FIXED
      layouts: "_includes/_layouts"      // <-- FIXED
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};