import { 
signInWithGooglePopup,
createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util'

import SignUpForm from '../../components/sign-up/sign-up.component'

const SignIn = () => {
    const letGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={letGoogleUser}>Sign in with google popup</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn