
jQuery(document).ready(function(){
				jQuery("#ourPortpfolio").unitegallery({
					tile_enable_image_effect:true,
					tile_image_effect_reverse:true,
					gallery_theme:"tiles",
				});
			});
$(document).ready(function() {
	$(".client").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
	$(".product").owlCarousel({

			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]

	});
});

$(function(){
	$('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);

	});
});
