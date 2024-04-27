$(document).ready(function(){ /* Iniciar o jquery*/
    $('#mobile_btn').on('click', function (){  /*Pegar Id do botão id=# classe =. */
        $('#mobile_menu').toggleClass('active') /* classe de active */
        $('#mobile_btn').find('i').toggleClass('fa-x') /* classe de active */
    })
})