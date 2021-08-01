import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';


export function backOutY(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 0
        }),
        style({
          opacity: 0.7,
          transform: 'translateY({{ a }}) scale(0.7)',
          offset: 0.2
        }),
        style({
          opacity: 0.7,
          transform: 'translateY({{ b }}) scale(0.7)',
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

export function backOutX(a: string | number, b: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 0
        }),
        style({
          opacity: 0.7,
          transform: 'translateX({{ a }}) scale(0.7)',
          offset: 0.2
        }),
        style({
          opacity: 0.7,
          transform: 'translateX({{ b }}) scale(0.7)',
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

export const backOutDown = backOutY('0px', '700px');

export const backOutUp = backOutY('0px', '-700px');

export const backOutLeft = backOutX('0px', '-2000px');

export const backOutRight = backOutX('0px', '2000px');
