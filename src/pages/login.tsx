import TextInput from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/CheckBox";
import {  RiLockFill } from "react-icons/ri";
import {FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
    const handlebutton = () => {
        console.log('Welcome button');
    }

    const navigate =useNavigate();

    return (
        <>
            <div className="min-h-screen items-center bg-gray-100 justify-center flex">
                <div className="border w-96 border-gray-200 shadow-lg rounded-md">
                    <div className="mt-2">
                        <h1 className="text-2xl mx-4 ">Login</h1>
                    </div>

                    <div>
                    <div className="mt-5 p-auto mx-4">
                            <TextInput 
                                icon={<FaEnvelope  />} 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                className="w-full  border-2 border-gray-500 px-8 py-2 rounded-lg"
                            />
                        </div>

                        <div className="mt-5 p-auto mx-4">
                            <TextInput 
                                icon={<RiLockFill />} 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Enter your password" 
                                className="w-full border-2 border-gray-500 px-8 py-2 rounded-lg"
                            />
                        </div>

                        <div className="mt-4 justify-center items-center flex">
                            <Checkbox type="checkbox" id="checkbox" name="checkbox" className="" />
                            <h1 className="px-2">Remember me</h1>
                        </div>

                        <div className="mt-4 items-center justify-center flex">
                            <Button 
                                onClick={handlebutton} 
                                type="button" 
                                className="border px-20 text-white bg-green-600 text-xl" 
                                text="Log In"
                            />
                        </div>

                        <div className="mt-9 items-center justify-center flex">
                            <Button className="text-blue-600" onClick={()=>navigate("/forgetpassword")} type="button" text="Forget your password"/>  
                        </div>

                        <div className="mt-8">
                            <hr />
                            <Button className="py-3 bg-gray-300 text-blue-900 text-xl font-semibold items-center justify-center flex" onClick={handlebutton} type="button" text="New to site? Create an account"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
