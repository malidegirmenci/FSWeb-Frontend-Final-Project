import { useSelector } from 'react-redux'

export default function Skills() {
    const { skills,headers } = useSelector((state) => state.data);
    const language = useSelector((state) => state.language);
    return (
        <div className='grid grid-cols-[40%,60%] w-[70%]  py-[6rem] max-lg:grid-cols-1 max-lg:gap-10 dark:text-white first-letter: mx-auto'>
            <h2 className=' text-indigo-700 dark:text-lime-300 text-5xl font-bold tracking-wide'>{language === "ENG" ? headers.skills.ENG : headers.skills.TR}</h2>
            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
                {
                    skills.map((item, index) => {
                        return (
                            <div className='grid grid-cols-2 items-center gap-2 ' key={index}>
                                <img  src={item.img} alt={`${item.name}icon`} />
                                <h3 className=' text-neutral-500 dark:text-white text-2xl max-md:text-xl font-medium uppercase leading-9'>{item.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}