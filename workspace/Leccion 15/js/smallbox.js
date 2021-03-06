(function () {

    $.smallBox = function (opciones) {
        opciones = $.extend({
            titulo: undefined,
            subttulo: undefined,
            contenido: undefined,
            fa: "far fa-envelope",
            img: undefined,
            timeout: 3000
        }, opciones);

        var html = "";
        html += '<div class="smallBox-contenedor">';
        html += '<div class="smallBox-foto">';
        html += '<img src="' + opciones.img + '" />';
        html += '</div>';
        html += '<div class="smallBox-contenido" align="center">';
        html += '<div class="smallBox-textoContenedor" align="left">';
        html += '<span class="smallBox-titulo">' + opciones.titulo + '</span>';
        html += '<span class="smallBox-subTitulo">' + opciones.subtitulo + '</span>';
        html += '</div>';
        html += '<div class="smallBox-pico"></div>';
        html += '<div class="smallBox-cajaColor">';
        html += '<div class="smallBox-colorTexto">';
        html += '<i class="far fa-bell"></i> ' + opciones.contenido;
        html += '</div>';
        html += '<div class="smallBox-colorIcon">';
        html += '<i class="' + opciones.fa + ' fa-2x"></i>';
        html += '</div>';
        html += '</div>';
        html += '<div class="smallBox-sombra"></div>';
        html += '</div>';
        html += '</div>';

        $("body").append(html);

        animar_entrada();

        setTimeout(function () {
            animar_salida();
        }, opciones.timeout);

    };

    function animar_salida() {
        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
            tl.to($smallBox, 1.3, { x: "+=100px" })
            .to($smallBox, 1, { opacity: 0, onComplete: remover_smallbox }, "-=1");
    }

    function remover_smallbox(){
        $(".smallBox-contenedor").remove();
    }

    function animar_entrada() {

        var $smallBox = $(".smallBox-contenedor");

        var tl = new TimelineMax();
        tl.from($smallBox, 1.3, { x: "+=100px", opacity: 0, ease: Bounce.easeOut })
            .from($smallBox, 1, { opacity: 0 }, "-=1.3");
    }



})();