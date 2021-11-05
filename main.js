$(document).ready(function(){

	copy_gradient_box = $('.gradient_container nav .copy_gradient #text');
	copy_btn = $('.copy');

	var arr = [
		['#83a4d4','#485563','#52c234','#2193b0','#C6FFDD','#0F2027','#12c2e9','#b92b27','#373B44','#2980B9','#FF0099','#aa4b6b','#8E2DE2','#1f4037','#f953c6','#7F7FD5','#c31432','#f12711','#659999','#dd3e54','#8360c3','#544a7d','#009FFF','#654ea3','#FF416C','#8A2387','#a8ff78','#ED213A','#FDC830','#00B4DB','#FFEFBA','#59C173','#005AA7','#DA4453','#636363','#ad5389','#a8c0ff','#333333','#4e54c8','#355C7D','#bc4e9c','#40E0D0','#3E5151','#11998e','#108dc7','#FC5C7D','#FC466B','#c94b4b'],
		['#b6fbff','#29323c','#061700','#6dd5ed','#FBD786','#203A43','#c471ed','#1565C0','#4286f4','#6DD5FA','#493240','#6b6b83','#4A00E0','#99f2c8','#b91d73','#86A8E7','#240b36','#f5af19','#f4791f','#6be585','#2ebf91','#ffd452','#ec2F4B','#eaafc8','#FF4B2B','#E94057','#78ffd6','#93291E','#F37335','#0083B0','#FFFFFF','#a17fe0','#FFFDE4','#89216B','#a2ab58','#3c1053','#3f2b96','#dd1818','#8f94fb','#6C5B7B','#f80759','#FF8C00','#DECBA4','#38ef7d','#ef8e38','#6A82FB','#3F5EFB','#4b134f']
	];

	var arr_len = arr[0].length;

	for(var x = 0;x < arr_len; x++){

		var color1 = arr[0][x];

		var color2 = arr[1][x];

		var style = 'background:linear-gradient(to right,' + color1 + ',' + color2 + ')'; 

		var tag = $("<div class='box' data-count='" + x + "' style='" + style + "'></div>");

		$(".gradient_container .gradient_wrapper").append(tag);
	}

	

	var gradient_wrapper = $('.gradient_container .gradient_wrapper');
	var gradient_nav = $('.gradient_container nav');
	var btn_wrapper = $('.btn_wrapper');

	$('.toggle').click(function(){
		gradient_wrapper.toggleClass('active');
		btn_wrapper.toggleClass('active');
		$('.toggle').toggleClass('active');
	});


	$('.box').click(function(e){
		var data_count = e.target.getAttribute("data-count");
		var bgColor1 = arr[0][data_count];
		var bgColor2 = arr[1][data_count];
		var bgStyle = 'linear-gradient(to right,' + bgColor1 + ',' + bgColor2 + ')';
		$('body').css('background',bgStyle);

		sessionStorage.setItem('copy_gradient',bgStyle);
		copy_gradient = sessionStorage.getItem('copy_gradient');
		copy_gradient_box.text(`background:${copy_gradient};`);
		
		gradient_wrapper.toggleClass('active');
		btn_wrapper.toggleClass('active');
		$('.toggle').toggleClass('active');

		copy_btn.text('Copy Gradient');
	});



	// body gradient set starts

		count = 0;
		var leftBtn = $('.left');
		var rightBtn = $('.right');

		var bgColor1 = arr[0][count];
		var bgColor2 = arr[1][count];
		var bgStyle = 'linear-gradient(to right,' + bgColor1 + ',' + bgColor2 + ')';
		$('body').css('background',bgStyle);

		sessionStorage.setItem('copy_gradient',bgStyle);
		copy_gradient = sessionStorage.getItem('copy_gradient');
		copy_gradient_box.text(`background:${copy_gradient};`);

		copy_btn.text('Copy Gradient');

		rightBtn.click(function(){
			count++;
			if(count >= arr_len){
				count = 0;
			}
			var bgColor1 = arr[0][count];
			var bgColor2 = arr[1][count];
			var bgStyle = 'linear-gradient(to right,' + bgColor1 + ',' + bgColor2 + ')';
			$('body').css('background',bgStyle);

			sessionStorage.setItem('copy_gradient',bgStyle);
			copy_gradient = sessionStorage.getItem('copy_gradient');
			copy_gradient_box.text(`background:${copy_gradient};`);

			copy_btn.text('Copy Gradient');
		});

		leftBtn.click(function(){
			count--;
			if(count < 0){
				count = arr_len - 1;
			}
			var bgColor1 = arr[0][count];
			var bgColor2 = arr[1][count];
			var bgStyle = 'linear-gradient(to right,' + bgColor1 + ',' + bgColor2 + ')';
			$('body').css('background',bgStyle);

			sessionStorage.setItem('copy_gradient',bgStyle);
			copy_gradient = sessionStorage.getItem('copy_gradient');
			copy_gradient_box.text(`background:${copy_gradient};`);

			copy_btn.text('Copy Gradient');
		});



	// body gradient set ends



	//copy to clipboard starts

	$.fn.copyToClipboard = function(element){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).html()).select();
		document.execCommand("copy");
		$temp.remove();

		copy_btn.text('Copied!');
	}

	//copy to clipboard ends


});