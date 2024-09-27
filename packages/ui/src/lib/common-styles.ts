export const NoOutlines = [
  'focus:outline-none',
  'focus-within:outline-none',
  'focus-visible:outline-none',
  'active:outline-none',
].join(' ')

export const FocusWithin = [
  NoOutlines,
  'focus-within:ring-2',
  'focus-within:ring-ring',
  'focus-within:ring-offset-2',
  'focus-within:ring-offset-background',
].join(' ')

export const FocusVisible = [
  NoOutlines,
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'focus-visible:ring-offset-background',
].join(' ')

export const StateOpenClose = [
  'data-[state=open]:animate-in',
  'data-[state=open]:fade-in-0',
  'data-[state=open]:zoom-in-95',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
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
