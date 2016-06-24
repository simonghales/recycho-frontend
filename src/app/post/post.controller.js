const _$log = new WeakMap();
const _$timeout = new WeakMap();
const _DATA_SUBMISSIONS = new WeakMap();
const _DATA_COMMENTS = new WeakMap();

export class PostController {
  constructor ($log, $timeout, DATA_SUBMISSIONS, DATA_COMMENTS) {
    'ngInject';

    // set up params
    _$log.set(this, $log);
    _$timeout.set(this, $timeout);
    _DATA_SUBMISSIONS.set(this, DATA_SUBMISSIONS);
    _DATA_COMMENTS.set(this, DATA_COMMENTS);

    this.data = {
      comments: null,
      submission: null
    };

    this.states = {
      comments: {
        loading: true
      },
      loading: true
    };

    this._activate();

  }

  _activate() {

    _$timeout.get(this)(function() {
      this._loadSubmission();
    }, 300);

    _$timeout.get(this)(function() {
      this._loadComments();
    }, 0);

  }

  _loadComments() {
    this.data.comments = _DATA_COMMENTS.get(this).comments;
    _$log.get(this).debug("comments", this.data.comments);
    this.states.comments.loading = false;
  }

  _loadSubmission() {
    this.data.submission = _DATA_SUBMISSIONS.get(this).submissions[0];
    this.states.loading = false;
  }

}

