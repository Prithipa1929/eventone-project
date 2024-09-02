import TextInput from "../components/Input";
import Footer from "./Footer";
import Header from "./Header";

function Forms(){
    return (
        <>
        <Header/>

            <div className="my-11 mx-20">
                <h1 className="text-3xl">Create an Event</h1>
            </div>

            {/* <div className="">
                <Button type="button" text='Basic Details' />
            </div> */}


            <div className="mx-20">
                <h1 className="text-xl font-semibold">Event Name *</h1>
                <div className="">
                    <TextInput type="text" name="enter name" className="border py-2 my-3 w-full rounded-md"/>
                </div>

                <div className="grid grid-cols-3 ">
                    <div className=""><TextInput name="event type" type="text" className="border px-32 rounded-md  py-2 my-3 " placeholder="select Event Topic"/></div>
                    <div className=""><TextInput name="event type" type="text" className="border px-32 rounded-md  py-2 my-3 " placeholder="select Event Type"/></div>
                    <div className=""><TextInput name="event type" type="text" className="border px-32 rounded-md  py-2 my-3 " placeholder="select Event Sub-topic"/></div>
                </div>
            </div>



            <Footer/>
        </>
    )
}
export default Forms;