import Button from "../components/Button";

function Footer (){
    return(
        <>
        <div className="bg-black py-11 ">
             <div className="flex w-full text-white  ">
                <div className="flex flex-col mx-60 py-9">
                    <h1 className="">Use eventyay</h1>
                    <div className="flex flex-col" >
                        <a href="">How it Works</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                    </div>
                </div>

                <div className="flex flex-col  py-9">
                    <h1 className="">Plan Events</h1>
                    <div className="flex flex-col" >
                        <a href="">Online Registration</a>
                        <a href="">Sell Event Tickets</a>
                        <a href="">Event Management</a>
                        <a href="">Software</a>
                    </div>
                </div> 

                <div className="flex flex-col mx-60 py-9">
                    <h1 className="">Find Events</h1>
                    <div className="flex flex-col" >
                        <a href="">Browse Events</a>
                        <a href="">Attendee App</a>
                        <a href="">Organizer App</a>
                    </div>
                </div>

                <h1 className="py-9">Connect With us</h1>
                </div>

                <div className="border-t mx-20 text-white px-60">
                </div>

                <div className=" text-white flex ">
                <h1 className="px-60 py-5"> Maintained by FOSSASIA </h1>
                <div className="py-6 mx-80">
                <Button type="button" text="English" className="border rounded-lg py-2 px-8"/>
                </div>
                </div>


                </div>
                
        </>
    )
}
export default Footer;