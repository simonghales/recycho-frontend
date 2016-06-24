export class BackImgDirective {
  constructor () {
    'ngInject';
  }

  link(scope, element, attrs) {

    attrs.$observe('backImg', function () {
      setBackImg();
    });

    function setBackImg() {
      var url = attrs.backImg;

      if (url) {
        element.css({
          'background-image': 'url(' + url + ')'
        });
        element.removeClass("m--noImage").addClass("m--providedImage");
      } else {
        element.removeClass("m--providedImage").addClass("m--noImage");
      }

    };

    setBackImg();

  }

}

