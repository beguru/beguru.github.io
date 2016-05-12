

jQuery.fn.portfolio_addon = function(addon_options) {
	//Set Variables
	var addon_el = $(this),
		addon_base = this,
		img_count = addon_options.items.length,
		img_per_load = addon_options.load_count,
		$newEls = '',
		loaded_object = '',
		$container = $('.work');
	
	$('.load_projets').click(function(){
		$newEls = '';
		loaded_object = '';									   
		loaded_images = $container.find('.added').size();
		if ((img_count - loaded_images) > img_per_load) {
			now_load = img_per_load;
		} else {
			now_load = img_count - loaded_images;
		}
		
		 if ((loaded_images + now_load) == img_count){
			$('#text_works').text('No more news');
			$(this).fadeOut();
		}

		if (loaded_images < 1) {
			i_start = 1;
		} else {
			i_start = loaded_images+1;
		}

		if (now_load > 0) {
				//2-4 Columns Portfolio Type
				for (i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + '                                         <article class="'+ addon_options.items[i].category +' '+ addon_options.items[i].columns +' added">'+ addon_options.items[i].content +'</article>';				
			}
			$newEls = $(loaded_object);
			$container.isotope('insert', $newEls, function() {
				$container.isotope('reLayout');
				
				
				$('.flexslider').flexslider({
					animation: "slide",
					animationLoop: false,
					controlNav: false,
					animationSpeed: 2000,
					smoothHeight: true,
					
					});
		
				var $modal = $('#ajax-modal');
        
        $('.ajax.demo').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
        
          // create the backdrop and wait for next modal to be triggered
            var url = $(this).attr('href');
          setTimeout(function(){
			$modal.load(url, '', function(){
			$modal.modal();
			
			
			$('.comments-toggle').click(function(e){
				//get collapse content selector
				var collapse_content_selector = $(this).attr('href');					
				 e.preventDefault();
				//make the collapse content to be shown or hide
				var toggle_switch = $(this);
				$(collapse_content_selector).slideToggle(600, function(){
				  if($(this).css('display')=='none'){
									//change the button label to be 'Show'
					toggle_switch.html('NEWS CATEGORIES');
				  }else{
									//change the button label to be 'Hide'
					toggle_switch.html('CLOSE CATEGORIES');
				  }
				});
			  });
			
			
			// Initialize Flex Slider
			$('#ajax-modal').on('shown', function (e) {
				initFlexSliders();


		});
            });
          }, 100);
        }); 
				
				
				
	  
			});			
		}
	});
}

