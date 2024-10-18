
import localFont from "next/font/local";
import Hero from "./components/Hero";

// import CourseCard from "./components/reuse/CourseCard";
import {Courseimg,LogoList} from '@/Data'
import Carausal from "./components/reuse/Carausal";
import WhyChooseUs from "./components/WhyChooseUs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    
    <main>
    <Hero/>
    
      <Carausal images={LogoList} className={"m-4 w-[100px] h-auto"} />
    <div className="mt-10 mx-10 mb-9 max-sm:mx-1"  >
      <h1 className="text-4xl max-sm:text-3xl  font-semibold my-8" >Unlock Job Opportunities in Digital Marketing</h1>
      <div className="flex gap-6 mx-auto" >

      <Carausal images={Courseimg} className="h-[210px] w-[375px] m-4 " />

      </div>
    </div>
    <div className="mt-10 mx-10 mb-9 max-sm:mx-1"  >
      <h1 className="text-4xl max-sm:text-3xl  font-semibold my-8 text-center " >Featured classes
      </h1>
      <div className="flex gap-6 mx-auto" >

      <Carausal images={Courseimg} className="h-[319px] w-[568px] m-4 " />

      </div>
    </div>
    {/* another section */}
    <section>
      <WhyChooseUs/>
      
    </section>
    {/* another section */}
      
    <div className="flex min-h- justify-center items-center  " > 
        <div>image</div>
        <div className="flex items-center gap-3 flex-col  " >
          <h1 className="text-3xl font-semibold " >Who can Join Futurists Academy</h1>     
          <div className=" flex flex-col gap-10  items-center" >
            {/* part1 */}
            <div className=" flex gap-2" >
            <div className="flex gap-4" >
              <div className="logo">icon here</div>
              <div>
                <h1 className="text-xl font-semibold" >students</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>


            </div>
            <div className="flex gap-4" >
              <div className="logo">icon here</div>
              <div>
                <h1 className="text-xl font-semibold" >students</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>


            </div>
            

            </div>
            {/* part1 */}
            <div className=" flex gap-2" >
            <div className="flex gap-4" >
              <div className="logo">icon here</div>
              <div>
                <h1 className="text-xl font-semibold" >students</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>


            </div>
            <div className="flex gap-4" >
              <div className="logo">icon here</div>
              <div>
                <h1 className="text-xl font-semibold" >students</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>


            </div>
            

            </div>
            
            


          </div>
        </div>



      </div>

    </main>
  );
}
