import { Images } from '../assets/img/Images'

export default function Hero() {
    return (
        <div className="h-screen flex font-['Inter']">
            <div className="basis-[70%] bg-[#4731D3] pt-10">
                <div className="flex justify-end px-2">
                    <div className='flex items-center justify-end gap-2 flex-wrap'>
                        <div className="text-[15px] font-bold  justify-start tracking-wider items-start flex">
                            <span className="text-lime-300">TÜRKÇE</span>
                            <span className="text-zinc-300">’YE GEÇ</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-9 w-[60%] m-auto">
                    <h1 className="text-lime-300 leading-[72px] text-[32px] font-bold ">almila</h1>
                    <div className=" text-lime-300 text-[54px] leading-[59.40px]">I am a Frontend<br />Developer...</div>
                    <div className=" text-white text-2xl font-normal ">...who likes to craft solid and scalable frontend products with great user experiences.</div>
                    <div className="flex gap-3">
                        <div className=" px-4 py-3 bg-white rounded-md border border-indigo-800 justify-center items-center gap-2.5 inline-flex">
                            <img src={Images.socials.github}/>
                            <div className="text-indigo-800 text-lg font-medium font-['Inter'] leading-7">Github</div>
                        </div>
                        <div className=" px-4 py-3 bg-white rounded-md border border-indigo-800 justify-center items-center gap-2.5 inline-flex">
                            <img src={Images.socials.linkedin}/>
                            <div className="text-indigo-800 text-lg font-medium  leading-7">Linkedin</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-[30%] bg-[#CBF281] pt-10 px-2 flex flex-col gap-16  ">
                <div className="justify-start items-center gap-4 flex">
                    <div className="w-[167px] h-6 relative flex justify-start items-center">
                        <div className="w-[55px] h-6 absolute bg-indigo-400 rounded-[100px]" />
                        <div className="w-[15px] h-4 left-[35px] absolute  bg-amber-200 rounded-full" />
                        <div className="w-0.5 h-0.5 left-[52px] top-[11px] absolute origin-top-left rotate-180 bg-pink-600 rounded-full" />
                        <div className="left-[64px] absolute text-indigo-700 text-[15px] font-bold  tracking-wider">DARK MODE</div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[-175px]'>
                        <img className="w-[350px] h-[375.89px] rounded-[18px] shadow object-cover" src={Images.photos.profilePhotoInHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}