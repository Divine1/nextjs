import dynamic from 'next/dynamic'

const HelloBundle = dynamic({
  modules: () => {
    const components = {
      Hello1: () => import('./OnDemand')
    }

    return components
  },
  render: (props, { Hello1 }) =>
    <div>
      <div>dynamic import 13</div>
      <Hello1 />
    </div>
})

export default HelloBundle;