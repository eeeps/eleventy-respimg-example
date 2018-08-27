const pluginRespimg = require('eleventy-plugin-respimg');

module.exports = function( eleventyConfig ) {

	eleventyConfig.cloudinaryCloudName = 'eric-cloudinary';
	eleventyConfig.srcsetWidths = [ 320, 640, 960, 1280, 1600, 1920, 2240, 2560 ];
	eleventyConfig.fallbackWidth = 640;

	eleventyConfig.addPlugin( pluginRespimg );

	return {
		markdownTemplateEngine: "njk"
	}

}

