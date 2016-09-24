/*
 *	Copyright 2016
 *	Jorge Rubio <jorgerrubio@gmail.com>
 *	https://github.com/jorgerrubio/jquery-countdown
 *	
 *	This program is free software; you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation; either version 2 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program; if not, write to the Free Software
 *	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *	MA 02110-1301, USA.
 */
;(function($){	

	$.fn.countdown = function() {
		return this.each (function(indice) {
			if ($(this).attr('id') === undefined) $(this).attr('id', '`countdown_'+indice);
			if ($(this).attr('data-pasando') === undefined) $(this).attr('data-pasando', 'El evento esta transcurriendo');
			if ($(this).attr('data-fin') === undefined) $(this).attr('data-fin', 'El evento ya ha finalizado');
			var fecha = new Date ($(this).attr('data-comienzo')),
			contenedor = '#'+$(this).attr('id');
			console.log(fecha, $(this).attr('data-comienzo'));
			$.fn.countdown.refresca(Math.floor(new Date(fecha-new Date()).valueOf()/1000), contenedor, false);
		});
	};

	$.fn.countdown.refresca = function(secs, id, pasando) {

		function calcula_time(secs, num1, num2) {
			s = ((Math.floor(secs/num1))%num2).toString();
			if (s.length < 2)
				s = "0" + s;
			return s;
		};

		function html(secs, message) {
			var dia = calcula_time(secs,86400,100000),
			hora = calcula_time(secs,3600,24),
			min = calcula_time(secs,60,60),
			seg = calcula_time(secs,1,60);

			dia = (parseInt(dia) <= 0) ? '' : dia +'d ';
			return message + ' <span class="countdown_dia">' + dia + '</span><span class="countdown_hora">' + hora + '</span><span class="countdown_minutos">:' + min + '</span><span class="countdown_segundos">:' + seg + '</span>';
		}

		if (secs < 0) {
			var duracion = $(id).attr('data-duracion');
			if(duracion == ''){
				$(id).html(mensaje);
			}else{
				var fecha = new Date (duracion);
				duracion = Math.floor(new Date(fecha-new Date()).valueOf()/1000);
				if(duracion < 0){
					$(id).html($(id).attr('data-fin'));
				}else{
					$.fn.countdown.refresca((duracion-1), id, true);
				}
			}
		} else {
			var message = (pasando) ? $(id).attr('data-pasando') + ' Queda:' : '';
			var view = html(secs, message);
			$(id).html(view);
			setTimeout("$.fn.countdown.refresca(" + (secs-1) + ", '" + id + "', " + pasando + ")", 1000);
		};

		return this;
	};

})(jQuery);