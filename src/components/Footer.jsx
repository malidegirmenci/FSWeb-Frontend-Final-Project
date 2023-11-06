import { Images } from "../assets/img/Images";

export default function Footer() {
    return (
        <footer className="font-['Inter'] py-[6rem]">
            <div className="w-[70%] mx-auto text-center flex flex-col">
                <p className="text-indigo-700 text-5xl font-bold leading-[72px]">Send me a message!</p>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-slate-900 text-2xl font-normal leading-9">Got a question or proposal, or just want to say hello? Go ahead.</p>
                    <a className="text-indigo-700 text-xl font-medium underline tracking-wide" href="mailto:almilasucode@gmail.com">almilasucode@gmail.com</a>
                    <div className="flex gap-4">
                        <img src={Images.socials.twitter} />
                        <img src={Images.socials.codepen} />
                        <img src={Images.socials.atSign} />
                        <img src={Images.socials.instagram} />
                    </div>
                </div>
            </div>
        </footer>
    )
}