import { animate, animation, keyframes, style } from '@angular/animations';
import { DEFAULT_TIMING } from './utils';


export function fadeOutXY(a: string | number, b: string | number, c: string | number, d: string | number) {
  return animation(
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          transform: 'translate3d({{ a }}, {{ b }}, 0)',
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'translate3d({{ c }}, {{ d }}, 0)',
          offset: 1
        })
      ])
    ),
    { params: { timing: DEFAULT_TIMING, delay: 0, a, b, c, d } }
  );
}

export const fadeOut = fadeOutXY(0, 0, 0, 0);
export const fadeOutBottomLeft = fadeOutXY(0, 0, '-100%', '100%');
export const fadeOutBottomRight = fadeOutXY(0, 0, '100%', '100%');
export const fadeOutDown = fadeOutXY(0, 0, '100%', 0);
export const fadeOutDownBig = fadeOutXY(0, 0, '2000px', 0);
export const fadeOutLeft = fadeOutXY(0, 0, '-100%', 0);
export const fadeOutLeftBig = fadeOutXY(0, 0, '-2000px', 0);
export const fadeOutRight = fadeOutXY(0, 0, '100%', 0);
export const fadeOutRightBig = fadeOutXY(0, 0, '2000px', 0);
export const fadeOutTopLeft = fadeOutXY(0, 0, '-100%', '-100%');
export const fadeOutTopRight = fadeOutXY(0, 0, '100%', '-100%');
export const fadeOutUp = fadeOutXY(0, 0, 0, '-100%');
export const fadeOutUpBig = fadeOutXY(0, 0, 0, '-2000px');
