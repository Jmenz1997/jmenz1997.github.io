//NAVBAR
let lastScrollTop=0;
navbar= document.getElementById('navbar');

window.addEventListener('scroll',function() {
  const scrollTop= window.pageTOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top= "-50px";

  }else{
    navbar.style.top="0";

  }
  lastScrollTop=scrollTop;

});

// TYPED

var typed = new Typed('.typed', {
  strings: [
    "Hey there, welcome to my website! 👋",
    "I'm Jughurta Menzou, a junior software engineer with a passion for building and creating. Ever since I was a kid, I’ve been fascinated by how things work—whether it was assembling LEGO® sets or solving complex puzzles. That same curiosity led me into the world of software development, where I now turn ideas into functional and impactful digital solutions. I recently graduated with a B.A.Sc. in Software Engineering from the University of Ottawa. I've gained over a year of hands-on experience working as a full-stack developer at two startups. Through these experiences, I honed my skills in React.js, Node.js, Laravel, Flutter, and Spring Boot. I've also gained expertise in database management, cloud computing, and DevOps tools like Docker and CI/CD pipelines. I’m always eager to learn, grow, and take on new challenges. I thrive on pushing boundaries and improving my craft. My goal? To reach my full potential as a software engineer while helping companies build scalable, efficient, and user-friendly applications. Feel free to check out my work on GitHub, connect with me on LinkedIn, or reach out if you’d like to collaborate! 🚀"
  ],
  typeSpeed: 40, // Increased speed for better UX
  
});


var typed = new Typed('.resume', {
  strings: [
    "",
    "Thank you for visiting my website! 🙌 I'm always eager to learn, collaborate, and take on new challenges. If you're interested in my profile or would like to connect, feel free to reach out. Looking forward to hearing from you! 😊"
  ],
  typeSpeed: 40,
});


//Compteur live
let compteur =0;
$(window).scroll(function(){
  const top =$('.counter').offset().top - window.innerHeight;
  if (compteur ==0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function(){
      let $this =$(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
    },
    {
      duration: 1000,
      easing: 'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));

      },
      complete: function() {
        $this.text(this.countNum);

      }
    });

    });
    compteur= 1;
  }
});
window.onload= function() {
  Particles.init({
    selector: '.background'
  });
};
AOS.init();