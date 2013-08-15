var buildBlog = function() {
		var posts = [],
			i = 1;
		$(window).on('scroll', function() { //first setup listeners
			//Gotta reset these for IE8
			if(typeof pageYOffset == 'undefined') { var scroll = D.scrollTop; }
			else { var scroll = pageYOffset; }
			
			//Fixing the docsNav position
		});
		$.each($('#content article'), function() { 
			var list = $(this).children('section.header').children('.tags').children('a'),
				tags = [];
			$(this).attr('id', 't'+i);
			var markup = '<li id="a'+i+'"><div class="label"></div><div class="circle"></div></li>';
			$('#content nav ol').append(markup);
			$.each(list, function() {
				var tag = $(this).text(),
					linkMarkup = ' <a href="/blog/tagged/'+tag+'.html" class="'+tag+'">'+tag+'</a>';
				tags.push(tag);
				$('#a'+i+' .label').append(linkMarkup);
			});
			$('#a'+i+' .label').append('<br/><a class="jump" href="#t'+i+'">Jump</a>');
			posts.push(tags);
			i++;
		});
};