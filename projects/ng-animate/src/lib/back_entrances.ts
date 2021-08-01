import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';


export function backInY(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0.7,
          transform: 'translateY({{ a }}) scale(0.7)',
          offset: 0
        }),
        style({
          opacity: 0.7,
          transform: 'translateY({{ b }}) scale(0.7)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b
      }
    }
  );
}

export function backInX(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0.7,
          transform: 'translateX({{ a }}) scale(0.7)',
          offset: 0
        }),
        style({
          opacity: 0.7,
          transform: 'translateX({{ b }}) scale(0.7)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })
      ])
    ),
    {
      params: {
        timing: DEFAULT_TIMING,
        delay: 0,
        a,
        b
      }
    }
  );
}

export const backInDown = backInY('-1200px', '0px');

export const backInUp = backInY('1200px', '0px');

export const backInLeft = backInX('-2000px', '0px');

export const backInRight = backInX('2000px', '0px');
