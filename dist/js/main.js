var app = new Vue({
  el: '#root',
  data: {
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
  getlangPath: function() {
    this.langueges.forEach((languege) => {
      if(this.selected == languege.fullLang){
        console.log(languege.langPath);
      }
    });

    }
  },
})
