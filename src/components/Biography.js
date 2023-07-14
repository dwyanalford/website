// components/Biography.js
import Image from "next/image";
import styles from '@/styles/Biography.module.css';
import bioData from "@/data/bioData";

const Biography = () => {
    return (
        <>
            {bioData.map((data, index) => (
                <div key={index} className="content">
                    <div className="content-container lg:gap-2">
                        <div className="w-full p-4 md:flex-1">
                            <div className='max-w-md'>
                                <p className='text-4xl'>{data.date}</p>
                                <h4 className='font-bold text-2xl pt-8'>{data.heading}</h4>
                                
                                <p className='pt-8'>{data.p1}</p>
                                <p className='pt-8'>{data.p2}</p>
                            </div>
                        </div>
                        <div className='w-full md:flex-1'>
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
                        </div>
                    </div>
                </div>

            ))}
            
        </>
    );
}

export default Biography;