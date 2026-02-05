import { createContext } from "react";



export const userDataContext = createContext()
function UserContext({ children }) {

    let value={

    }
    return (
        <>
            <userDataContext.Provider value={value}>
                {children}

            </userDataContext.Provider>
        </>
    )
}

export default UserContext