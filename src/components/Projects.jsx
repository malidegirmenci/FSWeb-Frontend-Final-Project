import { Images } from "../assets/img/Images";
/* TODO 
[ ] Resimlere tekrar bak 
*/

export default function Projects() {
    return (
        <div className="bg-lime-300 py-[6rem] font-['Inter']">
            <div className="w-[70%] mx-auto flex flex-col gap-10">
                <h2 className="text-indigo-700 text-5xl font-bold leading-[48px] tracking-wide">Projects</h2>
                <div className="flex bg-white rounded-xl ">
                    <img className="w-[30%] object-cover rounded-l-xl rounded-r-none border-r border-neutral-300  " src={Images.projects.projectWorkintech} />
                    <div className="w-[70%] flex flex-col gap-4 px-8 p-10">
                        <h3 className="text-indigo-700 text-[32px] font-bold leading-loose">Workintech</h3>
                        <p className="text-neutral-700 text-base font-normal leading-tight">
                            A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                        </p>
                        <div className="flex gap-2">
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px]">
                                <div className="text-white text-sm font-medium leading-[14px]">react</div>
                            </div>
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px] ">
                                <div className="text-white text-sm font-medium leading-[14px]">redux</div>
                            </div>
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px] ">
                                <div className="text-white text-sm font-medium leading-[14px]">vercel</div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className=" text-slate-900 text-base font-medium underline leading-none">View Site</div>
                            <div className=" text-slate-900 text-base font-medium underline leading-none">Github</div>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white rounded-xl ">
                    <img className="w-[30%] object-cover overflow-hidden rounded-l-xl rounded-r-none border-r border-neutral-300" src={Images.projects.projectJourney} />
                    <div className="w-[70%] flex flex-col gap-4 px-8 p-10">
                        <h3 className="text-indigo-700 text-[32px] font-bold leading-loose">Journey</h3>
                        <p className="text-neutral-700 text-base font-normal leading-tight">
                            A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                        </p>
                        <div className="flex gap-2">
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px]">
                                <div className="text-white text-sm font-medium leading-[14px]">react</div>
                            </div>
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px] ">
                                <div className="text-white text-sm font-medium leading-[14px]">redux</div>
                            </div>
                            <div className="px-5 py-3 bg-indigo-700 rounded-[23px] ">
                                <div className="text-white text-sm font-medium leading-[14px]">vercel</div>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className=" text-slate-900 text-base font-medium underline leading-none">View Site</div>
                            <div className=" text-slate-900 text-base font-medium underline leading-none">Github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}