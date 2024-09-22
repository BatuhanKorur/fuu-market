export function setMeta(component: any, variants: any) {
  const opts = Object.entries(variants).map(([key, value]) => {
    return {
      [key]: {
        options: Object.keys(value[0]),
        control: {
          type: value[1],
        },
      },
    }
  })

  return {
    component: component,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      ...opts,
    },
  }
}
