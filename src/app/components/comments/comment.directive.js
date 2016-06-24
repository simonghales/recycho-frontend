const _RecursionHelper = new WeakMap();
export class CommentDirective {
  constructor (RecursionHelper) {
    'ngInject';

    // set up params
    _RecursionHelper.set(this, RecursionHelper);

    this.restrict = 'E';
    this.templateUrl = 'app/comments/_comment.html';
    this.replace = true;
    //this.scope = false;
    this.controller = 'CommentController';
    this.controllerAs = 'commentVM';

  }

  compile(element) {
    // Use the compile function from the RecursionHelper,
    // And return the linking function(s) which it returns
    return _RecursionHelper.get(this).compile(element);
  }

}
