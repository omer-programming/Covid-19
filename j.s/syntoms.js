function replaceForm(){ 
    
    var x = document.getElementById('form1');
    var o = document.getElementById('checking');
    var y = document.getElementById('forReplacement');
    var person = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var areaT = document.getElementById('question').value;
    var age = document.getElementById('age').value;
    var telephoneNumber = document.getElementById("telephoneNumber").value;
    var above16years = document.getElementById("above16years").value;
    var termsofservice = document.getElementById('termsofservice').value;
    var error = document.getElementById('error');
    var text1;  
     
    
    error.style.padding = "10px";  
    
    if(areaT == "" || areaT.length > 140){
        text1 = 'Text Area Can Not Be Blank  And Should Not Exceed More Than 140 Characters';
        error.innerHTML = text1;
        return false;
    } 
    
    if(person == ""){
        text1 = 'Name Is Required';
        error.innerHTML = text1;
        return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
        text1 = 'Please Enter Valid Email';
        error.innerHTML = text1;
        return false;
    }
    
    if(age == ""){
        text1 = 'Age Is Required';
        error.innerHTML = text1;
        return false;
    }
    
    if(isNaN(telephoneNumber) || telephoneNumber.length != 10){
        text1 = 'Please Enter Valid Phone Number';
        error.innerHTML = text1;
        return false;
    }
    
    if(above16years.checked == true){
//        return false;
//    }else {
        text1 = "Checkbox Must Be Accepted";
        error.innerHTML = text1;
        return false;
    }
    
    
    if(termsofservice.checked == true){
//        return false;
//    }else {
        text1 = "Checkbox Must Be Accepted";
        error.innerHTML = text1;
        return false; 
    }
    
    
    //for displaying some text when user clicks on submit...
    if(x.style.display === "none"){
        
        x.style.display = "block";
        
    }else{
        
        x.style.display = "none"; 
        text1 = "Hey " + person + ", thanks for asking your question : " + areaT +" <br><br>If we are able to investigate it further, we will email you at " + email + "<br><br>Feel free to encourage your friends to ask questions, too!";
        o.style.display ="block";
        
    }
    
    y.innerHTML = text1;
    
    error.style.display="none";
    
    return true;
        
}

//if(x.style.display === "none"){
//        
//        x.style.display = "block";
//        
//    }else{
//        
//        x.style.display = "none"; 
//        text1 = "Hey " + person + ", thanks for asking your question : " + areaT +" <br><br>If we are able to investigate it further, we will email you at " + email + "<br><br>Feel free to encourage your friends to ask questions, too!";
//        o.style.display ="block";
//        
//    }
//    
//    y.innerHTML = text1;




//function validateForm(){
//    
//    //required message for name
//    var names = document.forms['myform']['name'].value;
//    if(names == ""){
//        alert('Name must be filled out');
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//    
//    //required message for email
//    var emails = document.forms['myform']['email'].value;
//    if(emails == ""){
//        alert('Email-ID must be filled out');
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//    
//    //required message for age
//    var ages = document.forms['myform']['age'].value;
//    if(ages == ""){
//        alert('Age must be filled out');
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//    
//    //required message for telephoneNumber
//    var telephone = document.forms['myform']['telephoneNumber'].value;
//    if(telephone == ""){
//        alert('Telephone Number must be filled out');
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//    
//    // required mesasage for above-16-years
//    var sixteen_plus = document.forms['myform']['above16years'].value;
//    if(sixteen_plus == ""){
//        alert('Must be accepted');
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//    
//    // required message for terms-of-service
//    var terms_of_services = document.forms['myform']['termsofservice'].value;
//    if(terms_of_services == ""){
//        alert("Must be accepted");
//        //to prevent form from submitting we have used return false
//        return false;
//    }
//}   

//form validation
//const forms = document.getElementById('form1');
//const textarea1 = document.getElementById('question');
//const Name = document.getElementById("name");
//const Email = document.getElementById("email");
//const Age = document.getElementById("age");
//const Telephone = document.getElementById("telephoneNumber");
//const errorElement = document.getElementById('error');
//
//forms.addEventListener('button', (e) => {
//    let messages= [];
//    if(name === "" || name === null){
//        messages.push('Name Is Required');
//    }
//    
//    if(textarea1.value.length > 140){
//        messages.push('Can not exceed 140 characters');
//    }
//    
//    if(textarea1 === "" || textarea1 === null ){
//        messages.push("question is required");
//    }
//    
//    if(Email === "" || Email === null){
//        messages.push('Email Is Required');
//    }
//    
//    if(Age === "" || Age === null){
//        messages.push('Age Is Required');
//    }
//    
//    if(Telephone === "" || Telephone === null){
//        messages.push('Telephone Is Required');
//    }
//    
//    if(messages.length > 0){
//        e.preventDefault();
//        errorElement.innerText = messages.join(', ');
//    }
//    
//});


