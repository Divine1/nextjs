
const basepath = "";
var aboutPage = basepath + '/about';
var helloPage = basepath + '/p/hello-nextjs';
var learnPage = basepath + '/p/learn-nextjs';
var deployPage = basepath + '/p/deploy-nextjs';
var exportPage = basepath + '/p/exporting-pages';

module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            [aboutPage] : { page: '/about' },
            [helloPage] : {page: '/post', query: { title: "Hello Next.js" } },
            [learnPage] : { page: '/post', query: { title: "Learn Next.js is awesome" } },
            [deployPage] : { page: '/post', query: { title: "Deploy apps with Zeit" } },
            [exportPage] : { page: '/post', query: { title: "Learn to Export HTML Pages" } }
        }
    }
  }