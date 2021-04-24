var app = new Vue({

  el: '#root',
  data: {
    courses: [{
        h3: '$40.',
        span: '00',
        p: 'Learn to Write as a professional Author',
        link: './dist/business/images/course-02-443x600.jpg'
      },
      {
        h3: 'Free',
        span: '',
        p: 'Customer-centric Info-tech Strategies',
        link: './dist/business/images/stock-full-hd-03-443x600.jpg'
      },
      {
        h3: '$19.',
        span: '00',
        p: 'Open Programming Courses for Everyone: Python',
        link: './dist/business/images/stock-full-hd-04-443x600.jpg'
      },
      {
        h3: '$26.',
        span: '00',
        p: 'Academic Listening and Note_taking',
        link: './dist/business/images/stock-full-hd-06-443x600.jpg'
      }
    ],
    id: '',
    selected: './dist/business/images/en.png',
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
    sliders: [{
        arrayImg: [{
            link: './dist/business/images/home-business-service-slide-01-480x298.jpg',
            indice: 0,
            h2: 'Consultative Training',
            p: 'With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.',


          },
          {
            link: './dist/business/images/home-business-service-slide-02-480x298.jpg',
            indice: 1,
            h2: 'Real Deal Coaching',
            p: 'Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.',
          },
          {
            link: './dist/business/images/home-business-service-slide-03-480x298.jpg',
            indice: 2,
            h2: 'Advisor Training Program',
            p: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.',
          }
        ]
      },
      {
        arrayImg: [{
            link: './dist/business/images/1.jpeg',
            indice: 0,
            h2: 'Representative efforts',
            p: 'Success is not final, failure is not fatal: it is the courage to continue that counts. Play whith  rules, be ferocious.',


          },
          {
            link: './dist/business/images/2.jpg',
            indice: 1,
            h2: 'Just do it!',
            p: 'Business opportunities are like buses, there’s always another one coming. Without problems we would not grow.',
          },
          {
            link: './dist/business/images/3.jpg',
            indice: 2,
            h2: 'You only have to do!',
            p: 'And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.',
          }
        ]
      },
      {
        arrayImg: [{
            link: './dist/business/images/4.jpg',
            indice: 0,
            h2: 'Promote yourself!',
            p: 'I owe my success to having listened respectfully to the very best advice, and then doing the exact opposite. Go soon!',


          },
          {
            link: './dist/business/images/5.jpg',
            indice: 1,
            h2: 'The best prize!',
            p: 'If you really look closely, most overnight successes took a long time. If you are on the right track, you’ll get run.',
          },
          {
            link: './dist/business/images/6.png',
            indice: 2,
            h2: 'The real test!',
            p: 'The test: when you let it harden or shame you into inaction, or when you learn from it; when you choose to persevere.',
          }
        ]
      }
    ],
  },
  methods: {
    clickDot: function(indexDot) {
      this.index = indexDot;
    },
    showX: function(e) {

      let target = $(e.target);
      target.addClass('none');
      target.parent().next().children().removeClass('none');
      target.parent().siblings('p').removeClass('none');

    },
    showY: function(e) {
      let target = $(e.target);
      target.addClass('none');
      target.parent().prev().children().removeClass('none');
      target.parent().siblings('p').addClass('none');
    }




  }

})
