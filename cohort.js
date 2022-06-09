const students = [
    {
        name: 'Cody Murphy',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['wants to learn', 'travel', 'dogs', 'hike', 'work out'],
        linkedIn: ''
    }, {
        name: 'Noah Westberry',
        location: 'Oakley, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['worked helpdesk for 3 years', 'further education', 'better job options', 'reading (sci-fi)', 'video games', 'Baseball (Giants)'],
        linkedIn: 'https://www.linkedin.com/in/noahwestberry/'
    }, {
        name: 'Jose San Mateo',
        location: 'Walnut Creek/Concord, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['new & exciting career', 'twitch - fighting games'],
        linkedIn: 'https://www.linkedin.com/in/jsanmateo/'
    }, {
        name: 'Dennis Mateo',
        location: 'Vacaville, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career change', 'running', 'traveling'],
        linkedIn: 'https://www.linkedin.com/in/dennis-mateo-797a36240'
    }, {
        name: 'Jake Porter',
        location: 'Oklahoma City, OK',
        isInTech: true,
        os: 'mac',
        keywords: ['development knowledge', 'become more competitive in job market', 'travel', 'unique restaurants'],
        linkedIn: 'https://www.linkedin.com/in/jakemporter/'
    }, {
        name: 'Hanna Marcus',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['expand opportunities at current company', 'pivot into tech', 'coding skills', 'running', 'hiking', 'surfing', 'scuba', 'most things outdoors'],
        linkedIn: 'https://www.linkedin.com/in/hanna-marcus/'
    }, {
        name: 'Anh Nguyen (Andy)',
        location: 'Westminster, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['learn front end', 'supplement existing back end knowledge', 'fictional author', 'aspires to be published'],
        linkedIn: ''
    }, {
        name: 'Jenny Deng',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career change', 'travel', 'experiencing new places'],
        linkedIn: 'https://www.linkedin.com/in/jenny-deng-a3676823b'
    }, {
        name: 'Makennah Titus (Kennah)',
        location: 'Santa Maria, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['new career', 'video games'],
        linkedIn: 'https://www.linkedin.com/in/makennah-titus-875155241'
    }, {
        name: 'Afshin Aslani (John)',
        location: 'Saratoga, CA',
        isInTech: true,
        os: 'windows',
        keywords: ['move into technical department in programming', 'yoga', 'meditation', 'skiing', 'hiking'],
        linkedIn: 'https://www.linkedin.com/in/afshinaslani/'
    }, {
        name: 'Parham Rahmani Nikoo',
        location: 'Walnut Creek, CA',
        isInTech: true,
        os: 'windows',
        keywords: ['seeks dev role at tech company', 'own company in the future', 'traveling', 'watching sports', 'video games'],
        linkedIn: 'https://www.linkedin.com/in/parham-rahmani-nikoo-866872142/'
    }, {
        name: 'Sherri Knight',
        location: 'San Luis Obispo, CA',
        isInTech: true,
        os: 'mac',
        keywords: ['transitioning from QA Engineer to API Developer', 'acquire foundational skills for new role', 'plants', 'gardening', 'hanging out with son & wife'],
        linkedIn: 'https://www.linkedin.com/in/sherri-knight-95bb898/'
    }, {
        name: 'Shawn Chang',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new career', 'fishing'],
        linkedIn: 'https://www.linkedin.com/in/shawn-s-chang'
    }, {
        name: 'Maryam Muska',
        location: 'Sacramento, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career change', 'hiking', 'traveling', 'foodie', 'nature'],
        linkedIn: 'https://www.linkedin.com/in/maryam-muska-50aa45158/'
    }, {
        name: 'Phinjock Sonam Sherpa (PJ)',
        location: 'Sonoma, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career change', 'swimming', 'hiking'],
        linkedIn: 'https://www.linkedin.com/in/phinjock-sherpa-08723677/'
    }, {
        name: 'Scott Wattenbarger',
        location: 'Bakersfield, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['newborn daughter', 'seeks new career', 'soccer', 'baseball', 'travel', 'favorite destination is Grand Cayman'],
        linkedIn: 'https://www.linkedin.com/in/scott-wattenbarger-057652123/'
    }, {
        name: 'Rachael Bailey',
        location: 'Sacramento, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['learn code', 'achieve personal & professional goals', 'slackline', 'time with family and friends'],
        linkedIn: 'https://www.linkedin.com/in/rachael-bailey-27b91722b'
    }, {
        name: 'Kristina Litunovskaia',
        location: 'Greenbrae, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['career change', 'learn coding', 'art', 'miniature painting', 'video games'],
        linkedIn: 'https://www.linkedin.com/in/kristina-litunovskaia-6a390a240/'
    }, {
        name: 'Xiaomeng Zhang (Rebecca)',
        location: 'San Francisco, CA',
        isInTech: true,
        os: 'mac',
        keywords: ['attorney coder', 'hiking', 'surfing', 'dancing', 'reading', 'binging shows', 'food photography'],
        linkedIn: 'https://www.linkedin.com/in/rebecca-xm-zhang/'
    }, {
        name: 'Samantha Juarez-Diaz (Sam)',
        location: 'Redwood City, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['better future', 'remote work', 'live independently', 'hiking', 'dancing', 'swimming', 'concerts', 'time with friends & cat'],
        linkedIn: 'https://www.linkedin.com/in/samantha-juarez-diaz'
    }, {
        name: 'Abraham Smith',
        location: 'Charlotte, NC',
        isInTech: false,
        os: 'windows',
        keywords: ['career change', 'skill acquisition', 'music', 'video games', 'going out', 'hang out with friends'],
        linkedIn: 'https://www.linkedin.com/in/abraham-smith-0a561b240'
    }, {
        name: 'Dan To',
        location: 'Milpitas, CA',
        isInTech: true,
        os: 'mac',
        keywords: ['expand skillset', 'better job opportunities', 'video games', 'making YouTube videos on pop music', 'sports'],
        linkedIn: 'https://www.linkedin.com/in/danyoungto/'
    }, {
        name: 'Gina Marie Enriquez',
        location: 'Englewood Cliffs, NJ',
        isInTech: false,
        os: 'windows',
        keywords: ['learn to code', 'geographer', 'career change', 'making music', 'singing', 'traveling', 'hiking'],
    linkedIn: 'https://www.linkedin.com/in/gina-marie-e-28234078/'
    }, {
        name: 'Michael Rugh (Mike)',
        location: 'Roseville, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['career change', 'family time', 'travel', 'bike', 'lift', 'new restaurants'],
        linkedIn: 'https://www.linkedin.com/in/michaelrugh/'
    }, {
        name: 'Kayla',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new career', 'application, web, and game development', 'music', 'gaming', 'cooking'],
        linkedIn: 'https://www.linkedin.com/in/kayla-d-1a64a5b8'
    }, {
        name: 'Jayden Sung Vazques (Jay)',
        location: 'Bronx, NY',
        isInTech: true,
        os: 'windows',
        keywords: ['learn to code', 'new career', 'video games', 'travel'],
        linkedIn: 'https://www.linkedin.com/in/jaden-sung-vazques-088b0223b/'
    }, {
        name: 'Eduardo Cruz (Eddy)',
        location: 'Woodland, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['encouragement from friends and family', 'gaming', 'video surfing'],
        linkedIn: 'https://www.linkedin.com/in/eduardo-cruz-360380239/'
    }, {
        name: 'Luan Pham',
        location: 'Concord, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['personal growth', 'career change', 'flexibility & growth', 'video games', 'sports (football & basketball)', 'exercising'],
        linkedIn: 'https://www.linkedin.com/in/luan-pham-627b1a143/'
    }, {
        name: 'Daniel Cha (Dan)',
        location: 'Berkeley Hills, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new career in XR industries', 'hiking', 'camping'],
        linkedIn: 'https://www.linkedin.com/in/daniel-cha-054392137/'
    }, {
        name: 'Dina Eissa',
        location: 'San Ramon, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['new career', 'better life', 'cooking', 'walking', 'reading'],
        linkedIn: 'https://www.linkedin.com/in/dinameissa/'
    }, {
        name: 'Clarence Bungay',
        location: 'Vallejo, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['challenges', 'basketball'],
        linkedIn: ''
    }, {
        name: 'Rommel Paat',
        location: 'Tracy, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['change of pace', 'possible new career', 'working on cars', 'car shows', 'video games', 'fishing'],
        linkedIn: ''
    }, {
        name: 'Lillian Meagher (pronounced "Ma-her")',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['career change', 'currently in service industry', 'BA in Linguistics', 'loves design', 'mystery novels', 'computer games (fave: Nancy Drew game)', 'walk around Lake Merritt', 'time with family and friends'],
        linkedIn: 'https://www.linkedin.com/in/ljmeagher'
    }, {
        name: 'Kaihuan Huang (Ines)',
        location: 'San Jose, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['likes coding'],
        linkedIn: 'https://www.linkedin.com/in/kaihuan-huang-3775a823a'
    }, {
        name: 'Savannah Fausto (Sav)',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['learn to code', 'career change', 'play pool', 'read', 'music', 'learn new things', 'crochet', 'sewing'],
        linkedIn: ''
    }, {
        name: 'Nan Ding (Nan)',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new skills', 'career change', 'CrossFit', 'cooking', 'traveling'],
        linkedIn: ''
    }, {
        name: 'Kevin Rivera',
        location: 'Pinole, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career in high demand industry', 'help mom retire', 'wants to prove the doubters wrong', 'soccer', 'workout', 'hikes with German Shepard'],
        linkedIn: ''
    }, {
        name: 'Kehinde Olaleye',
        location: 'Lathrop, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['create something', 'become an entrepreneur', 'hangout with friends', 'sports', 'reading'],
        linkedIn: ''
    }, {
        name: 'Jose Reyes',
        location: 'Modesto, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['new career', 'gaming'],
        linkedIn: ''
    }, {
        name: 'Darwin Sandoval',
        location: 'Oakland',
        isInTech: false,
        os: 'windows',
        keywords: ['better future', 'video games'],
        linkedIn: 'https://www.linkedin.com/in/darwin-sandoval-706325239'
    }, {
        name: 'Meskerem Assefa (Mesky)',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new career', 'travel', 'favorite destination: Greek Islands & Austria'],
        linkedIn: ''
    }, {
        name: 'Joshua Nelson',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['continuing eduction', 'job skills', 'reading fantasy', 'strategy games'],
        linkedIn: 'https:// www.linkedin.com/in/joshua-nelson-2a956223b'
    }, {
        name: 'Thomas',
        location: 'Emeryvill',
        isInTech: false,
        os: 'windows',
        keywords: ['new career', 'biking', 'reading', 'movies'],
        linkedIn: ''
    }, {
        name: 'Zaira Rivera',
        location: 'Fairfield, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['career change', 'currently in biz admin', 'reading', 'camping'],
        linkedIn: 'https://www.linkedin.com/in/zaira-r-7a5ab3134'
    }, {
        name: 'Amber Vo',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['new career', 'better future', 'new restaurants', 'hanging out with family and friends'],
        linkedIn: 'https://www.linkedin.com/in/amber-vo-46a305241/'
    }, {
        name: 'Erick Olayo',
        location: 'Victorville, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['works in flooring industry', 'career change', 'sports', 'family time'],
        linkedIn: ''
    }, {
        name: 'Ryan Whitmore',
        location: 'Oakland, CA',
        isInTech: false,
        os: 'mac',
        keywords: ['formal training in software development', 'curious about web technologies', 'bikes', 'cooking'],
        linkedIn: 'https://www.linkedin.com/in/ryan-w-47597283/'
    }, {
        name: 'Emanuel Medina (Manny)',
        location: 'San Francisco, CA',
        isInTech: false,
        os: 'windows',
        keywords: ['Began CS degree at UC Merced Pre-COVID', 'Boot camp to finish gaining skills', 'better job', 'travel', 'soccer', 'cars'],
        linkedIn: ''
    }, {
        name: 'Zachary Adams (Zach)',
        location: 'Las Vegas, NV',
        isInTech: false,
        os: 'windows',
        keywords: ['new career', 'higher income', 'video games', 'collecting hats', 'jiu jitsu'],
        linkedIn: 'https://www.linkedin.com/in/zachary-a-a89674a0'
    }
]

const instructors = [
    {
        name: 'Mark Carlson',
        location: 'Walnut Creek, CA',
        role: 'instructor',
        os: 'mac',
        keywords: ['former radio dj', 'sr front end dev @ AWS', 'mountain biking', 'road cycling', 'bassist for 80s/90s pop/rock cover band "Retroflection"'],
        linkedIn: 'https://www.linkedin.com/in/mc-dev/'
    }
]