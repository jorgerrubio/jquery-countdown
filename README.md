Plugin jQuery Countdown
==========================

Este pequeño plugin (1,9K sin comprimir) sirve para mostrar tantos contadores regresivos como quieras en una página web.

USO
---

1. Incluir jquery y jquery.countdown.js en el head de tu página:
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>`
`<script src="jquery.countdown.js" type="text/javascript"></script>`
2. Definir la etiqueta donde vas a mostrar el contador regresivo:
`<div class="countdown" data-comienzo="2016/11/29 00:00" data-pasando="El evento esta transcurriendo" data-fin="El evento ya ha finalizado" data-duracion="2016/11/29 23:59"></div>`
  * Los atributos data-comienzo y data-duracion debe contener un formato Date válido para javascript: dia/mes/año hora:minuto, por ejemplo.
  * Cuando el evento llegue a su hora se mostrara el atributo data-pasando y empezara la cuenta atras del atributo data-duracion
  * Una vez pasada la duracion se mostrará el texto del atributo data-fin
3. Invocar el script:
<pre>
`<script type="text/javascript">`
		;$(function(){
  	    $('.countdown').countdown();
		});
`</script>`
</pre>

##Codigo generado dentro de la etiqueta
`<span class="countdown_dia">65d </span><span class="countdown_hora">04</span><span class="countdown_minutos">:09</span><span class="countdown_segundos">:31</span>`



