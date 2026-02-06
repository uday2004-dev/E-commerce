// import { createContext, useContext, useEffect, useState } from "react";
// import { authDataContext } from "./AuthContext";
// import axios from "axios";
// // import { withCredential } from "firebase/auth";
// let { serverUrl } = useContext(authDataContext)




// export const userDataContext = createContext()
// function UserContext({ children }) {

//     const [userData, setUserData] = useState("")
//     let { severUrl } = useContext(authDataContext)

//     const getCurrentUser = async () => {
//         try {
//             let result = await axios.post(severUrl + "/api/user/getCurrentUser", 
//                 { withCredential: true })
//             setUserData(result.data)
//             console.log(result.data)
//         } catch (err) {
//             setUserData(null)
//             console.log(err)
//         }

//     }


//     useEffect(() => {
//         getCurrentUser()
//     }, [])

//     let value = {
//         userData, setUserData, getCurrentUser
//     }




//     return (
//         <>
//             <userDataContext.Provider value={value}>
//                 {children}

//             </userDataContext.Provider>
//         </>
//     )
// }

// export default UserContext


import { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const userDataContext = createContext();

function UserContext({ children }) {

    const [userData, setUserData] = useState(null);

    // ✅ hook INSIDE component
    const { serverUrl } = useContext(authDataContext);

    const getCurrentUser = async () => {
        try {
            const result = await axios.post(
                serverUrl + "/api/user/getCurrentUser",
                {},
                { withCredentials: true }
            );

            setUserData(result.data);
            console.log(result.data);
        } catch (err) {
            setUserData(null);
            console.log(err);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <userDataContext.Provider value={{ userData, setUserData, getCurrentUser }}>
            {children}
        </userDataContext.Provider>
    );
}

export default UserContext;
