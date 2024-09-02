import Button from "../components/Button";
import banner from "../assets/Frontend_Branding.png";
import Header from "./Header";
import Footer from "./Footer";

function Home (){
    return (
        <>
            <Header/>

            <div className="container flex w-full sm:container md:container lg:container">
                <img src={banner } alt="" />
            </div>

            <div>
                <h1 className="mx-24 my-8 text-2xl text-blue-700 font-semibold">No Upcomming Events Found</h1>
            </div>

            <div>
                <h1 className="mx-24 text-2xl text-blue-700 font-semibold">Popular Groups</h1>
            </div><br />
 
            <div className="container mx-auto p-2 items-center justify-center flex"> 
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="my-auto ">
                <div className="max-w-lg rounded-md overflow-hidden shadow-lg  hover:shadow-xl transition-shadow duration-300">
                <div className="">
                   <Button text="EVENT" type="button" className="border  bg-gray-500 w-full text-3xl  text-white font-mono py-14" />
                  <div className="my-6 mx-3">
                    <h1 className="text-2xl ">FOSSASIA Group</h1>
                  </div>

                  <div className="my-4 mx-3">
                        This is the fossasia group od eventyay
                  </div>
                    <br />
                  <div className="mt-11">
                        <Button text="Follow Group" type="button" className="bg-blue-400 w-full py-4"/>
                  </div>
                </div>
                </div>
            </div>

            <div className="my-auto ">
                <div className="max-w-lg rounded-md overflow-hidden shadow-lg  hover:shadow-xl transition-shadow duration-300">
                <div className="">
                   <Button text="GROUP" type="button" className="border  bg-gray-500 w-full text-3xl  text-white font-mono py-14" />
                  <div className="my-6 mx-3">
                    <h1 className="text-2xl ">testing</h1>
                  </div>

                  <div className="my-4 mx-3">
                        no information given this group
                  </div>
                    <br />
                  <div className="mt-11">
                        <Button text="Follow Group" type="button" className="bg-blue-400 w-full py-4"/>
                  </div>
                </div>
                </div>
            </div>
            </div>
        </div> 

            <div className="items-center flex justify-center">
            <Button type="button" text="Show more groups" className="text-white text-xl border bg-blue-800 px-7 py-3 rounded-md"/>
            </div>

            <Footer/>

        </>
    )
}
export default Home;