import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const bounceIn = animation(
  animate(
    '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    keyframes([
      style({
        opacity: 0,
        transform: 'scale3d(.3, .3, .3)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0
      }),
      style({
        transform: 'scale3d(1.1, 1.1, 1.1)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.2
      }),
      style({
        transform: 'scale3d(.9, .9, .9)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.6
      }),
      style({
        transform: 'scale3d(.97, .97, .97)',
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        offset: 0.8
      }),
      style({
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        offset: 1
      })
    ])
  ),
  { params: { timing: DEFAULT_TIMING * 0.75, delay: 0 } }
);

export function bounceInY(a: string | number, b: string | number, c: string | number, d: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ a }}, 0) scaleY(3)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0) scaleY(0.9)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.6
        }),
        style({
          transform: 'translate3d(0, {{ c }}, 0) scaleY(0.95)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.75
        }),
        style({
          transform: 'translate3d(0, {{ d }}, 0) scaleY(0.985)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.9
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          offset: 1
        })
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b,
        c,
        d
      }
    }
  );
}

export function bounceInX(a: string | number, b: string | number, c: string | number, d: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d({{ a }}, 0, 0) scaleX(3)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d({{ b }}, 0, 0) scaleX(1)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.6
        }),
        style({
          transform: 'translate3d({{ c }}, 0, 0) scaleX(0.98)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.75
        }),
        style({
          transform: 'translate3d({{ d }}, 0, 0) scaleX(0.995)',
          'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.9
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          offset: 1
        })
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b,
        c,
        d
      }
    }
  );
}

export const bounceInDown = bounceInY('-3000px', '25px', '-10px', '5px');

export const bounceInUp = bounceInY('3000px', '-25px', '10px', '-5px');

export const bounceInLeft = bounceInX('-3000px', '25px', '-10px', '5px');

export const bounceInRight = bounceInX('3000px', '-25px', '10px', '-5px');
