let scroll=document.querySelector("i");
scroll.addEventListener('click', function(){
    window.scrollTo({
        top:500,
        behavior:"smooth"
    });
});