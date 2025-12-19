const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy the entire css folder to /css in the output
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Copy favicon
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  // Date filter
  eleventyConfig.addFilter("date", function (dateObj, format = "yyyy") {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/_layouts"
    },

    // 🔥 THIS TELLS ELEVENTY YOUR SITE LIVES AT /neo-swiss/
    pathPrefix: "/neo-swiss/",

    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
