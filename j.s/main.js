////single image slider
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n){
//    showSlides(slideIndex += n);
//}
//
//function currentSlide(n){
//    showSlides(slideIndex = n);
//}
//
//function showSlides (n){
//    
//    var i;
//    var slides = document.getElementsByClassName('mySlides');
//    var dots = document.getElementsByClassName('dot');
//    if( n > slides.length){slideIndex = 1};
//    if( n < 1){slideIndex = slides.length};
//
//    for (i = 0; i < slides.length ; i++){
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length ; i++){
//        dots[i].className = dots[i].className.replace(' active', "");
//    }
//    
//    slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += " active";
//    
//     
//}

    
// for header automatic image slider
//var SlideIndexForHeader = 0;
//showSlidesForHeader();
//
//function showSlidesForHeader(){
//    
//    var i;
//    var slidesForHeader = document.getElementsByClassName('mySlides3');
//    var dotsForHeader = document.getElementsByClassName('dot');
//    
//    for(i=0 ; i < slidesForHeader.length ; i++){
//        slidesForHeader[i].style.display = "none"
//    }
//    SlideIndexForHeader++;
//    
//    if(SlideIndexForHeader > slidesForHeader.length){SlideIndexForHeader = 1}
//    
//    for(i=0 ; i < dotsForHeader.length; i++){
//        dotsForHeader[i].className = dotsForHeader[i].className.replace(" active", "");
//    }
//    
//    slidesForHeader[SlideIndexForHeader-1].style.display = "block";
//    dotsForHeader[SlideIndexForHeader-1].className += " active";
//    setTimeout(showSlidesForHeader , 2000);
//}

//for alert message
function alertMessage(){
    window.alert('These are latest updates of Covid-19 cases in some Country');
}

function precautions(){
    window.alert('Some of the precautions you can take to avoid being Covid : positive');
}

//for prompt pop up notification
function otherCountries(){
    var text;
    var person = prompt('please Enter Your Name:' , "Omer");
    if (person === null || person === ""){
        text = "User Cancelled The Promt";
    }else{
        text = "Hey " + person + " , Please Click <br> the Link Below For Other<br> Covid Cases and Numbers";
    }
    document.getElementById('demo').innerHTML = text;
}
 
//for alert message
function welcometo(){
    window.alert('Welcome To Covid-19 Website');
} 

function ReplaceForn(){
    var form = document.getElementById('form2');
    var Replaced = document.getElementById('forReplacement');
    var EmailInfo = document.getElementById('email').value;
    var errors = document.getElementById('error');
    var text2;
    
    errors.style.padding = "10px";
    
    if(EmailInfo.valueOf("@") == -1 || EmailInfo.length < 6){
        text2 = ("Please Enter Valid Email");
        errors.innerHTML = text2;
        return false;
    }
    
    if(form.style.display === "none"){
        form.style.display = 'block';
    }else {
        form.style.display = 'none';
        text2 =  "Hey , thanks for Subscribing <br><br>If we are able to investigate it further, we will email you at " + EmailInfo + "<br><br>Feel free to visit us Next Time";
    }
    Replaced.innerHTML = text2;
    
    errors.style.display='none';
    return true;

}
    

    