
import { Images } from '../assets/img/Images';
export default function Header() {
    return (
        <div className="w-[1231px] h-[738px] bg-zinc-100 mx-auto">
            <img className="pl-[275px]" src={Images.shapes.ellipeses.ellipse01} />
            <div className='flex items-center justify-end gap-2 ]'>
                <div className="justify-start items-center gap-4 flex">
                    <div className="w-[167px] h-6 relative flex justify-start items-center">
                        <div className="w-[55px] h-6 absolute bg-pink-600 rounded-[100px]" />
                        <div className="w-[15px] h-4 left-[35px] absolute  bg-amber-200 rounded-full" />
                        <div className="left-[64px] absolute text-neutral-500 text-[15px] font-bold  tracking-wider">DARK MODE</div>
                    </div>
                </div>
                <div className="text-neutral-500 text-[15px] font-bold tracking-wider">|</div>
                <div className="w-[158px] text-[15px] font-bold  justify-start tracking-wider items-start inline-flex">
                    <span className="text-pink-600">TÜRKÇE</span>
                    <span className="text-neutral-500">’YE GEÇ</span>
                </div>
            </div>
            <div className='flex flex-row pt-24  mx-auto'>
                <div className='flex flex-col gap-5 pr-[150px]'>
                    <div className="w-[679px] h-[313px] relative">
                        <div className="w-[148px] h-[31px] left-0 top-[96px] absolute bg-pink-600 rounded" />
                        <div className="left-[12px] top-0 absolute text-black text-3xl font-normal font-['Inter'] tracking-[3px]">Hi! 👋</div>
                        <div className="w-[666px] left-[13px] top-[57px] absolute text-gray-950 text-[42px] font-medium font-['Inter'] leading-[64px] tracking-wide">I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!</div>
                    </div>
                    <div className='flex gap-3 pt-4 pl-4'>
                        <img src={Images.socials.linkedin} alt='linkedin' />
                        <img src={Images.socials.github} alt='github' />
                    </div>
                    <div className="w-[540px] h-[122.57px] pl-4 relative">
                        <div className="absolute">
                            <span className="text-black text-lg font-normal font-['Inter'] leading-loose tracking-wide">Currently </span>
                            <span className="text-rose-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">Freelancing</span>
                            <span className="text-black text-lg font-normal font-['Inter'] leading-loose tracking-wide"> for </span>
                            <span className="text-rose-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">UX, UI, & Web Design</span>
                            <span className="text-black text-lg font-normal font-['Inter'] leading-loose tracking-wide"> Project . <br />Invite me to join your team - </span>
                            <span className="text-rose-700 text-lg font-normal font-['Inter'] underline leading-loose tracking-widest">pratamaiosi@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="w-[361px] h-[361px] relative">
                    <div className="w-[344px] h-[343px] left-0 top-0 absolute bg-pink-600 rounded-[32px]" />
                    <img className="w-[341px] h-[341px] left-[20px] top-[20px] absolute rounded-[22px] object-cover" src={Images.photos.profilePhoto} />
                </div>
            </div>
        </div>
    )
}