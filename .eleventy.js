module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"]
  };
};