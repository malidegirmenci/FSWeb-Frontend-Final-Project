import { useSelector } from "react-redux";
/* TODO 
[ ] Resimlere tekrar bak 
*/

export default function Projects() {
    const { projects } = useSelector((state) => state.data)
    return (
        <div className="bg-lime-300 py-[6rem] font-['Inter']">
            <div className="w-[70%] mx-auto flex flex-col gap-10">
                <h2 className="text-indigo-700 text-5xl font-bold leading-[48px] tracking-wide">Projects</h2>
                {
                    projects.map((item, index) => {
                        return (
                            <div className="flex bg-white rounded-xl " key={index}>
                                <img className="w-[30%] object-cover rounded-l-xl rounded-r-none border-r border-neutral-300  " src={item.projectImg} />
                                <div className="w-[70%] flex flex-col gap-4 px-8 p-10">
                                    <h3 className="text-indigo-700 text-[32px] font-bold leading-loose">{item.projectName}</h3>
                                    <p className="text-neutral-700 text-base font-normal leading-tight">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {
                                            item.technologies.map((item, index) => {
                                                return (
                                                    <div key={index} className="px-5 py-3 bg-indigo-700 rounded-[23px]">
                                                        <div className="text-white text-sm font-medium leading-[14px]">{item}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="flex gap-10">
                                        <div className=" text-slate-900 text-base font-medium underline leading-none"><a href={item.siteURL}>View Site</a></div>
                                        <div className=" text-slate-900 text-base font-medium underline leading-none"><a href={item.githubURL}>Github</a></div>
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