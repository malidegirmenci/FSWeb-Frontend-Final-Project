import { useSelector } from "react-redux"


export default function Footer() {
    const {footer} = useSelector((state) => state.data)
    const language = useSelector((state) => state.language); 
    return (
        <footer className="font-['Inter'] py-[6rem]">
            <div className="w-[70%] mx-auto text-center flex flex-col">
                <p className="text-indigo-700 dark:text-indigo-400 text-5xl font-bold leading-[72px]">{language === "ENG" ? footer.sendMeMsg.ENG : footer.sendMeMsg.TR}</p>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-slate-900 dark:text-white text-2xl font-normal leading-9">{language === "ENG" ? footer.message.ENG : footer.message.TR}</p>
                    <a className="text-indigo-700 dark:text-indigo-400 text-xl font-medium underline tracking-wide" href={`mailto:${footer.mail}`}>{footer.mail}</a>
                    <div className="flex gap-4">
                        {
                            footer.socials.map((item, index) => {
                                return (
                                    <a href={item.url} key={index}>
                                        <img src={item.img} />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}