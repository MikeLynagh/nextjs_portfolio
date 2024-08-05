import React from "react";


const Details = ({course, company, time, address, content}) => {
    return <div className="my-8 first:mt-10 last:mb-0 w-[60] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{course}&nbsp;@{company}</h3>
            <span className="capitalize font-medium text-dark/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
               {content} 
            </p>
        
    </div>
}

const Education = () => {
    return(
        <div className="my-64 md:mt-8 sm:mt-8">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-5xl md:my-4 ">
                Education
            </h2>
            <div className="w-[75%] mx-auto relative">
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    
                        <Details
                        course="PostGraduate Diploma (Cloud Computing and Software Development)" company="University of Galway"
                        time="2023-Present" address="Galway, Ireland"
                        content="Expected to graduate with a First Class Honours."
                         />
                    
                    
                        <Details
                        course="Higher Diploma in Computing (Software Development) " company="Dublin Business School"
                        time="2022-Present" address="Dublin, Ireland"
                        content="Graduated with a First Class Honours"
                         />
                    
                </ul>
            </div>
           
             
        </div>
    )
}

export default Education