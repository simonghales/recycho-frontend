const _$log = new WeakMap();
const _$scope = new WeakMap();

export class CardController {
  constructor ($log, $scope) {
    'ngInject';

    // set up params
    _$log.set(this, $log);
    _$scope.set(this, $scope);

    this.submission = $scope.submission;

    this.states = {
      less: false,
      more: false,
      starred: false
    };

    this.activate();

  }

  activate() {
  }

  lessLikeThis() {
    if(!this.states.less) {
      this.states.more = false;
    }
    this.states.less = !this.states.less;
  }

  moreLikeThis() {
    if(!this.states.more) {
      this.states.less = false;
    }
    this.states.more = !this.states.more;
  }

  toggleStar() {
    if(this.states.starred) {
      this.submission.starred_count--;
    } else {
      this.submission.starred_count++;

      if(!this.states.less && !this.states.more) {
        this.moreLikeThis();
      }

    }
    this.states.starred = !this.states.starred;
  }

}
