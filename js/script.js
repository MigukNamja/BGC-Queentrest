// Write JavaScript here 

new Vue({
    el: '#app',
    data: {
        // Main Background Image
        mainBgImage: 'https://i.imgur.com/ZERVtnc.png',

        // TODO: get more hair style images (afro? colored? no hair?)
        hairTypeImages: [
            "https://tinyurl.com/yyqmly8p", // braids
            "https://tinyurl.com/y4se5vvn", // short wavy
            
            "https://tinyurl.com/yy727hqc",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NqssT2kuUstElZI-GS8lTQHaJ4%26pid%3DApi&f=1", 
          "https://tinyurl.com/y3j7cyn7", // long straight
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hairplusbase.com%2Fcustom-full-lace-short-red-celebrity-hairstyle-100--human-hair-for-women-13387-tv.jpg&f=1&nofb=1",
        ],
        
        searchResultsImagesUnfiltered: [
            'https://i.insider.com/5ed55494988ee3393c2d158f?width=800&format=jpeg&auto=webp',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2018%2F04%2F9-1.jpg&q=85',
            'https://www.everydayhairinspiration.com/wp-content/uploads/2019/09/IMG_4664-copy-1440x1882.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Classic_French_Braid.JPG/375px-Classic_French_Braid.JPG',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dutch_Brain.jpg/330px-Dutch_Brain.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Combo_Braid.JPG/277px-Combo_Braid.JPG https://s.abcnews.com/images/GMA/braids-33-ht-thg-180808_hpEmbed_9x10_992.jpg',
            'https://tinyurl.com/y65w6q6n',
            'https://tinyurl.com/y3uckp3b',
            'https://tinyurl.com/y5bvv6f5',
            'https://tinyurl.com/y3uqpk5r',
        ],
        // TODO: only use images that "look like me"
        searchResultsImagesFiltered: [
            'https://i.pinimg.com/originals/d4/57/84/d45784fbbc16c15f9b96d02e60e0220e.jpg',
            'https://i.pinimg.com/564x/9e/cd/8b/9ecd8ba96501f879f1ba2a629f2439f0.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRsixFYVPeMHYvJ7Mscw23WpY-6tRlt_WJ3g&usqp=CAU',
            'https://tinyurl.com/y3uqpk5r',
        ],
        activeView: 'createAccount',
        filterImages: false,
    },
    methods: {
        selectImage: function(event) {
            var e = document.getElementById(event.target.id);
            e.classList.add("selected-image");
        },
        createAccountView() {
            this.activeView = 'createAccount';
        },
        searchView() {
            this.activeView = 'search';
        },
        hideImages() {
            var e = document.getElementById("image-grid");
            e.classList.remove("visible");
            e.classList.add("invisible");
        },
        showImages() {
            var e = document.getElementById("image-grid");
            e.classList.remove("invisible");
            e.classList.add("visible");
        },
        filterResults: function(event) {
            this.filterImages = event.target.checked;
        },
        clearFilter() {
            this.filterImages = false;
        },
        reset() {
            console.log('Reset')
            this.clearFilter();
            this.createAccountView();
        }
    },
    ready() {
        this.createAccountView();

    }
})