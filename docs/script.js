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
    "Bonjour et bienvenue sur mon site web ! 👋",
    "Je suis Jughurta Menzou, un ingénieur logiciel junior passionné par la création et le développement. Depuis mon enfance, j’ai toujours été fasciné par le fonctionnement des choses, que ce soit en assemblant des LEGO® ou en résolvant des puzzles. Cette curiosité m’a naturellement conduit au développement logiciel, où je transforme aujourd’hui des idées en solutions numériques innovantes et efficaces. J’ai récemment obtenu mon B.A.Sc. en Génie Logiciel à l’Université d’Ottawa. J’ai acquis plus d’un an d’expérience pratique en tant que développeur full-stack dans deux startups. Grâce à ces expériences, j’ai renforcé mes compétences en React.js, Node.js, Laravel, Flutter et Spring Boot. J’ai également développé une expertise en gestion de bases de données, cloud computing et outils DevOps comme Docker et les pipelines CI/CD. Je suis toujours motivé à apprendre, à évoluer et à relever de nouveaux défis. J’aime repousser les limites et améliorer mes compétences. Mon objectif ? Atteindre mon plein potentiel en tant qu’ingénieur logiciel tout en aidant les entreprises à concevoir des applications évolutives, performantes et intuitives. N’hésitez pas à consulter mon travail sur GitHub, à me contacter sur LinkedIn ou à échanger si vous souhaitez collaborer ! 🚀"
  ],
  typeSpeed: 40, // Vitesse de frappe améliorée pour une meilleure expérience utilisateur
});




var typed = new Typed('.resume', {
  strings: [
    "",
    "Merci d'avoir visité mon site web ! 🙌 Je suis toujours enthousiaste à l'idée d'apprendre, de collaborer et de relever de nouveaux défis. Si mon profil vous intéresse ou si vous souhaitez échanger, n’hésitez pas à me contacter. Au plaisir d’échanger avec vous ! 😊"
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
