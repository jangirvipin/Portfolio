import {ArrowDown} from "lucide-react";

export default  function Hero(){
    const data=[
        {
            text:"Know more",
            link:"/about"
        },
        {
            text:"Get in touch",
            link:"/contact"
        }
    ]
    return (
        <>
            <div className='text-6xl my-6 max-w-4xl px-4 pl-8 py-8  mt-12 rounded-xl      shadow-2xl font-semibold'>
                <h1>
                    Building a better future through
                </h1>
                <h1>
                    technology and innovation .
                </h1>
            </div>

            <p className='text-2xl text-gray-500 mt-4 pl-8 '>
                Student at <span className='underline uppercase'>Sliet</span> . Learning Web2 development
            </p>

            <div className='flex items-center gap-x-4 mt-10 pl-4 ' >
                {data.map((item,index)=>(
                        item.text==="Know more" ?
                            <button key={index}
                                    className=' border border-gray-300 py-4 px-8 rounded-lg text-xl flex items-center gap-x-2  '
                            >
                                <ArrowDown />
                                {item.text}
                            </button> :
                            <button key={index}
                                    className=' border border-gray-300 py-4 px-8 bg-violet-600 text-white rounded-lg text-xl hover:opacity-85'
                            >
                                {item.text}
                            </button>
                ))
                }
            </div>


        </>
    )
}