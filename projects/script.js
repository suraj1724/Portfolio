$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio Suraj Attar";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });
   function fetching(){
  
    fetch("./skills.json").then(Response=>Response.json()).then(data=>{
        $.each(data,(key,val)=>{
            $(`<div><img src="${val.icon}">
            <div>'
            <h2>${val.name}</h2></div>
            
            </div>
           `).appendTo("#skillsContainer");
        })
    });
   
   
   }
   function fetcjingagain(){
    fetch("./projects/my.json")
  .then((response) => response.json())
  .then((data) =>{
    $.each(data,(key,val)=>{
        $(`
        <div data-aos="fade-down-right" class="card" style="width:370px; height:250px;margin-top:35px">
      <div class="d-flex justify-content-center align-items-center mt-3" >  <img onclick="window.location.href='${val.links.view}'" class="card-img-top w-100" src="${val.image}" alt=""></div>
      
        <div class="card-title ">
          <h2 class="text-dark">${val.name}</h2>
        </div>
       
      </div>
     
       `).appendTo("#pro");

    })
})
   }
  
   function onlbodyload(){
    fetching();
    fetcjingagain();
   };
   

   
   var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing","web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});



