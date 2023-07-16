// components/Biography.js
import Image from "next/image";
import styles from '@/styles/Biography.module.css';
import bioData from "@/data/bioData";

const Biography = () => {
    return (
        <>
            {bioData.map((data, index) => (
                <div key={index} className="flex w-full bg-center bg-cover overflow-hidden lg:p-10" style={{backgroundImage: `url(${data.image})`}}>
                    <div className="content-container lg:gap-2">
                        <div className="w-full p-4 md:flex-1 2xl:pl-[125px]">
                            <div className='max-w-lg leading-7 text-justify'>
                                <h4 className='font-bold text-3xl pt-8 pb-3'>{data.heading}</h4>
                                <p className='text-3xl'>{data.date}</p>
                                
                                
                                <p className='pt-8'>{data.p1}</p>
                                <p className='pt-8'>{data.p2}</p>
                                <p className='pt-8'>{data.p3}</p>
                            </div>
                        </div>
                        {/* <div className='w-full md:flex-1'>
                            <div className=''>
                                <div className=''>
                                    <Image 
                                        src={data.image} 
                                        alt={data.alt} 
                                        width={600} 
                                        height={800} 
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            ))}
            
        </>
    );
}

export default Biography;