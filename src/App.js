import React from 'react'
import ReduxeInput1 from './project/ReduxeInput1'
import ProviderWrapper from './Redux/Provider'

const App = () => {
  return (
    <div>
      <ProviderWrapper>
        <ReduxeInput1 />
      </ProviderWrapper>
    </div>
  )
}

export default App
