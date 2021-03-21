// the landing page
import React from "react";
import { Link } from "react-router-dom";


function Welcome() {
  return (

   
    <div className="object-contain md:container  bg-white px-2 mx-auto rounded-md   ">
      
    

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-6 xl:mt-28">
     
      <section class="flex justify-center">
              <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/welcome.png?raw=true"  width="500" with ="500" alt="logo" className="" />
        
  </section>

  <section class="flex justify-center">
    <img src="https://github.com/aguado-romina/Reacts-Child/blob/roxie/client/src/images/puppy.gif?raw=true" alt="frenchie" width="500" with ="500" className="object-center" />
 </section>


           
          <div className="flex justify-center">
          <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            A letter written from a dog to their human.
          </p>
          </div>
        
        <div className="flex flex-wrap justify-center py-2 gap-1">

            <button
              type="submit"
              className="group relative flex justify-center py-2 px-3 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue ">
                      
            <Link

               to="/signup"
              className={
                window.location.pathname === "/" || window.location.pathname === "/signup"}


            >Sign Up</Link>
            </button>
         

      
          <Link
            to="/login"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/login"
            }
          >
            
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue "
          >
            Login
          </button>
          
        </Link>

    
       </div>
      </main>
  </div>
  );
}
export default Welcome;

//one sentence welcome tagline
//Login/ sign Up button