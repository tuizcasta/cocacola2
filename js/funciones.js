jQuery(document).ready(listo)  /*document es una representacion de toda la web , esta funcion se aplica cuando la pagina ya esta lista*/

function listo()
{
    jQuery(".hamb").click(function(e){ /*decimos que cuando se de click en el menu hamb se ejecute una accion*/
        e.preventDefault(); /*que el menu no nos lleve al inicio*/
        jQuery("header .container nav").toggleClass("open"); /*hacemos que la pagina vaya al menu al darle al menu hamb*/
        jQuery(".hamb i").toggleClass("fa-times"); /*cuando vaya al menu nav la hamb se convierta en x*/

    });

    jQuery(" header .container nav a").click(function(){ /*daremos funcion a los a que hay en el menu nav*/
        jQuery("header .container nav").removeClass("open"); /*para que el menu se cierre*/
        jQuery(".hamb i").removeClass("fa-times");
        var dev = jQuery(this).attr("href"); /*obtenemos el valor del atributo al que damos click*/
        jQuery("html,body").animate({ /*animamos para ir a la seccion que se requiera*/
            "scrollTop": jQuery(dev).offset().top -76
        })
            
    })
}



  
 