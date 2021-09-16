 

 var bars = document.querySelector('.bars');
 bars.addEventListener('click', function(){
     var x = document.querySelector('.sidebar');
     x.classList.toggle('done');
 })



 var close = document.querySelector('.close');
 close.addEventListener('click', function(){
    var x = document.querySelector('.sidebar');
    x.classList.remove('done');
})