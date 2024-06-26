$(document).ready(function(){

$('#searchbar-img').on("click",function(){
    performAction();
    
});


$("#searchbar").on("keydown", function(e){
    if(e.which === 13 ){
        performAction();
    }
});



function performAction(){

    var apiKey="06089a1ec89e46ceb9b185335231408 ";
    var city=$("#searchbar").val();
    const api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;



   $("#weather-img").css({
       marginTop:"2rem",
       width:"10rem",
       height:"10rem",
       backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 18V16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C16.2057 8 15.4654 8.23153 14.8431 8.63079C14.2236 5.97685 11.8427 4 9 4C5.68629 4 3 6.68629 3 10C3 12.973 5.16229 15.441 8 15.917V17.9381C4.05369 17.446 1 14.0796 1 10C1 5.58172 4.58172 2 9 2C11.9967 2 14.6086 3.64768 15.9791 6.08651C16.3109 6.02963 16.652 6 17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H16ZM10.2322 18.7322L12 16.9645L13.7678 18.7322C14.7441 19.7085 14.7441 21.2915 13.7678 22.2678C12.7915 23.2441 11.2085 23.2441 10.2322 22.2678C9.25592 21.2915 9.25592 19.7085 10.2322 18.7322Z'%3E%3C/path%3E%3C/svg%3E')"
   });
   
       
  
   

   
   function apiF(){


   fetch(api)
   .then(res => res.json())
   .then(data =>{
       


   var temp = data.current.temp_c+"°";
   var humidity=data.current.humidity;
   var condition=data.current.condition.text;
   var wind=data.current.wind_kph;
   var location=data.location.name;


   $('#weather-num').html(temp);
   $('#hum-num').html(humidity);
   $('#weather-text').html(condition);
   $('#wind-num').html(wind);
   $('#location').html(location);


   if(condition.indexOf("rain") >=0){
       $("#sun").css({
           display:"none"
       });$(".look").css({
           display:"none"
       });
       $("#rain").css({
           display:"inline-block"
       });
       
   }else if(condition.indexOf("snow") >=0){
       $("#sun").css({
           display:"none"
       });$(".look").css({
           display:"none"
       });
   
       
       $("#snow").css({
           display:"inline-block"
       });
       
   }else if(condition.indexOf("cloud") >=0 || condition.indexOf("Overcast") >=0 ){
       $("#sun").css({
           display:"none"
       });
       $(".look").css({
           display:"none"
       });
   
       $("#cloud").css({
           display:"inline-block"
       });
       
   }else {
       $("#sun").css({
           display:"inline-block"
       });
       $(".look").css({
           display:"none"
       });
   }
      
   })
   .catch(error =>{
       console.log("there is error for "+error);
       $(".alert-text").css({
           display:"inline",
           color:"red"
       }).fadeOut(9000);
   });}

   apiF();
}
    
});