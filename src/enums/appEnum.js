export const routerTransitionEnum = Object.freeze({
  zoomFade: 'zoom-fade',
  zoomOut: 'zoom-out',
  fadeSlide: 'fade-slide',
  fade: 'fade',
  fadeBottom: 'fade-bottom',
  fadeScale: 'fade-scale'
});

export const elementSizeEnum = Object.freeze({
  large: 'large',
  medium: 'medium',
  small: 'small',
  mini: 'mini',
});

export const routerTransitionOptions = Object.values(routerTransitionEnum).map(item => {
  return {label: item, value: item};
})

export const elementSizeOptions = Object.values(elementSizeEnum).map(item => {
  return {label: item, value: item};
})