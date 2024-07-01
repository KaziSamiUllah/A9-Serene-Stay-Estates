import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Auth/firebase.config";


export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] =useState(true)
    const auth = getAuth(app);
    console.log(user)
/////////////////////////Auth with Email & Password /////////////////////////////////////

    //// Sign UP////
    const SignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In/Log in///
    const SingIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out/ Log Out////
    const SignOut = () => {
        setLoading(true);
        return SignOut(auth)
    }


    // Update Profile///
    const editProfile = (name, photo) => {
        // console.log(name, photo);

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };
    
////////////////////////////////Auth With Google/////////////////////////////////
const provider = new GoogleAuthProvider();

const googleAuth =() =>{
    setLoading(true);
    signInWithPopup(auth, provider)
   
}


    // Github Sign In//
    const GitProvider = new GithubAuthProvider();

    const GithubSignIn = () =>{
        setLoading(true);
        signInWithPopup(auth, GitProvider)
      
    }




//  user State (Logged in or not)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
           
        })
        return () => {
            //CleanUP
            unSubscribe(); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


   const [cartsItems, setCartitems] = useState([]);
    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('Cart'));
        storedCart && setCartitems(storedCart)
    }, []);

    const addItem =(itemID) =>{
        const updateCart = [...cartsItems, itemID];
        setCartitems(updateCart)
        localStorage.setItem('Cart', JSON.stringify(updateCart))
    }








    const authInfo = { user, SignUp, SingIn, SignOut, editProfile, loading, googleAuth, GithubSignIn, addItem, cartsItems}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;