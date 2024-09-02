import Button from "../components/Button";
import TextInput from "../components/Input";
import {FaEnvelope} from "react-icons/fa";

function ForGetPassword(){
    const handlebutton =()=>{
        console.log('it is forget password')
    }
    return(
<>
        <div className="h-screen bg-gray-200 items-center justify-center flex">
          <div className="border border-gray-300 w-96 shadow-lg rounded-md">
            <div className="my-3 mx-4">
            <h1 className="text-2xl font-semibold">Forget Password</h1>
            </div>

            <div className="my-7">
                <TextInput icon={<FaEnvelope className="mx-5"/>} id="forget password" type="forget password" name="forget password" placeholder="Enter your email"
                className="mx-4 w-full px-11 py-2 rounded-md  border-2"/>
            </div>

            <div className="my-3"> 
                <Button onClick={handlebutton} type="button" text="Reset Password" 
                className="border mx-24 px-9 py-1.5 rounded-md bg-green-700 " />
            </div>

            <div className="mt-11">
                <hr />
                <Button className="py-3 bg-gray-300 w-full text-blue-900 text-xl font-semibold items-center justify-center flex" onClick={handlebutton} type="button" text="Remember your password? Login"/>
             </div>

            </div>
        </div>
</>
    )
}
export default ForGetPassword;