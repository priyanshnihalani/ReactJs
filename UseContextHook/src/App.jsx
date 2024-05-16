import { UserContext } from './Context.js'
import './App.css'
import Child from './Child.jsx'

function App() {
  const value = {message: "Hello World"}

  return (
      <UserContext.Provider value={value}>
        <Child />
      </UserContext.Provider>
  )
}

export default App
