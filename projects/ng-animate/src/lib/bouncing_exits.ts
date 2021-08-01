import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';

export const bounceOut = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
      style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.5
      }),
      style({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.55
      }),
      style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 })
    ])
  ),
  { params: { timing: DEFAULT_TIMING * 0.75, delay: 0, scale: 1.1 } }
);

export function bounceOutY(a: string | number, b: string | number, c: string | number, d: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({ transform: 'translate3d(0, {{ a }}, 0) scaleY(0.985)', offset: 0.2 }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ b }}, 0) scaleY(0.9)',
          offset: 0.4
        }),
        style({
          opacity: 1,
          transform: 'translate3d(0, {{ c }}, 0) scaleY(0.9)',
          offset: 0.45
        }),
        style({
          opacity: 0,
          transform: 'translate3d(0, {{ d }}, 0) scaleY(3)',
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

export function bounceOutX(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, 0, 0) scaleX(0.9)',
          offset: 0.2
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ b }}, 0, 0) scaleX(2)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export const bounceOutDown = bounceOutY('10px', '-20px', '-20px', '2000px');

export const bounceOutUp = bounceOutY('-10px', '20px', '20px', '-2000px');

export const bounceOutLeft = bounceOutX('20px', '-2000px');

export const bounceOutRight = bounceOutX('-20px', '2000px');
