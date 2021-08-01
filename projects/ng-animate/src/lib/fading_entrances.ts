import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';


export function fadeInXY(a: string | number, b: string | number, c: string | number, d: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'translate3d({{ a }}, {{ b }}, 0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate3d({{ c }}, {{ d }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b, c, d } }
  );
}

export const fadeIn = fadeInXY(0, 0, 0, 0);
export const fadeInBottomLeft = fadeInXY('-100%', '100%', 0, 0);
export const fadeInBottomRight = fadeInXY('100%', '100%', 0, 0);
export const fadeInDown = fadeInXY(0, '-100%', 0, 0);
export const fadeInDownBig = fadeInXY(0, '-2000px', 0, 0);
export const fadeInLeft = fadeInXY('-100%', 0, 0, 0);
export const fadeInLeftBig = fadeInXY('-2000px', 0, 0, 0);
export const fadeInRight = fadeInXY('100%', 0, 0, 0);
export const fadeInRightBig = fadeInXY('2000px', 0, 0, 0);
export const fadeInTopLeft = fadeInXY('-100%', '-100%', 0, 0);
export const fadeInTopRight = fadeInXY('100%', '-100%', 0, 0);
export const fadeInUp = fadeInXY(0, '100%', 0, 0);
export const fadeInUpBig = fadeInXY(0, '2000px', 0, 0);
