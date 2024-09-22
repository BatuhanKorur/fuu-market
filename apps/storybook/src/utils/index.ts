export function defaultMeta(component: any) {
  return {
    title: `UI/${component.name}`,
    component: component,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  }
}
