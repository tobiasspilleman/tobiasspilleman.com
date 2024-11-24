/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    distDir: 'build', // Change 'build' to your desired output directory name
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
            '/projects': { page: '/projects' },
            '/blog/[slug]': { page: '/blog/[slug]' }
        };
    },
};