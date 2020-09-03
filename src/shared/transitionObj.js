import classes from '../components/mobileMenu/mobile/mobile.module.css';
import buttonClass from '../components/contents/contents.module.css';

export const opacityToggler={
    enter: classes['mobileMenuToggler-enter'],
    enterActive: classes['mobileMenuToggler-enter-active'],
    enterDone: classes['mobileMenuToggler-enter-done'],
    exit: classes['mobileMenuToggler-exit'],
    exitDone: classes['mobileMenuToggler-exit-done']
  }

  
export const menuToggler={
    enter: classes['mobileMenu-enter'],
    enterActive: classes['mobileMenu-enter-active'],
    enterDone: classes['mobileMenu-enter-done'],
    exit: classes['mobileMenu-exit'],
    exitDone: classes['mobileMenu-exit-done']
  }

export const buttonChanger={
  enter: buttonClass['buttonToggle-enter'],
  enterActive: buttonClass['buttonToggle-enter-active'],
  enterDone: buttonClass['buttonToggle-enter-done'],
  exit: buttonClass['buttonToggle-exit'],
  exitDone: buttonClass['buttonToggle-exit-done']
  }

export const slider = {
  enter: buttonClass['slide-enter'],
  enterActive: buttonClass['slide-enter-active'],
  enterDone: buttonClass['slide-enter-done'],
  exit: buttonClass['slide-exit'],
  exitDone: buttonClass['slide-exit-done']
}