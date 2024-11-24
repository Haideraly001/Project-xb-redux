import { Provider } from "react-redux";
import { store } from './Store'

const ProviderWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderWrapper