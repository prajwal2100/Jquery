
// just showing how to fade in and out 
// $(function() {

//   $(".red-box").fadeTo(3000,0.2);
//   $(".green-box").fadeTo(2000,0.6);
//   $(".blue-box").fadeTo(1000,0.8);
//   $(".red-box").fadeTo(2000,0.2);
//   $(".blue-box").fadeToggle();
//   $(".blue-box").fadeToggle();
 

// }); 


// nice animation looks good 

// $(function(){
//   $(".blue-box").hide(1000);
//   $(".blue-box").show(1000);
// });


// slide up and down

// $(function(){
//   $(".blue-box").slideUp(1000);
//   $(".blue-box").slideDown(1000);
//   $("p").hide();
//   $("p").slideDown(1000);
// });


// custom animation
//moving left

// $(function(){
//   $(".blue-box").animate({
//     "margin-left": "+=200px",
//   },2000);
// });

// better custom animation 

// $(function(){
//   $(".blue-box").animate({
//     "margin-left":"200px",
//     "opacity":"0",
//     "width":"50px",                             // you can play around and make it anything
//     "height":"50px",                            // can play around with css attributes
//     "margin-top":"25px"
//   },1000);

//   $("p").animate({
//     "font-size":"35px",
//   },2000);
// });


// chaining the events so that this event happens after another

// $(function(){
//   $(".red-box").fadeTo(1000,0.2),
//   $(".green-box").delay(1000).fadeTo(1000,0.5),
//   $(".blue-box").delay(2000).fadeTo(1000,0.8)
// });


// callback function
// what happens after a function is called

// $(function(){

//   $(".red-box").fadeTo(1000,0,function(){
//   $(".green-box").fadeTo(1000,0,function(){
//   $(".blue-box").fadeTo(1000,0)
//      });
//   });
// });

// this is a light box in which is cool
// but it is permanent at refresh soon it ill be on click

// $(function(){
//  $(".lightbox").delay(500).fadeIn(1000);
// });

// using the attribute CSS
// $(function(){
//     $("p").css("background-color","rgba(180,180,30,0.8)")

//     // we can also select it like 
    
//     $("input[type = text]").css("background-color","red").css("color","white")
//     $("p:first").css("background-color","lightblue")
    
//     $("li:even").css("color","red")
// });


// other operaters
// $(function(){
// $("#list").find("li").css("font-size","34px")
// $("#list").children("li").css("background-color","pink")
// });

// in the above example we were moving down where as in this we will be moving up in the hireracy 
// $(function(){
// $("#list").parents().css("background-color","lightblue")
// // the difference between parent and parents is that parent select only onr higher parent
// $("#list").parent().css("background-color","red")
// // to select the element or the tag before and after a selected tag
// $("#list").prev().css("background-color","cyan")
// $("#list").next().css("background-color","cyan")

// });


//DOM MANIPULATOIN 
// $(function(){
//     // this is used to add the last child 
// $("ul ul:first").append("<li> this is a new element by DOM </li>")
// // this is used to add the first child
// $("ul ul:first").prepend("<li> this is first element</li>")
// });

$(function(){
    $(".red-box").after("<div class= 'red-box'> Another red </div>")
    $(".blue-box").before("<div class= 'blue-box'> blue friend </div>")
});