import React from 'react'
import { ProviderWrapper } from './redux/provider'
import InputRedux from './project/InputRedux'


const App = () => {
  return (
    <ProviderWrapper>
      <div className="pt-5" >
        <InputRedux />
      </div>
    </ProviderWrapper>
  )
}

export default App
