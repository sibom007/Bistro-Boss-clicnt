import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/Firebase";





const auth = getAuth(app);

export const MyAuthcontext = createContext(null)




const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    const googleprovider = new GoogleAuthProvider();



    const createuser = (password, email) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, password, email)
      }



    const Login = (password, email) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, password, email)
      }

      const Logout = () => {
        setloading(true)
        return signOut(auth)
      }

      const googlesignin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
      }
      const Updateprofil = (name,photo) => {
        setloading(true)
        return updateProfile(auth.currentUser,{
          photoURL:photo,
          displayName:name
        })
      }

     

    

      useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)
            console.log('current User', currentUser);
            setloading(false)
        })
          
          return () => {
            return unsubscribe()
          }

      },[])
        
     




    const authinfo = {
        user,
        createuser,
        googlesignin,
        Logout,
        Login,
        loading,
        Updateprofil
        
    }

    return (
        <div>
           <MyAuthcontext.Provider value={authinfo}>
            {children}
           </MyAuthcontext.Provider>

        </div>
    );
};

export default Authprovider;