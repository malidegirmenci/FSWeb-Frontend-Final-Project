import { useSelector } from 'react-redux'

export default function Skills() {
    const { skills,headers } = useSelector((state) => state.data);
    const language = useSelector((state) => state.language);
    return (
        <div className='flex w-[70%]  py-[6rem]  dark:text-white first-letter: mx-auto gap-16 justify-between'>
            <h2 className=' w-[33%] text-indigo-700 dark:text-lime-300 text-5xl font-bold tracking-wide'>{language === "ENG" ? headers.skills.ENG : headers.skills.TR}</h2>
            <div className='w-[67%] flex gap-10 flex-wrap justify-between'>
                {
                    skills.map((item, index) => {
                        return (
                            <div className='flex gap-6 items-center w-[35%] ' key={index}>
                                <img  src={item.img} alt={`${item.name}icon`} />
                                <h3 className=' text-neutral-500 dark:text-white text-2xl font-medium uppercase leading-9'>{item.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}