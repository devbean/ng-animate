import { animate, animation, keyframes, style, } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const bounce = animation(
  [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(
      '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.61, 0.355, 1)',
      keyframes([
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          transform: 'translate3d(0, 0, 0)',
          'transform-origin': 'center bottom',
          offset: 0
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          transform: 'translate3d(0, 0, 0)',
          offset: 0.2
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
          offset: 0.4
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
          offset: 0.43
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          transform: 'translate3d(0, 0, 0)',
          offset: 0.53
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
          offset: 0.7
        }),
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          transform: 'translate3d(0, 0, 0) scaleY(0.95)',
          offset: 0.8
        }),
        style({ transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
      ])
    ),
  ],
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const flash = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const pulse = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-in-out',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)' }),
      style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
      style({ transform: 'scale3d(1, 1, 1)' }),
    ])
  ),
  { params: { scale: 1.05, timing: DEFAULT_TIMING, delay: 0 } }
);

export const rubberBand = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
      style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
      style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
      style({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
      style({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const shake = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
      style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
      style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);
export const shakeX = shake;

export const shakeY = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.1 }),
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.3 }),
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.4 }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.5 }),
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.6 }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.7 }),
      style({ transform: 'translate3d(0, 10px, 0)', offset: 0.8 }),
      style({ transform: 'translate3d(0, -10px, 0)', offset: 0.9 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const swing = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ 'transform-origin': 'top center', offset: 0 }),
      style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const tada = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1,
      }),
      style({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8,
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9,
      }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const wobble = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
      style({
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        offset: 0.15,
      }),
      style({
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
      }),
      style({
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45,
      }),
      style({
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6,
      }),
      style({
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75,
      }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const jello = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', 'transform-origin': 'center', offset: 0 }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 0.11 }),
      style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 }),
      style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 }),
      style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 }),
      style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 }),
      style({
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        offset: 0.66,
      }),
      style({
        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        offset: 0.77,
      }),
      style({
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        offset: 0.88,
      }),
      style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const headShake = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-in-out',
    keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
      style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
      style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
      style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
      style({ transform: 'translateX(0)', offset: 0.5 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING, delay: 0 } }
);

export const heartBeat = animation(
  animate(
    '{{ timing }}s {{ delay }}s ease-in-out',
    keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale(1.3)', offset: 0.14 }),
      style({ transform: 'scale(1)', offset: 0.28 }),
      style({ transform: 'scale(1.3)', offset: 0.42 }),
      style({ transform: 'scale(1)', offset: 0.7 }),
    ])
  ),
  { params: { timing: DEFAULT_TIMING * 1.3, delay: 0 } }
);
