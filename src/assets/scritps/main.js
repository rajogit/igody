class drimago {

	constructor() {
		this.orangeColor = '#ef4315';
		this.grayColor = '#a8a8a8';
	}

	inputFocus() {
		let _this = this;
		$('.form-newsletter input[type="email"]').each( function() {
			let _that = $(this);
			_that.on('focus', () => {
				_that.parent().css('border-color', _this.orangeColor);
			});
			_that.on('blur', () => {
				_that.parent().css('border-color', _this.grayColor);
			});
		});
	}

	dropdownHover() {
		$('.account-content').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
		}, function() {
			if($(this).find('input').is(':focus')) {
				return false;
			} else {
				$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
			}
		});
		$('.dropHover').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
		}, function() {
			if($(this).find('input').is(':focus')) {
				return false;
			} else {
				$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
			}
		});
	}

	bannerHeight() {
		$('.banner-image').height($('.wrapper-subscription .subscription-block').outerHeight());
	}

	headerScroll() {
		//$('.header').headroom();
		$('.header').scrollToFixed();
	}

	customSelect() {
		$('.selecter').removeClass('form-control');
		$('.selecter').fsDropdown({
			customClass: 'selecter'
		});
		$('.other-country').each(function() {
			$(this).on('click', (e)=> {
				e.preventDefault();
				if($('.country-selecter').is(':disabled')) {
					$(this).parent().siblings().find('.country-selecter').fsDropdown("enable");
				}
			});
		});
		$('.drop-check .drop-label').each(function() {
			$(this).on('click', (e)=> {
				$(this).toggleClass('on').parent('.drop-check').toggleClass('open');
				$(this).next().slideToggle('fast');
			})
		});

		$('.left-side .nav a .icon-arrow-right').each(function() {
			$('a').on('click', (e)=> {
				e.stopPropagation();
			});
			$(this).on('click', (e)=> {
				e.preventDefault();
				$('.left-side .nav').find('ul.active').removeClass('active');
				if($(this).parent('a').parent('li').hasClass( "active" )){
					$(this).parent('a').parent('li').removeClass('active').find('ul').slideUp(300);
				}
				else {
					$(this).parent('a').parent('li').addClass('active').find('ul').slideDown(300);
				}
				$(this).parent('a').parent('li').siblings().removeClass('active').find('ul').slideUp(300);
			})
		});

	}

	tooltipInit() {
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		});
	}

	collapseBlock() {
		$('#autre-livraison').on('change', function() {
			if($(this).is(':checked')) {
				$('.other-shipping-address').slideDown('fast');
			} else {
				$('.other-shipping-address').slideUp('fast');
			}
		})

		$('#tiers-check').on('change', function() {
			if($(this).is(':checked')) {
				$('.tiers-content').slideDown('fast');
			} else {
				$('.tiers-content').slideUp('fast');
			}
		})		
	}

	inputIncrement() {
		$( '.spinner' ).each( function () {
			var _that = $( this );
			$( this ).find( '.btn:first-of-type' ).on( 'click', function () {
				var $nb_bimedia = parseInt( $( '.bimedia' ).val() );
				var $nb_numeric = parseInt( $( '.numeric' ).val() );
				var $total = $nb_bimedia + $nb_numeric;

				if ( $total < 20 ) {
					_that.find( '.form-control' ).val( parseInt( _that.find( '.form-control' ).val(), 10 ) + 1 );
				}
			});
			$( this ).find( '.btn.btn-bimedia:last-of-type' ).on( 'click', function () {
				if ( _that.find( '.form-control' ).val() > 1 ) {
					_that.find( '.form-control' ).val( parseInt( _that.find( '.form-control' ).val(), 10 ) - 1 );
				}
			});
			$( this ).find( '.btn.btn-numeric:last-of-type' ).on( 'click', function () {
				if ( _that.find( '.form-control' ).val() > 0 ) {
					_that.find( '.form-control' ).val( parseInt( _that.find( '.form-control' ).val(), 10 ) - 1 );
				}
			});
		});
	}

	customTab() {
		$(document).on('click','.paiement-tab .nav-tabs a', function() {
			$(this).find('input[type=radio]').prop('checked', true);
		});
		$(document).on('click','.contact-tab .nav-tabs a', function() {
			$(this).find('input[type=radio]').prop('checked', true);
		});
	}

	aboCollapse() {
		$('.block-list .btn-detail').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				$(this).parents('.block-list').siblings('.block-list-content').slideToggle();
			})
		})
	}

	toggleConnexionBox() {
		$('.user-info .btn-login').on('click', function(e) {
			e.preventDefault();
			let _that = $(this);
			$('.connexion-box').toggle('fast', function() {
				_that.toggleClass('hide');
			});
			$('.inscription-box').toggle('fast', function() {
				$('.user-info .btn-register').toggleClass('show');
			});
		});
		$('.user-info .btn-register').on('click', function(e) {
			e.preventDefault();
			let _that = $(this);
			$('.connexion-box').toggle('fast', function() {
				$('.user-info .btn-login').toggleClass('hide');
			});
			$('.inscription-box').toggle('fast', function() {
				_that.toggleClass('show');
			});
		});
	}

	addUserPopup() {
		$('.btn-add-user').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('#addUserModal').modal('show')
			});
		});
	}

	sidenav() {
		var ulElm = $('<ul></ul>');
		if($('.main-header-content .resume').length > 0) {
			var liEl = $('<li>resume</li>');
			ulElm.append(liEl);
			liEl.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: $('.resume').offset().top - $('.header-other').outerHeight() }, 1000);
			})
		}
		var sidenavContainer = $('.article-sidebar .sidenav');
		$('.active-sidenav .article-wysi').find('h2').each(function() {
			var _that = $(this);
			var liElm = $('<li>' + $(this).text() + '</li>');
			ulElm.append(liElm);
			liElm.on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({ scrollTop: _that.offset().top - $('.header-other').outerHeight() }, 1000);
			})
		});
		$('.main-sidenav').prepend(ulElm);
	} 

	navMenu() {
		$('.wrapper-icon-hamburger .dropdown-menu').height($(window).height() - ($('.header-other').outerHeight() - $('.secondary-nav').height() + 1));
		let rightSearch;
		if($('.header-search-block').length){
			if($(window).width() >= 1024) {
				rightSearch = $(window).width() - $('.header-search-block').offset().left - 20 + 'px';
			} else {
				rightSearch = $(window).width() - $('.header-search-block').offset().left + 10 + 'px';
			}
			$('.search-form-header').css({
				'right': rightSearch
			});

			$('.hamburger-wrapper').on('show.bs.dropdown', function(event) {
				$(event.relatedTarget).find('span').text('Fermer');
			});
			$('.hamburger-wrapper').on('hidden.bs.dropdown', function(event) {
				$(event.relatedTarget).find('span').text('Menu');
			});

			$('.search-form-header .dropdown-menu li').each(function() {
				$(this).on('click', function() {
					$('#posttype').val($(this).data('posttype'));
					$('.btn-posttype span').text($(this).text());
				});
			});
			$('.header-search-block .search-btn').on('click', function(e) {
				e.preventDefault();
				if($('.header-search-block').hasClass('on')) {
					$('.search-form-header').hide('fast');
					$('.header-search-block').removeClass('on');
				} else {
					$('.search-form-header').show('fast');
					$('.header-search-block').addClass('on');
				}
			})
		}
	}

	slideAdvert(arg) {
		$('.slide-advert').slick(arg);
	}

	advertTab() {
		$('.latest-advert .nav li a').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				($(this).parent('li').attr('data-value') == 0) ? $(this).parent('li').toggleClass('on').attr('data-value', 1) : $(this).parent('li').toggleClass('on').attr('data-value', 0);
			});
		});
	}

	searchBlockMobile() {
		$('.btn-plus').on('click', function(e) {
			e.preventDefault();
			$(this).next().slideToggle('fast');
		});
	}	

	datepicker(args) {
		$('.datepicker').datetimepicker(args);
	}

	dropHam() {
		$('.dropdown-menu .dropHam .dropHam-trigger').each(function() {
			var _that = $(this);
			_that.on('click', function(e) {
				e.preventDefault(); 
				e.stopPropagation();
				console.log('you click me');
				if($(this).parents('.dropHam').hasClass('open')) {
					$(this).parents('.dropHam').removeClass('open');
					$(this).parents('.dropHam').find('.menu-drop-content').hide('fast');
					$(this).removeClass('rotateup');
				} else {
					$(this).parents('.dropHam').addClass('open');
					$(this).parents('.dropHam').find('.menu-drop-content').show('fast');
					$(this).addClass('rotateup');
				}
			});
		});
	}

	hmatch_bloc() {
		$(function() {
			$('.hmatch-item').matchHeight();
		});
		$(function() {
			$('.hmatch-item2').matchHeight();
		});
		$(function() {
			$('.hmatch-item3').matchHeight();
		});
	}

	corner_popup() {
    $(document).scroll(function() {
      var scroll = $(this).scrollTop();
      if (scroll >= 150) {
        $("#CPpopUp").css("margin-left", "-425px");
        $("#CPplus").css("margin-left", "-25px");
      }
    });

    $("#CPplus").click(function() {
      $("#CPpopUp").css("margin-left", "0");
      $("#CPplus").css("margin-left", "-425px");
    });

    $("#CPclose").click(function() {
      $("#CPpopUp").css("margin-left", "-425px");
      $("#CPplus").css("margin-left", "-25px");
    });
	}
}

(function($) {
	let imago = new drimago();
	imago.headerScroll();
	imago.tooltipInit();
	imago.toggleConnexionBox();
	if($('.banner-image').length > 0 && $(window).width() >= 1200) {
		imago.bannerHeight();
	}
	$(window).resize(function() {
		if($('.banner-image').length > 0 && $(window).width() >= 1200) {
			imago.bannerHeight();
		}
	});

	imago.inputFocus();
	imago.inputIncrement();
	imago.dropdownHover();
	imago.customSelect();
	imago.collapseBlock();
	imago.customTab();
	imago.aboCollapse();
	imago.addUserPopup();
	imago.sidenav();
	imago.slideAdvert({
		arrows: false,
		dots: true
	});
	imago.advertTab();
	imago.searchBlockMobile();
	imago.dropHam();
	imago.navMenu();
	imago.datepicker({
		format: 'DD/MM/YYYY'
	});
	imago.hmatch_bloc();
	imago.corner_popup();
}(jQuery));
