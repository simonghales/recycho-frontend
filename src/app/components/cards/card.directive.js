export class CardDirective {
  constructor () {
    'ngInject';

    this.restrict = 'E';
    this.templateUrl = 'app/cards/_card.html';
    this.replace = true;
    this.scope = {
      submission: '=',
    };
    this.controller = 'CardController';
    this.controllerAs = 'cardVM';

  }

}
