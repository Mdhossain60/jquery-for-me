     $(function(){

     //*jquery code
      let hideBtn = $(".hide");
      let box = $(".box"); 
     let showBtn =  $(".show")  
   let toggleBtn = $(".toggle")

   
   hideBtn.click(function () {
    box.slideUp(300)
   })

   showBtn.click(function () {
    box.slideDown(300)
   })

 
   toggleBtn.click(function () {
    box.slideToggle(300)
   })





     })