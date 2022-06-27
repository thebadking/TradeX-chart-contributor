// state-chart.js

export default
{
  id: "widgets",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(stateMachine, data) {
        console.log('idle: onEnter')
      },
      onExit(stateMachine, data) {
        console.log('idle: onExit')
      },
      on: {
        addIndicator: {
          target: 'addIndicator',
          action: (stateMachine, data) => {
            console.log('transition action for event in "idle" state')
            console.log("close indicator menu")

            stateMachine.context.origin.instances[data.menu].close()
            stateMachine.notify("menuClosed", data)
          },
        },
      }
    },
    addIndicator: {
      onEnter(stateMachine, data) {
        console.log('addIndicator: onEnter')

      },
      onExit(stateMachine, data) {
        console.log('addIndicator: onExit')
      },
      on: {
        menuClosed: {
          target: "idle",
          action: (stateMachine, data) => {
            console.log(`${data} menuClosed: transition to "idle" state`)
          },
        }
      }
    }
  }
}
