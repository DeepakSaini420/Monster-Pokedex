import { useState } from "react"
import { CreateUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import './sign-up.style.scss'

const defaultFormField = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
} 

const SignUpForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormField);
    const { displayName,email,password,confirmPassword } = formFields;

    const handelChange = (event) =>{
        const {name,value} = event.target
        setFormFields({...formFields,[name]:value});
    } 

    const submit =async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword) {
            alert("Paasword dont match");
            return
        };
        try {
            const { user } =await CreateUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user,{displayName})
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("can't create user with same email");
            }
            console.log(error.message);
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't Have an account?</h2>
            <span>Sign Up With Email and Password</span>
            <form onSubmit={submit}>
                <FormInput 
                required 
                type={"text"} 
                onChange={handelChange} 
                label="Display Name" 
                name="displayName"
                value={displayName}/>

                <FormInput 
                required 
                type={"email"} 
                onChange={handelChange} 
                label="Email" 
                name="email" 
                value={email}/>

                <FormInput 
                required 
                type={"password"} 
                onChange={handelChange} 
                name="password" 
                label="Password" 
                value={password}/>
                
                <FormInput 
                required 
                type={"password"} 
                onChange={handelChange} 
                label="Confirm Password" 
                name="confirmPassword" 
                value={confirmPassword}/>

                <Button children={"Sign Up"} type="submit" buttonType={""}/>
            </form>
        </div>
    )
}

export default SignUpForm