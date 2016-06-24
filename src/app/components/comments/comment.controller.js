const _$log = new WeakMap();

export class CommentController {
  constructor ($log) {
    'ngInject';

    // set up params
    _$log.set(this, $log);
    _$scope.set(this, $scope);

    this.data = {
      points: this.getRandomInt(5,143),
      voteOffset: 0
    }

    this.models = {
      reply: ''
    };

    this.states = {
      downvoted: false,
      replying: false,
      upvoted: false
    };

  }

  // TODO -- move into helper service
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  closeReply() {
    this.states.replying = false;
  }

  openReply() {
    this.states.replying = true;
  }

  toggleDownvote() {
    this.states.upvoted = false;
    this.states.downvoted = !this.states.downvoted;

    if(this.states.downvoted) {
      this.data.voteOffset = -1;
    } else {
      this.data.voteOffset = 0;
    }

  }

  toggleUpvote() {
    this.states.downvoted = false;
    this.states.upvoted = !this.states.upvoted;

    if(this.states.upvoted) {
      this.data.voteOffset = 1;
    } else {
      this.data.voteOffset = 0;
    }

  }

}
