//array of objects containing images and text
var PostContainer = [ 
    
    //image 1
    {
        mainhead : "Gallery",
        names : "Photo 1",
        dates : "Eid-Al-Adha Day 2 , 1 August 2020",
        images : "./images_aboutMe/eid%20al%20adha%20Day%202.jpg",
        headings : "Caption",
        captions : "Din Toh Eid Ka Hai Sabke Liye  💕\n Mere Liye Tab Tak Eid Nhi  😊\n Jab Tak Tumse Mulakaat Nhi  🥰 ❤️. ",
        bluelines : "#Follow Me In Instagram To See The Post."
        
    },
     
    //image 2
    {
        mainhead : "",
        names : "Photo 2",
        dates : "Eid-Al-Fitr Day 1 , 00/00/0000",
        images : "./images_aboutMe/eid%20al%20fitr%20Day%201.jpg",
        headings : "Caption",
        captions : "I Want To Be Your \n Favourite Hello and \n Your Hardest GoodBye 🤝 ",
        bluelines : "#Follow Me In Instagram To See The Post."
    },
    
    //image 3
    {
        mainhead : "",
        names : "Photo 3",
        dates : "When Parent's Came Back , 27/06/2020",
        images : "./images_aboutMe/when%20Parents%20Came%20BAck.jpg",
        headings : "Caption",
        captions : "Tere Chehre Par Hasi To Theek Hai , Lekin Aankhoon Mein Aansho Ka Pehra Dekha Nhi Jaata.\n Apne Hise Ke Khushiyaan Luta Do Tum Par , Tera Utrawa Chehra Dekha Nhi Jaata.\n Apke Hise Ke Gham Hojaye Naseeb Mere. Mere Jaan Ab Tumhe Takleef Mein Dekha Nhi Jaata.",
        bluelines : "#I'm Yours And It's ForEver ❤️🔐 \n #Follow Me In Instagram To See The Post."
    },
    
    //image 4
    {
        mainhead : "",
        names : "Photo 4",
        dates : "JBR , 00/00/0000",
        images : "./images_aboutMe/jbr%202018.jpg",
        headings : "Caption",
        captions : "Walking Alone Makes You Able \n To Take Your Own Decisions 🚶",
        bluelines : "#Click On Image To Have A More Closer View. \n #Follow Me In Instagram To See The Post."
    },
    
    //image 5
    {
        mainhead : "",
        names : "Photo 5",
        dates : "Jabal Jais , 00/00/0000",
        images : "./images_aboutMe/jabal jais 2018.jpg",
        headings : "Caption",
        captions : "Good Boys Are Hard \n To Find Because They \n Are Usually Busy Working.",
        bluelines : "#Follow Me In Instagram To See The Post."
    },
    
    //image 6
    {
        mainhead : "",
        names : "Photo 6",
        dates : "Wadi-Shouka , 00/00/0000",
        images : "./images_aboutMe/wadi shouka 2018.jpg",
        headings : "Caption",
        captions : "They Hate Me Because It's \n Easier Than Beating Me.",
        bluelines : "#Click On Image To Have A More Closer View. \n #Follow Me In Instagram To See The Post."
    },
    
    //image 7
    {
        mainhead : "",
        names : "Photo 7",
        dates : "Amin's Click, 00/00/0000",
        images : "./images_aboutMe/clicked by amin.jpg",
        headings : "Caption",
        captions : "Some Days You Just Have \n To Create Your Own Sunshine.",
        bluelines : "#Click On Image To Have A More Closer View. \n #Follow Me In Instagram To See The Post."
    },
    
    //image 8
    {
        mainhead : "",
        names : "Photo 8",
        dates : "Neck Bones, 00/00/0000",
        images : "./images_aboutMe/clicked by Me when bunked school.jpg",
        headings : "Caption",
        captions : "Beauty Begins The Moment \n You Decide To Be Yourself.",
        bluelines : "#Click On Image To Have A More Closer View. \n #Follow Me In Instagram To See The Post."
    },
    
    //image 9
    {
        mainhead : "",
        names : "Photo 9",
        dates : "Omer , 00/00/0000",
        images : "./images_aboutMe/omer.png",
        headings : "Caption",
        captions : "When I Followed MY Heart, \n It Led Me To You   💞.",
        bluelines : "#Click On Image To Have A More Closer View. \n #Follow Me In Instagram To See The Post."
    },
    
    //image 10
    {
        mainhead : "",
        names : "Photo 10",
        dates : "Omer , 00/00/0000",
        images : "./images_aboutMe/mehendi.jpg",
        headings : "Caption",
        captions : "If I Had To Choose Between \n Breathing Or Loving You 💝\n I Would Use My Last Breath \n To Tell You I Love You 💝🔐",
        bluelines : "#Follow Me In Instagram To See The Post."
    },
    
];

window.onload = function (){
    
    //getting middle id
    var PostImages = document.getElementById('middle');
    
    //used for loop to access each object in array one after another
    for( var i=0 ; i < PostContainer.length ; i++){ 
        
        //creating element
        var NewPost = document.createElement('div');
        var mainheading = document.createElement('h1');
        var name = document.createElement('h2');
        var date = document.createElement('h5');
        var imagess = document.createElement('img');
        var captionheading = document.createElement('h2');
        var caption = document.createElement('p');
        var blueline = document.createElement('span');
        
        //adding css class
        NewPost.classList.add('card');
        //for gallery h1 heading
        mainheading.classList.add('mainheading');
        //container containing image
        NewPost.classList.add('displayimage');
        //to center the image
        imagess.classList.add('center');
        //for hashtag line of caption
        blueline.classList.add('bluespan');
        
        //setting the images and text equal to postcontainer array . mainly , technique for displaying image
        mainheading.innerText = PostContainer[i].mainhead;
        name.innerText = PostContainer[i].names;
        date.innerText = PostContainer[i].dates;
        imagess.src = PostContainer[i].images;
        captionheading.innerText = PostContainer[i].headings;
        caption.innerText = PostContainer[i].captions;
        blueline.innerText = PostContainer[i].bluelines;
        
        //adding all this child element for ex mainheading (childElement) to newpost (ParentElement)
        NewPost.appendChild(mainheading);
        NewPost.appendChild(name);
        NewPost.appendChild(date);
        NewPost.appendChild(imagess);
        NewPost.appendChild(captionheading);
        NewPost.appendChild(caption);
        NewPost.appendChild(blueline);
        
        //adding newpost to postimage (ParentElement)
        PostImages.appendChild(NewPost);
        
    }
    
}
