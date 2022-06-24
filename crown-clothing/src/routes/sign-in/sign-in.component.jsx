import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'

const SignIn = () => {
    const letGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={letGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    )
}

export default SignIn