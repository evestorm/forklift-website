export function debounce(fn, delay = 500, triggerNow = false) {
  let timer = null;
  return function() {
    if (timer) window.clearTimeout(timer);
    if (triggerNow) {
      let exec = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (exec) {
        fn.apply(this, arguments);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  }
}

export function throttle(fn, delay = 500) {
  let canUse = true;
  return function() {
    if (canUse) {
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(() => canUse = true, delay);
    }
  }
}