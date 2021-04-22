var app = new Vue({
  el: '#root',
  data: {
    arrayImg: [
      './dist/business/images/home-business-service-slide-01-480x298.jpg',
      './dist/business/images/home-business-service-slide-02-480x298.jpg',
      './dist/business/images/home-business-service-slide-03-480x298.jpg',


    ],
    id: '',
    selected: '',
    index: 0,
    langueges: [{
        shortLang: 'en',
        fullLang: 'English',
        langPath: './dist/business/images/en.png'
      },
      {
        shortLang: 'fr',
        fullLang: 'French',
        langPath: './dist/business/images/fr.png'

      },
      {
        shortLang: 'de',
        fullLang: 'Deutsch',
        langPath: './dist/business/images/fr.png'

      }
    ],
    headerLinks: [{
        name: 'Home',
        url: '#',
      },
      {
        name: 'Pages',
        url: '#',
      },
      {
        name: 'Courses',
        url: '#',
      },
      {
        name: 'Features',
        url: '#',
      },
      {
        name: 'Blog',
        url: '#',
      },
      {
        name: 'Shop',
        url: '#',
      },

    ],
  },
  methods: {
    next: function(e) {
      if (e && e.type == 'click') {
        clearInterval(this.id);
        this.id = '';
      }
      if (this.index < this.arrayImg.length - 1) {
        this.index++
      } else {
        this.index = 0;
      }
    },
    prev: function(e) {
      if (e.type == 'click') {
        clearInterval(this.id);
        this.id = '';
      }
      if (this.index > 0) {
        this.index--
      } else {
        this.index = this.arrayImg.length - 1;
      }
    },
    dotClick: function(key) {
      this.index = key;
    },
    autoplay: function() {
      if (!this.id) {
        this.id = setInterval(() => {
          this.next();
        }, 1300)
      } else {
        clearInterval(this.id)
        this.id = '';
      }
    }

  },
})
