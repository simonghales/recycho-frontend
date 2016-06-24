export class CardPlaceholderDirective {
  constructor () {
    'ngInject';

    this.restrict = 'E';
    this.templateUrl = 'app/cards/_card.placeholder.html';
    this.replace = true;
    this.scope = false;

  }

}
