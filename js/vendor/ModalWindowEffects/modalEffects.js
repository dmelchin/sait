/// <reference path="jquery-3.1.1.js" />
/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

$(document).ready(function() {

    var ModalEffects = (function() {

        function init() {

            [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

                var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                    close = modal.querySelector( '.md-close' );

                function removeModal( hasPerspective ) {
                    classie.remove( modal, 'md-show' );

                    if( hasPerspective ) {
                        classie.remove( document.documentElement, 'md-perspective' );
                    }
                }

                function removeModalHandler() {
                    removeModal(classie.has(el, 'md-setperspective'));

                    // the modal dialog has been removed so remove the overlay
                    $('.md-overlay').remove();

                }

               

                el.addEventListener( 'click', function( ev ) {
                    classie.add( modal, 'md-show' );

                    // add an overlay that covers the entire screen so that
                    // when it's clicked on, remove the modal box
                    $('body').append('<div class="md-overlay"></div>');

                    var overlay = $('.md-overlay');

                    overlay.on('click', removeModalHandler);
                    
                    if( classie.has( el, 'md-setperspective' ) ) {
                        setTimeout( function() {
                            classie.add( document.documentElement, 'md-perspective' );
                        }, 25 );
                    }
                });

                close.addEventListener( 'click', function( ev ) {
                    ev.stopPropagation();
                    removeModalHandler();
                });

            } );

        }

        init();

    })();
});