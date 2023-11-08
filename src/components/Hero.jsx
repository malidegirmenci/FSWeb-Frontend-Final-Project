import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocaleStorage } from '../hooks/useLocalStorage';
import { changeLanguage } from '../store/actions';
import { DarkModeContext } from '../context/darkModeContext';

export default function Hero() {
    const { name, headline, introduction, profilePhoto, socials } = useSelector((state) => state.data);
    const [language, setLanguage] = useLocaleStorage("Language", useSelector((state) => state.language));
    const dispatch = useDispatch();
    const { toggleDarkMode } = useContext(DarkModeContext);

    function changeLanguageHandler(lang) {
        setLanguage(lang);
        dispatch(changeLanguage(lang));
    }
    return (
        <div className="h-screen flex font-['Inter']">
            <div className="basis-[70%] bg-[#4731D3] dark:bg-indigo-950 pt-10">
                <div className="flex justify-end px-2">
                    <div className='flex items-center justify-end gap-2 flex-wrap'>
                        <div className="text-[15px] font-bold  justify-start tracking-wider items-start flex">
                            {language === "ENG" ?
                                <div className='cursor-pointer' onClick={() => changeLanguageHandler("TR")}>
                                    <span className="text-lime-300">TÜRKÇE</span>
                                    <span className="text-zinc-300">’YE GEÇ</span>
                                </div> :
                                <div className='cursor-pointer' onClick={() => changeLanguageHandler("ENG")}>
                                    <span className="text-lime-300">PASS TO </span>
                                    <span className="text-zinc-300"> ENGLISH</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-9 w-[60%] m-auto">
                    <h1 className="text-lime-300 leading-[72px] text-[32px] font-bold ">{name}</h1>
                    <div className=" text-lime-300 text-[54px] leading-[59.40px]">{language === "ENG" ? headline.ENG : headline.TR}</div>
                    <div className=" text-white text-2xl font-normal ">{language === "ENG" ? introduction.ENG : introduction.TR}</div>
                    <div className="flex gap-3">
                        {
                            socials.map((item, index) => {
                                return (
                                    <div key={index} className=" px-4 py-3 bg-white rounded-md border border-indigo-800 justify-center items-center gap-2.5 inline-flex">
                                        <img src={item.img} />
                                        <div className="text-indigo-800 text-lg font-medium leading-7"><a href={item.url}>{item.name}</a></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="basis-[30%] bg-[#CBF281] dark:bg-[#19200B] pt-10 px-2 flex flex-col gap-16  ">
                <div className="justify-start items-center gap-4 flex" onClick={() => toggleDarkMode()}>
                    <div className="w-[167px] h-6 relative flex justify-start items-center">
                        <div className="w-[237px] h-[100px] relative">
                            <div className="w-[237px] h-[100px] left-0 top-0 absolute bg-slate-900 rounded-[100px]"></div>
                            <div className="w-[66px] h-[66px] left-[20px] top-[17px] absolute bg-yellow-50 rounded-full"></div>
                            <div className="w-2 h-2 left-[12px] top-[46px] absolute bg-slate-900 rounded-full"></div>
                        </div>
                        <div className="left-[64px] absolute text-indigo-700 text-[15px] font-bold  tracking-wider cursor-pointer" >DARK MODE</div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[-175px]'>
                        <img className="w-[350px] h-[375.89px] rounded-[18px] shadow object-cover" src={profilePhoto} />
                    </div>
                </div>
            </div>
        </div>
    )
}