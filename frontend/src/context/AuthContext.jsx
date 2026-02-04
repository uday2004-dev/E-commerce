// import React, { createContext } from 'react'

// export const authDataContext=createContext()

// const AuthContext = ({children}) => {
// const serverUrl="http://localhost:3000"
//     const value={
// serverUrl
//     }
//   return (

//     <div>
//         <authDataContext.Provider value={authDataContext}>

//             {children}
//         </authDataContext.Provider>
//     </div>
//   )
// }

// export default AuthContext

import React, { createContext } from 'react'

export const authDataContext = createContext()

const AuthContext = ({ children }) => {
  const serverUrl = "http://localhost:3000"

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
