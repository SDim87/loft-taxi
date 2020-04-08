import React, { Component } from 'react'

// const { Provider, Cosumer } = React.createContext()

// const RenderChildrens = ({ children }) => <>{children}</>

export default class ContextExample extends Component {
  render() {
    return (
      <div>
        {/* <Provider value={{ backgroundColor: 'red' }}>
          <RenderChildrens>
            <Cosumer>
              {({ backgroundColor }) => <button style={backgroundColor}>Buttton</button>}
            </Cosumer>
          </RenderChildrens>
        </Provider> */}
      </div>
    )
  }
}
