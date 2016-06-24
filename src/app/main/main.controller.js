const _$log = new WeakMap();
const _$timeout = new WeakMap();
const _DATA_SUBMISSIONS = new WeakMap();

export class MainController {
  constructor ($log, $timeout, DATA_SUBMISSIONS) {
    'ngInject';

    // set up params
    _$log.set(this, $log);
    _$timeout.set(this, $timeout);
    _DATA_SUBMISSIONS.set(this, DATA_SUBMISSIONS);

    this.data = {
      submissions: null
    };

    this.states = {
      loading: true
    };

    this._activate();

  }

  _activate() {

    _$timeout.get(this)(function() {
      this._loadFeed();
    }, 1800);

  }

  _loadFeed() {
    this.data.submissions = _DATA_SUBMISSIONS.get(this).submissions;
    this.states.loading = false;
  }

}
