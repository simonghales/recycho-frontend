
import { register } from './vendors/register.js';

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { CardContentImageDirective } from './components/cards/card.content.image.directive.js';
import { CardContentLinkDirective } from './components/cards/card.content.link.directive.js';
import { CardContentSoundcloudDirective } from './components/cards/card.content.soundcloud.directive.js';
import { CardContentYoutubeDirective } from './components/cards/card.content.youtube.directive.js';
import { CardController } from './components/cards/card.controller.js';
import { CardDirective } from './components/cards/card.directive.js';
import { CardPlaceholderDirective } from './components/cards/card.placeholder.directive.js';

import { CommentController } from './components/comments/comment.controller.js';
import { CommentDirective } from './components/comments/comment.directive.js';

import { DATA_COMMENTS } from './data/data.comments.constant.js';
import { DATA_SUBMISSIONS } from './data/data.submissions.constant.js';

import { BackImgDirective } from './general/general.back.img.directive.js';
import { TrustAsResourceUrl } from './general/general.trust.filter.js';

import { MainController } from './main/main.controller';

import { PostController } from './post/post.controller';

angular.module('recychoFrontend', [

    'recho.general',
    'recho.post',
    'recho.cards',
    'recho.comments',
    'recho.data',

    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'restangular',
    'ui.router',
    'toastr'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock);

register('recychoFrontend.general')
  .controller('MainController', MainController);
