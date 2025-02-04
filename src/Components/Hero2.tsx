export  default  function Hero2(){

    const data=[
        {
            heading:"Educator and mentor",
            text:"Has educated thousands of developers, sharing in-depth knowledge and expertise in tech."
        },
        {
            heading:"Cloud consultant",
            text:"Provides insightful consultancy to companies embarking on their cloud journeys."
        },
        {
            heading: "Community leader & keynote speaker",
            text:"Renowned for exceptional community leadership and engaging as a speaker at global tech conferences."
        },
        {
            heading: "Empathy and professionalism",
            text:'Known for a unique blend of empathetic understanding and professional acumen in his approach to work and life.'
        }
    ]

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 my-20 '>
            {data.map((item,index)=>(
                <div key={index}
                className='border border-gray-200   rounded-xl  bg-gray-300/25   px-16 py-8 flex flex-col gap-y-3  mx-4 my-5 '
                >
                    <p className="font-semibold text-2xl">{item.heading}</p>
                    <p className='text-gray-500 text-lg '>{item.text}</p>
                </div>
            ))
            }
            </div>
        </>
    )
}