import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/Input";
import {FaUser,FaEnvelope } from "react-icons/fa";

function Signup(){
const handlebutton =()=>{
    console.log('it is signup page')
};
const navigate =useNavigate();

    return(
<>

        <div className="min-h-screen items-center bg-gray-100 justify-center flex">
        <div className="border w-96 border-gray-200 shadow-lg rounded-md">
            <div>
                <h1 className="text-2xl font-semibold my-3 mx-4">Sign Up</h1>
            </div>

                <TextInput icon={<FaUser className="mx-4"/>} id="username" type="username" name="username" placeholder="Please enter your Username" 
                className="w-full rounded-md py-2 px-11 border-2  mx-4" />

                <div className="my-5">
                <TextInput icon={<FaEnvelope  className="mx-4"/>} id="email" type="email" name="email" placeholder="Please enter your email" 
                className="w-full rounded-md py-2 px-11 border-2  mx-4" />
                </div>

                <div className="my-5">
                    <TextInput icon={<FaEnvelope className="mx-4"/>} id="password" type="password" name="password" placeholder="Enter your password"
                    className="w-full rounded-md py-2 px-11 border-2  mx-4"/> 
                </div>

                <div className="my-5">
                    <TextInput icon={<FaEnvelope className="mx-4"/>} id="conform password" type="conform password" name="conform password" placeholder="Enter conform password"
                    className="w-full rounded-md py-2 px-11 border-2  mx-4"/>
                </div>

                <Button type="button" text="SignUp"
                className="border px-16 py-
                1 mx-20 bg-green-700 text-xl "/>

                <div className="mt-8">
                <hr />
                <Button className="w-full py-3 bg-gray-300 text-blue-900 text-xl font-semibold items-center justify-center flex" onClick={handlebutton} type="button" text="Already you have an account? Login"/>
                 </div>


                 </div>
                </div>

</>
    )
}
export default Signup;