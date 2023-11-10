import { useSelector } from "react-redux";

export default function Projects() {
    const { projects,headers } = useSelector((state) => state.data)
    const language = useSelector((state) => state.language);
    return (
        <div className="bg-lime-300 dark:bg-[#19200B] py-[6rem] font-['Inter']">
            <div className="w-[70%] mx-auto grid gap-10">
                <h2 className="text-indigo-700 dark:text-lime-300 text-5xl font-bold leading-[48px] tracking-wide">{language === "ENG" ? headers.projects.ENG : headers.projects.TR}</h2>
                {
                    projects.map((item, index) => {
                        return (
                            <div className="grid grid-cols-[30%,70%] max-xl:grid-cols-1 bg-white dark:bg-stone-800 rounded-xl" key={index}>
                                <img className="object-cover h-full object-left rounded-l-xl max-xl:rounded-t-xl max-xl:rounded-b-none rounded-r-none border-r border-neutral-300  " src={item.projectImg} />
                                <div className=" flex flex-col gap-4 px-8 p-10">
                                    <h3 className="text-indigo-700 dark:text-violet-300 text-[32px] font-bold leading-loose">{item.projectName}</h3>
                                    <p className="text-neutral-700 dark:text-white text-base font-normal leading-tight">
                                        {language === "ENG" ? item.description.ENG : item.description.TR }
                                    </p>
                                    <div className="flex gap-2">
                                        {
                                            item.technologies.map((item, index) => {
                                                return (
                                                    <div key={index} className="px-5 py-3 bg-indigo-700 dark:bg-violet-500  rounded-[23px]">
                                                        <div className="text-white text-sm font-medium leading-[14px]">{item}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="flex gap-10">
                                        <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none"><a href={item.siteURL}>View Site</a></div>
                                        <div className=" text-slate-900 dark:text-lime-300 text-base font-medium underline leading-none"><a href={item.githubURL}>Github</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}