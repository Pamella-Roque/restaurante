$(document).ready(function(){ /* Iniciar o jquery*/
    $('#mobile_btn').on('click', function (){  /*Pegar Id do botão id=# classe =. */
        $('#mobile_menu').toggleClass('active') /* classe de active */
        $('#mobile_btn').find('i').toggleClass('fa-x') /* classe de active */
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0; /* Vai alterar a cada secao */
        if (scrollPosition<=0){
            header.css('box-shadow', 'none');
        }
        else{
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1');
        }
        /*loop para pegar cada secao*/
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;   /* Saber quando chegou ao topo, embaixo da navbar  */
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    /*scrollReveal - site para criar as animações*/
    ScrollReveal().reveal('#cta', {
        origin:'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('.dish', {
        origin:'left',
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal('#testimonial_chef', {
        origin:'left',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('.feedback', {
        origin:'right',
        duration: 2000,
        distance: '20%'
    })
})