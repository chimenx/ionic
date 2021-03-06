import { Animation } from '../../../index';

/**
 * iOS Action Sheet Leave Animation
 */
export default function iosLeaveAnimation(Animation: Animation, baseEl: HTMLElement): Promise<Animation> {
  const baseAnimation = new Animation();

  const backdropAnimation = new Animation();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));

  const wrapperAnimation = new Animation();
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));

  backdropAnimation.fromTo('opacity', 0.4, 0);

  wrapperAnimation.fromTo('translateY', '0%', '100%');

  const ani = baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(450)
    .add(backdropAnimation)
    .add(wrapperAnimation);

  return Promise.resolve(ani);
}
