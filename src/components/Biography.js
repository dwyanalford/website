// components/Biography.js
import Image from "next/image";
import bioData from "@/data/bioData";

const Biography = () => {
    return (
        <>
            {bioData.map((data, index) => (
                <div key={index} id="Biography" className="flex w-full overflow-hidden lg:p-10">
                    <div className="content-container lg:gap-2">
                        <div className="w-full p-4 flex  justify-center xl:justify-end md:flex-1">
                            <div className='max-w-xl leading-7 text-justify p-4'>
                                <h4 className='font-bold text-3xl pt-8 pb-3'>{data.heading}</h4>
                                <p className='text-3xl'>{data.date}</p>
                                
                                
                                <p className='pt-8'>{data.p1}</p>
                                <p className='pt-8'>{data.p2}</p>
                                <p className='pt-8'>{data.p3}</p>
                            </div>
                        </div>
                        <div className='w-full xl:flex-1'>
                            <div className='p-3'>
                                <Image 
                                    src={data.image} 
                                    alt={data.alt} 
                                    width={600} 
                                    height={800} 
                                    className="mx-auto xl:mx-0 rounded-md shadow-md"
                                />
                            </div>
                        </div>
                    
                    </div>
                </div>

            ))}
            
        </>
    );
}

export default Biography;

// style={{backgroundImage: `url(${data.image})`}}