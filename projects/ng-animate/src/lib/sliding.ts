import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';


export function slideX(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d({{ a }}, 0, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d({{ b }}, 0, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export function slideY(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          transform: 'translate3d(0, {{ a }}, 0)',
          offset: 0
        }),
        style({
          transform: 'translate3d(0, {{ b }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b } }
  );
}

export const slideInUp = slideY('100%', 0);
export const slideInDown = slideY('-100%', 0);
export const slideInLeft = slideX('-100%', 0);
export const slideInRight = slideX('100%', 0);
export const slideOutUp = slideY(0, '-100%');
export const slideOutDown = slideY(0, '100%');
export const slideOutLeft = slideX(0, '-100%');
export const slideOutRight = slideX(0, '100%');
