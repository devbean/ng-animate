import { Component, ViewEncapsulation } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import {
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,
  bounce,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInBottomLeft,
  fadeInBottomRight,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInTopLeft,
  fadeInTopRight,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutBottomLeft,
  fadeOutBottomRight,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutTopLeft,
  fadeOutTopRight,
  fadeOutUp,
  fadeOutUpBig,
  flash,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  headShake,
  heartBeat,
  hinge,
  jackInTheBox,
  jello,
  lightSpeedIn,
  lightSpeedOut,
  pulse,
  rollIn,
  rollOut,
  rotateIn,
  rotateInDownLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownRight,
  rotateOutUpLeft,
  rubberBand,
  shakeX,
  shakeY,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
  swing,
  tada,
  wobble,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomOut,
  zoomOutRight,
  zoomOutUp
} from 'ng-animate';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('flash', [transition('* => *', useAnimation(flash))]),
    trigger('headShake', [transition('* => *', useAnimation(headShake))]),
    trigger('heartBeat', [transition('* => *', useAnimation(heartBeat))]),
    trigger('jello', [transition('* => *', useAnimation(jello))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))]),
    trigger('shakeX', [transition('* => *', useAnimation(shakeX))]),
    trigger('shakeY', [transition('* => *', useAnimation(shakeY))]),
    trigger('swing', [transition('* => *', useAnimation(swing))]),
    trigger('tada', [transition('* => *', useAnimation(tada))]),
    trigger('wobble', [transition('* => *', useAnimation(wobble))]),

    trigger('backInDown', [transition('* => *', useAnimation(backInDown))]),
    trigger('backInLeft', [transition('* => *', useAnimation(backInLeft))]),
    trigger('backInUp', [transition('* => *', useAnimation(backInUp))]),
    trigger('backInRight', [transition('* => *', useAnimation(backInRight))]),

    trigger('backOutDown', [transition('* => *', useAnimation(backOutDown))]),
    trigger('backOutLeft', [transition('* => *', useAnimation(backOutLeft))]),
    trigger('backOutUp', [transition('* => *', useAnimation(backOutUp))]),
    trigger('backOutRight', [transition('* => *', useAnimation(backOutRight))]),

    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),

    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
    trigger('bounceOutLeft', [transition('* => *', useAnimation(bounceOutLeft))]),
    trigger('bounceOutRight', [transition('* => *', useAnimation(bounceOutRight))]),
    trigger('bounceOutUp', [transition('* => *', useAnimation(bounceOutUp))]),
    trigger('bounceOutDown', [transition('* => *', useAnimation(bounceOutDown))]),

    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('fadeInDownBig', [transition('* => *', useAnimation(fadeInDownBig))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('fadeInLeftBig', [transition('* => *', useAnimation(fadeInLeftBig))]),
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))]),
    trigger('fadeInRightBig', [transition('* => *', useAnimation(fadeInRightBig))]),
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp))]),
    trigger('fadeInUpBig', [transition('* => *', useAnimation(fadeInUpBig))]),
    trigger('fadeInTopLeft', [transition('* => *', useAnimation(fadeInTopLeft))]),
    trigger('fadeInTopRight', [transition('* => *', useAnimation(fadeInTopRight))]),
    trigger('fadeInBottomLeft', [transition('* => *', useAnimation(fadeInBottomLeft))]),
    trigger('fadeInBottomRight', [transition('* => *', useAnimation(fadeInBottomRight))]),

    trigger('fadeOut', [transition('* => *', useAnimation(fadeOut))]),
    trigger('fadeOutDown', [transition('* => *', useAnimation(fadeOutDown))]),
    trigger('fadeOutDownBig', [transition('* => *', useAnimation(fadeOutDownBig))]),
    trigger('fadeOutLeft', [transition('* => *', useAnimation(fadeOutLeft))]),
    trigger('fadeOutLeftBig', [transition('* => *', useAnimation(fadeOutLeftBig))]),
    trigger('fadeOutRight', [transition('* => *', useAnimation(fadeOutRight))]),
    trigger('fadeOutRightBig', [transition('* => *', useAnimation(fadeOutRightBig))]),
    trigger('fadeOutUp', [transition('* => *', useAnimation(fadeOutUp))]),
    trigger('fadeOutUpBig', [transition('* => *', useAnimation(fadeOutUpBig))]),
    trigger('fadeOutTopLeft', [transition('* => *', useAnimation(fadeOutTopLeft))]),
    trigger('fadeOutTopRight', [transition('* => *', useAnimation(fadeOutTopRight))]),
    trigger('fadeOutBottomLeft', [transition('* => *', useAnimation(fadeOutBottomLeft))]),
    trigger('fadeOutBottomRight', [transition('* => *', useAnimation(fadeOutBottomRight))]),

    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
    trigger('slideInUp', [transition('* => *', useAnimation(slideInUp))]),

    trigger('slideOutDown', [transition('* => *', useAnimation(slideOutDown))]),
    trigger('slideOutLeft', [transition('* => *', useAnimation(slideOutLeft))]),
    trigger('slideOutUp', [transition('* => *', useAnimation(slideOutUp))]),
    trigger('slideOutRight', [transition('* => *', useAnimation(slideOutRight))]),

    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),
    trigger('flipInY', [transition('* => *', useAnimation(flipInY))]),
    trigger('flipOutX', [transition('* => *', useAnimation(flipOutX))]),
    trigger('flipOutY', [transition('* => *', useAnimation(flipOutY))]),

    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    trigger('lightSpeedOut', [
      transition('* => *', useAnimation(lightSpeedOut))
    ]),

    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn))]),
    trigger('rotateInDownLeft', [
      transition('* => *', useAnimation(rotateInDownLeft))
    ]),
    trigger('rotateInUpRight', [
      transition('* => *', useAnimation(rotateInUpRight))
    ]),
    trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))]),
    trigger('rotateOutUpLeft', [
      transition('* => *', useAnimation(rotateOutUpLeft))
    ]),
    trigger('rotateOutDownRight', [
      transition('* => *', useAnimation(rotateOutDownRight))
    ]),

    trigger('hinge', [transition('* => *', useAnimation(hinge))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))]),
    trigger('rollOut', [transition('* => *', useAnimation(rollOut))]),

    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('zoomInLeft', [transition('* => *', useAnimation(zoomInLeft))]),
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))]),
    trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]),
    trigger('zoomOutUp', [transition('* => *', useAnimation(zoomOutUp))]),
    trigger('zoomOutRight', [transition('* => *', useAnimation(zoomOutRight))])
  ]
})
export class AppComponent {
  bounce = false;
  flash = false;
  pulse = false;
  rubberBand = false;
  shakeX = false;
  shakeY = false;
  headShake = false;
  swing = false;
  tada = false;
  wobble = false;
  jello = false;
  heartBeat = false;

  attentionSeekers = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat'
  ];

  // ==================

  backInDown = false;
  backInLeft = false;
  backInRight = false;
  backInUp = false;

  backEntrances = [
    'backInDown',
    'backInLeft',
    'backInRight',
    'backInUp',
  ];

  // ==================

  backOutDown = false;
  backOutLeft = false;
  backOutRight = false;
  backOutUp = false;

  backExits = [
    'backOutDown',
    'backOutLeft',
    'backOutRight',
    'backOutUp'
  ];

  // ==================

  bounceIn = false;
  bounceInDown = false;
  bounceInLeft = false;
  bounceInRight = false;
  bounceInUp = false;

  bouncingEntrances = [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp'
  ];

  // ==================

  bounceOut = false;
  bounceOutDown = false;
  bounceOutLeft = false;
  bounceOutRight = false;
  bounceOutUp = false;

  bouncingExits = [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
  ];

  // ==================

  fadeIn = false;
  fadeInDown = false;
  fadeInDownBig = false;
  fadeInLeft = false;
  fadeInLeftBig = false;
  fadeInRight = false;
  fadeInRightBig = false;
  fadeInUp = false;
  fadeInUpBig = false;
  fadeInTopLeft = false;
  fadeInTopRight = false;
  fadeInBottomLeft = false;
  fadeInBottomRight = false;

  fadingEntrances = [
    'fadeIn',
    'fadeInDown',
    'fadeInDownBig',
    'fadeInLeft',
    'fadeInLeftBig',
    'fadeInRight',
    'fadeInRightBig',
    'fadeInUp',
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
  ];

  // ==================

  fadeOut = false;
  fadeOutDown = false;
  fadeOutDownBig = false;
  fadeOutLeft = false;
  fadeOutLeftBig = false;
  fadeOutRight = false;
  fadeOutRightBig = false;
  fadeOutUp = false;
  fadeOutUpBig = false;
  fadeOutTopLeft = false;
  fadeOutTopRight = false;
  fadeOutBottomLeft = false;
  fadeOutBottomRight = false;

  fadingExits = [
    'fadeOut',
    'fadeOutDown',
    'fadeOutDownBig',
    'fadeOutLeft',
    'fadeOutLeftBig',
    'fadeOutRight',
    'fadeOutRightBig',
    'fadeOutUp',
    'fadeOutUpBig',
    'fadeOutTopLeft',
    'fadeOutTopRight',
    'fadeOutBottomLeft',
    'fadeOutBottomRight',
  ];

  // ==================

  slideInDown = false;
  slideInLeft = false;
  slideInRight = false;
  slideInUp = false;

  slidingEntrances = [
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',
  ];

  // ==================

  slideOutDown = false;
  slideOutLeft = false;
  slideOutRight = false;
  slideOutUp = false;

  slidingExits = [
    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',
  ];

  // ==================

  flip = false;
  flipInX = false;
  flipInY = false;
  flipOutX = false;
  flipOutY = false;

  flippers = ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'];

  // ==================

  lightSpeedIn = false;
  lightSpeedOut = false;

  lightSpeed = ['lightSpeedIn', 'lightSpeedOut'];

  // ==================

  rotateIn = false;
  rotateInDownLeft = false;
  rotateInUpRight = false;
  rotateOut = false;
  rotateOutUpLeft = false;
  rotateOutDownRight = false;

  rotate = [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutUpLeft',
    'rotateOutDownRight'
  ];

  // ==================

  hinge = false;
  jackInTheBox = false;
  rollIn = false;
  rollOut = false;

  specials = ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'];

  // ==================

  zoomIn = false;
  zoomInDown = false;
  zoomInLeft = false;
  zoomOut = false;
  zoomOutUp = false;
  zoomOutRight = false;

  zooming = [
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomOut',
    'zoomOutUp',
    'zoomOutRight'
  ];

  animate(name: string): void {
    (this as any)[name] = !(this as any)[name];
  }
}
