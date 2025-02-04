export default function Navbar() {
    const data=[
        {
            text:"About",
            link:"/about"
        },
        {
            text:"Projects",
            link:"/projects"
        },
        {
            text:"Contact",
            link:"/contact"
        },
        {
            text:"Resume",
            link:"/resume"
        },
        {
            text: "Blog",
            link: "/blog"
        }
    ]
    return (
        <div className="  py-6   ">
            <div className='flex items-center  justify-between '>
                <h1 className='text-3xl  font-semibold '>Sachin kumar Verma </h1>

                <div className='flex mt-3   items-center gap-x-5  text-xl text-gray-500  '>
                    {data.map((item,index)=>(
                        <div  key={index}>
                            <a className='hover:bg-gray-100 p-2 px-3 rounded-lg  ' href={item.link}>{item.text}</a>
                        </div>
                    ))
                    }
                </div>

            </div>
        </div>
    );
}
