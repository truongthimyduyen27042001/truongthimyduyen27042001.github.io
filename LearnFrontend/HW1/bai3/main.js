new Vue({
    el:'#app',
    data:{
       isList:true,
       isGrid:false,
        articles: [{
            
            "title": "What You Need To Know About CSS Variables",
            "url": 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
            src: 'https://tutorialzine.com/media/2016/03/css-variables.jpg'
        },
        {
            "title": "Freebie: 4 Great Looking Pricing Tables",
            "url": 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
            src:'https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg'
        },
        {
            "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
            "url": 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
            src: 'https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg'
        },
        {
            "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
            "url": 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
            src: 'https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png'
        },
        {
            "title": "Learn SQL In 20 Minutes",
            "url": 'https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
            src: 'https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png'
        },
        {
            "title": "Creating Your First Desktop App With HTML, JS and Electron",
            "url": 'https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
            src:  'https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png'
        }]

    },
    methods:{
        turnList(){
            this.isList=true,
            this.isGrid=false
        },
        turnGrid(){
            this.isGrid=true
            this.isList=false
        }
        
    }
})

// Create our number formatter.

