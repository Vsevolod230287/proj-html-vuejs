var app = new Vue({

  el: '#root',
  data: {
    indexHover: 0,
    hover: false,
    footerInfo: {
      address: [
        'Address',
        '383 Ne 191st St # 87394 Miami, FL33179-3899',
        '+1(305)547-9909 (9am - 5pm EST, MOnday - Friday)',
        'support@maxcoach.com',
      ],
      social: [
        '<i class="fab fa-facebook-square"></i>',
        '<i class="fab fa-twitter-square"></i>',
        '<i class="fab fa-instagram-square"></i>',
        '<i class="fab fa-linkedin"></i>',

      ],
      explore: ['Explore', 'Satrt here', 'Blog', 'About us'],
      senzaTitle: ['none', 'Success story', 'Courses', 'Contact us'],
      information: ['Information', 'Membership', 'Purchase guide', 'Privacy plicy', 'Terms of service']
    },
    indexLove: 0,
    loveCards: [{
        h3: 'High level of efficiency and scientific teaching methods',
        p: 'I am free to learn at my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        img: './dist/business/images/testimonial-avata-02.jpg',
        name: 'MINA HOLLACE',
        profession: '/Freelancer',
      },
      {
        h3: 'Professional team of specialists and passionate mentors at reach',
        p: 'I need to get a certification for English profiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        img: './dist/business/images/testimonial-avata-04.jpg',
        name: 'madley pondor',
        profession: '/IT Specialist',
      },
      {
        h3: 'A Versatile, analytical and hard working IT consultant.',
        p: 'I highly recommend this aproach to anyone who aspire to become better programmers. Thank you very much Dan, sharing your passion for programming languages! ',
        img: './dist/business/images/testimonial-avata-01.jpg',
        name: 'John Travis',
        profession: '/Web Programmer',
      },
      {
        h3: 'It is a choice of quality for people with special needs',
        p: 'I am very strict person so I require everything to be organized and neat. Then, I will be able to make things right and shine. MacCoach guys just got me.',
        img: './dist/business/images/testimonial-avata-03.jpg',
        name: 'Florence Themes',
        profession: '/Multimedial Admin',
      }
    ],
    selected: './dist/business/images/en.png',
    index: 0,
    enventsInfo: [{
        city: 'Texas, US',
        h3: 'Storytelling Workshop',
        day: '22',
        month: 'nov',
      },
      {
        city: 'New York, US',
        h3: 'Painting Art Contest',
        day: '10',
        month: 'oct',
      },
      {
        city: 'Hamburg, Germany',
        h3: 'International Art Fair 2020',
        day: '23',
        month: 'nov',
      },
      {
        city: 'Ilinois, US',
        h3: 'Street Performance: Call for Artist',
        day: '15',
        month: 'dec',
      },
      {
        city: 'Illinois, US',
        h3: 'Consumer Food Safety Education Conference',
        day: '22',
        month: 'jul',
      }, {
        city: 'Dubai',
        h3: 'How meditation improve your mental health?',
        day: '12',
        month: 'aug',
      }
    ],
    isHidden: false,
    thriveInfo: [{
      span: 'How can we help?',
      p: 'How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, then you have yet to understand how success comes.',
    }, {
      span: 'Why would I need a business COACH?',
      p: 'How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, then you have yet to understand how success comes.',
    }, {
      span: 'What is one-on-one coaching?',
      p: 'How many courses you have been on, using however many techniques and methods. Unless you have come to realize the value of mindset, then you have yet to understand how success comes.',
    }],
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
      },
    ],
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
        langPath: './dist/business/images/de.png'

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
      target.parent().next().children().css("color", "#239284");
      target.parent().siblings('.second').css("color", "#239284");
      target.hide()
      target.parent().next().children().show();
      target.parent().siblings('p').slideDown(200);

    },
    showY: function(e) {
      let target = $(e.target);
      target.hide();
      target.parent().next().css("color", "white");
      target.parent().prev().children().show();
      target.parent().siblings('p').slideUp(200);
    },
    show: function(e) {
      let target = $(e.target);
      console.log(target.children('div.price-info'))
    },

    hide: function(i) {
      this.courses[i]
    }

  }



})
