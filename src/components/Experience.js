import React from "react";

const Details = ({position, company, time, address, work}) => {
    return <div className="my-8 first:mt-10 last:mb-0 w-[60] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;@{company}</h3>
            <span className="capitalize font-medium text-dark/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
               {work} 
            </p>
        
    </div>
}

const Experience = () => {
    return(
        <div className="my-64 sm:mt-8 sm:mb-8">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-5xl md:mb-8">
                Experience
            </h2>
            <div className="w-[75%] mx-auto relative">
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    
                        <Details
                        position="Freelance Software Engineer" company=" Google"
                        time="2022-Present" address="Mountain View, CA"
                        work="worked on a team responsible for developing new features for Google's search engine."
                         />
                    
                    
                        <Details
                        position="Software Engineer" company=" Google"
                        time="2022-Present" address="Mountain View, CA"
                        work="worked on a team responsible for developing new features for Google's search engine."
                         />
                    
                </ul>
            </div>
           
             
        </div>
    )
}

export default Experience