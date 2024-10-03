export const FormInputVariants = {
  base: 'bg-transparent text-foreground flex items-center w-full border rounded',
  variants: {
    size: {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base px-3',
      lg: 'h-12 text-lg',
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
}
