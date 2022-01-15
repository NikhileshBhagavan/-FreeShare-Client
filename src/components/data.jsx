const obj = {
    "Action & Adventure": {
        sublist: ["Action", "Adventure", "Others"],
        icon_url: "https://miro.medium.com/max/2000/1*_-iJy4TfgluTmLrxhtHxqQ.jpeg",
    },
    "Arts, Film & Photography": {
        sublist: ["Architecture", "Cinema & Broadcast", "Dance", "Design & Fashion", "Museums & Museology", "Music", "Painting", "Photography", "Sculpture", "Theater & Ballet", "Theory & Criticism", "Others"],
        icon_url: "https://m.media-amazon.com/images/I/51iMHpsbauL._AC_UY218_.jpg",
    },
    "Biographies, Diaries & True Accounts": {
        sublist: ["Biographies & Autobiographies", "Diaries & Journals", "True Accounts", "Others"],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUk11BQNRjGQzw7EZJ_ceQg-hNd9Wsqe9hUw&usqp=CAU",
    },
    "Business,Finance & Economics": {
        sublist: ["Analysis & Strategy", "Business Development & Entrepreneurship", "Economics", "Industries", "Others"],
        icon_url: "https://www.york.ac.uk/media/study/courses/undergraduate/economics/EconomicsFinanceHero.jpg",
    },
    "Children's": {
        sublist: ["0-2 years", "3-5 years", "6-8 years", "9-12 years", "13-16 years"],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgfjwkJDh16qHGSBPPGM2xXig9nMVtajDQQ&usqp=CAU",
    },
    "Comics & Mangas": {
        sublist: ["Comics", "Mangas", "Others"],
        icon_url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781507216514/make-your-own-manga-9781507216514_hr.jpg",
    },
    "Communication & Journalism": {
        sublist: ["Communications", "Journalism", "Media Studies", "Speech", "Others"],
        icon_url: "https://greenlee.iastate.edu/wp-content/uploads/sites/186/2020/09/7editions2.png",
    },
    "Computer Science": {
        sublist: ["Algorithms", "Artificial Intelligence", "Computer Modelling", "Database Storage & Design", "Data Structures", "Graphics & Visualization", "Networking",
            "Object-Oriented Software Design", "Operating Systems", "Programming Languages", "Software Design & Engineering", "Web Development & Design", "Others"
        ],
        icon_url: "https://cdn.pixabay.com/photo/2015/09/16/09/47/books-942485_1280.jpg",
    },
    "Computers & Internet": {
        sublist: ["Computer Science", "Computer Security", "Databases & Big Data", "Games & Strategy Guides", "Graphics & Design", "Hardware & DIY", "Internet & Social Media", "Network Administration", "Operating Systems", "Programming & Software Development", "Software", "Others"],
        icon_url: "https://freerangestock.com/sample/48638/computers-and-internet-book-stack-laptop-shows-web-research.jpg",
    },
    "Crafts, Hobbies & Home": {
        sublist: ["Antiques & Collectables", "Food, Drink & Entertaining", "Games & Quizzes", "Gardening & Landscape Design", "Handicrafts, Decorative Arts & Crafts", "Home & House Maintenance", "Lifestyle & Personal Style Guides", "Pets & Animal Care", "Others"],
        icon_url: "https://m.media-amazon.com/images/I/518-ddkIk8L._AC_UY218_.jpg",
    },
    "Crime, Thriller & Mystery": {
        sublist: ["Crime", "Mystery", "Thrillers and Suspense", "Others"],
        icon_url: "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/2f325be9-776a-466d-9e8c-04727204c52b/best-crime-thriller-books-2021-header.jpg",
    },
    "Dictionaries": {
        sublist: ["Dictionaries & Thesauruses", "Encyclopaedias & Reference Works", "Etiquette", "Library & Information Science", "Words, Language & Grammar", "Others"],
        icon_url: "https://images-na.ssl-images-amazon.com/images/I/717ZIqhTOHL.jpg",
    },
    "Engineering": {

        sublist: ["Aeronautical Engineering", "Aerospace Engineering", "Automobile Engineering", "Bioengineering", "Biotechnology", "Chemical Engineering", "Civil Engineering", "Electrical and Electronic Engineering",
            "Environmental Engineering", "Industrial Engineering", "Marine Engineering", "Mechanical Engineering",
            "Mechatronics Engineering", "Metallurgical & Materials Engineering", "Mining", "Non-Core Engineering", "Nuclear Engineering", "Production, Operation & Management", "Others"
        ],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLo_eGM-xelS3NlEtvrMvFo5bMJmJc-ck8w&usqp=CAU",
    },
    "Exam Preparation": {
        sublist: ["JEE", "NEET", "CAT", "UPSC", "International Exams", "State PSC", "SSC", "UGC", "TET", "Banking", "Others"],
        icon_url: "https://imgeng.jagran.com/images/2021/jun/neet1622892206593.jpg",
    },
    "Science Fiction & Fantasy": {
        sublist: ["Fantasy", "Horror", "Science Fiction", "Others"],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvppQDMPh-HHWhiYevrBD6WmXs3nDOy0GMew&usqp=CAU",
    },
    "Health, Fitness & Nutrition": {
        sublist: ["Addiction & Recovery", "Others"],
        icon_url: "https://www.foodforfitness.co.uk/wp-content/uploads/2017/06/bes-books-2017-e1504192306376.jpg",
    },
    "Health, Family & Personal Development": {
        sublist: ["Family & Relationships", "Healthy Living & Wellness", "Personal Transformation", "Self-Help", "Others"],
        icon_url: "https://st.depositphotos.com/1034557/1205/v/950/depositphotos_12058385-stock-illustration-personal-development.jpg",
    },
    "Historical Fiction": {
        sublist: ["Historical Fiction", "Others"],
        icon_url: "https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Historical-Fiction-scaled.jpg",
    },

    "History": {
        sublist: ["Ancient", "Indian History", "Military", "Region & Countries", "World", "Others"],
        icon_url: "https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?k=20&m=1092170968&s=612x612&w=0&h=xuN5I9AhwUps398V6UqE1HL84Dcb4AheOPu9NeKJcrE=",
    },
    "Health Sciences": {
        sublist: ["Administration & Policy", "Allied Health Sciences", "Alternative Medicine", "Others"],
        icon_url: "https://3.imimg.com/data3/BW/TF/MY-542981/anaatomy-physiology-for-allied-health-sciences-500x500.jpg",
    },
    "Humanities": {
        sublist: ["Archaelogy", "Art History", "Performing Arts", "Philosophy", "Visual Arts", "Others"],
        icon_url: "https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2015/12/humanitiesauthors.jpg",
    },
    "Humour": {
        sublist: ["Humour", "Others"],
        icon_url: "https://images-na.ssl-images-amazon.com/images/I/91+931eYwyL.jpg",
    },

    "Language, Linguistics & Writing": {
        sublist: ["Dictionaries", "Grammar", "Journalism", "Language Learning & Teaching", "Linguistics", "Public Speaking", "Writing Guides", "Others"],
        icon_url: "https://www.basicknowledge101.com/photos/2016/language_symbol.jpg",
    },

    "Law": {
        sublist: ["Bar Exams", "Business Law", "Constitutional Law", "Criminal Law", "Legal Reference", "Tax Law", "Others"],
        icon_url: "https://media.istockphoto.com/photos/stack-of-law-books-in-front-of-scales-of-justice-picture-id690153060?b=1&k=20&m=690153060&s=170667a&w=0&h=egOkIb951ILPsQY99UpHcFQLkY8IdSxez9lLePuIDbA=",
    },
    "Literature & Fiction": {
        sublist: ["Anthologies", "Classic Fiction", "Contemporary Fiction", "Essays", "Literary Theory, History & Criticism", "Myths, Legends & Sagas", "Plays", "Poetry", "Religious & Spiritual Fiction", "Short Stories", "Travel Writing", "Others"],
        icon_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-classic-english-literature-books-tim-gainey.jpg",
    },
    "Maps & Atlases": {
        sublist: ["Maps & Atlases", "Others"],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYb-Ehj9Dyyv-lYuJR1_L9UlG6oQpf7OC6g&usqp=CAU",
    },
    "Medicine": {
        sublist: ["Biostatistics", "Basic Sciences", "Bio Technology", "Clincal", "Dentistry", "Diagnostics & Labs", "Epidemiology", "Nursing", "Veterinary Medicine", "Others"],
        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFXIyLlNp_pERGZ2Vksu1CAjOfNCXaxjZNg&usqp=CAU",
    },
    "Politics": {
        sublist: ["Freedom & Security", "International Relations & Globalization", "Political Ideologies", "Political Parties", "Political Structure & Processes", "Political Theory", "Public Administration", "Others"],
        icon_url: "https://images-na.ssl-images-amazon.com/images/I/81PgnNelEEL.jpg",
    },
    "Religion & Spirituality": {
        sublist: ["Baha'i", "Buddhism", "Christianity", "Ethnical", "Hinduism", "Islam", "Jainism", "Judaism", "New Age & Spirituality", "Religious Studies", "Shintoism", "Sikhism", "Others"],
        icon_url: "https://media.istockphoto.com/vectors/vector-ink-hand-drawn-style-world-religions-holy-books-set-vector-id862708854",
    },
    "Romance": {
        sublist: ["Anthologies", "Contemporary", "Fantasy", "Historical", "Romantic Suspense", "Others"],
        icon_url: "https://i0.wp.com/batchofbooks.com/wp-content/uploads/2019/02/YA-Romance-Books-for-Teens-Image.png?fit=900%2C480&ssl=1",
    },
    "School Books": {
        sublist: ["CBSE", "CISCE", "International School Boards", "Open Schooling", "Olympiads & Scholarship Exams", "School Atlases", "School Bundles", "State Education Boards", "Others"],
        icon_url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/books-647.jpeg?.z2anNvBSb9DDobrPu1HyyNG2AmlgCzt&size=1200:675",
    },
    "Science and Mathematics Textbooks": {
        sublist: ["Agriculture & Farming", "Astronomy & Astrophysics", "Biology & Life Sciences", "Chemistry", "Earth Sciences", "Environmental Studies", "Mathematics", "Mechanics", "Physics", "Others"],
        icon_url: "https://pictures.abebooks.com/CUFFLEYBOOKS/22417789487.jpg",
    },

    "Society & Social Sciences": {
        sublist: ["Anthropology", "Education", "Ethnography", "Geography", "Religious Groups Studies", "Social Welfare & Social Services", "Society & Culture", "Sociology", "Others"],
        icon_url: "https://us.123rf.com/450wm/masterart/masterart1406/masterart140600005/29466422-a-word-cloud-of-social-science-related-items.jpg?ver=6",
    },
    "Sports": {
        sublist: ["Air Sports", "American Football", "Athletics & Gymnastics", "Badminton", "Baseball", "Basketball", "Bodybuilding & Weightlifting", "Bowls, Bowling & Petanque", "Cricket", "Golf", "Hockey", "Motor Sports", "Pool, Billiards & Snooker", "Rugby", "Soccer", "Sporting Events & Organisations",
            "Table Tennis", "Tennis", "Training & Coaching", "Volleyball", "Water Sports", "Winter Sports", "Others"
        ],
        icon_url: "https://spy.com/wp-content/uploads/2021/04/best-sports-books.jpg",
    },

    "Travel & Tourism": {
        sublist: ["Food, Lodging & Transportation", "Illustrated Books", "Specialty Travel", "Transport", "Travel & Holiday Guides", "Travel Writing", "Others"],
        icon_url: "https://graphicriver.img.customer.envatousercontent.com/files/267920963/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=0a7832f66438c7e8afd0fe88cffde162",
    },
    "Others": {
        sublist: null,
        icon_url: "https://media.newyorker.com/photos/5c1d0d7781ab3335f580e163/master/pass/TNY-MoreBooksWeLoved2018.jpg",
    },







};


export default obj;