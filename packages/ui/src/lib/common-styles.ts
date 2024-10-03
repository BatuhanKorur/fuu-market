export const NoOutlines = [
  'focus:outline-none',
  'focus-within:outline-none',
  'focus-visible:outline-none',
  'active:outline-none',
].join(' ')

export const FocusRing = [
  NoOutlines,
  'focus:ring-2',
  'focus:ring-ring',
  'focus:ring-offset-2',
  'focus:ring-offset-background',
].join(' ')

export const FocusRingWithin = [
  NoOutlines,
  'focus-within:ring-2',
  'focus-within:ring-ring',
  'focus-within:ring-offset-2',
  'focus-within:ring-offset-background',
].join(' ')

export const FocusRingVisible = [
  NoOutlines,
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'focus-visible:ring-offset-background',
].join(' ')

export const StateAnimation = [
  'data-[state=open]:animate-in',
  'data-[state=open]:fade-in-0',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
].join(' ')

export const StateAnimationZoom = [
  StateAnimation,
  'data-[state=open]:zoom-in-95',
  'data-[state=closed]:zoom-out-95',
].join(' ')

export const SlideIn = [
  'data-[side=top]:slide-in-from-bottom-2',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=right]:slide-in-from-left-2',
].join(' ')

export const Disabled = [
  'data-[disabled]:pointer-events-none',
  'data-[disabled]:opacity-50',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
].join(' ')

export const DisabledData = [
  'data-[disabled=true]:pointer-events-none',
  'data-[disabled=true]:opacity-50',
].join(' ')
