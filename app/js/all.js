// CSS3 animated & responsive dropdown menu
// Latest version: https://github.com/catalinred/Animenu

(function(){
  var animenuToggle = document.querySelector('.nav__main-toggle'),
      animenuNav    = document.querySelector('.nav__main-list'),
      hasClass = function( elem, className ) {
        return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
      },
      toggleClass = function( elem, className ) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if( hasClass(elem, className ) ) {
          while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
          }
          elem.className = newClass.replace( /^\s+|\s+$/g, '' );
        } else {
          elem.className += ' ' + className;
        }
      },
      animenuToggleNav =  function (){
        toggleClass(animenuToggle, "nav__main-toggle--active");
        toggleClass(animenuNav, "nav__main-list--open");
      }

  if (!animenuToggle.addEventListener) {
      animenuToggle.attachEvent("onclick", animenuToggleNav);
  }
  else {
      animenuToggle.addEventListener('click', animenuToggleNav);
  }

})()