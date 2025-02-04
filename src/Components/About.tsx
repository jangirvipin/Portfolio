import {ArrowUpRight} from "lucide-react";

export default function About ()
{
    const data = [
        {
            logo:"Star",
            heading:"Widely acclaimed courses",
            text:"Join thousands who have benefitted from my courses, backed by thousands of positive reviews."
        },
        {
            logo:"",
            heading:"Latest tech trends webinars",
            text:"Regular webinars and sessions to keep you updated with the latest technological advancements."
        },
        {
            logo:"",
            heading:"Free access to knowledge",
            text:"All courses are completely free to watch, making quality education accessible to everyone."
        }
    ]

    return (
        <>
        <div className='py-5'>
            <div className='text-blue-500 flex justify-center text-xl '>
                Courses
            </div>
            <div className='flex justify-center'>
            <h1 className='text-4xl font-semibold'>
                Teaching developers to upskill themselves.
            </h1>
            </div>
            <div className='flex justify-center'>
            <div className='max-w-[1000px] text-gray-600 text-xl my-3.5'>
                Step into a world of learning with my comprehensive courses, designed for developers at all levels. I guide you through the intricacies of Machine Learning, the practical applications of DevOps, and mastery of the latest development technologies and complex infrastructures.
            </div>
            </div>
            <div className='justify-center flex mt-5'>
            <div className='flex max-w-7xl justify-center '>
            {data.map((item,index)=>(
                <div key={index} className='mt-7' >


                    <div className='text-center'>
                        <p className='text-2xl w-full font-semiboldbold'> {item.heading}</p>
                    </div>
                    <div className='max-w-[400px] mx-9'>
                    <p className='text-xl text-gray-600'>{item.text}</p>
                    </div>

                </div>
            ))
            }
            </div>
            </div>
            <div className='flex justify-center m-10'>
                <button className=' flex bg-violet-500 rounded-md px-8 py-6 items-center gap-x-2   text-xl text-white    '>
                    Explore Courses     <ArrowUpRight size={28} />
                </button>
            </div>
        </div>
        </>
    )
}