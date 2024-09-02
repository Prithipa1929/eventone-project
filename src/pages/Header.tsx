import Button from "../components/Button";
import TextInput from "../components/Input";

function Header (){
    return (
        <>
        <div className="flex">
            <div>
                <Button text="eventyay" type="button" className="border text-2xl font-bold py-5  px-4 "/>
            </div>
            <div>
                <TextInput  type="text" name="inputtext" placeholder="Search" className="border py-5 px-4 text-xl ml-[675px]" />
            </div>

            <div>
                <Button text="Pricing" type="button" className="border text-xl py-5 px-8"/>
            </div>

            <div>
                <Button text="Login" type="button" className="border text-xl py-5 px-8"/>
            </div>

            <div>
                <Button text="Create Event" type="button" className="border text-xl py-5 px-9 text-blue-600"/>
            </div>
            </div>

           
        </>
    )
}
export default Header;