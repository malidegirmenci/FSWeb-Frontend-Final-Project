import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocaleStorage } from '../hooks/useLocalStorage';
import { changeLanguage } from '../store/actions';
import { DarkModeContext } from '../context/darkModeContext';
import './Hero.css';

export default function Hero() {
    const { name, headline, introduction, profilePhoto, socials } = useSelector((state) => state.data);
    const [language, setLanguage] = useLocaleStorage("Language", useSelector((state) => state.language));
    const dispatch = useDispatch();
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
                <div className="justify-start items-center gap-4 flex">
                    <div className="w-[240px] h-6  flex gap-2 items-center">
                        {
                            darkMode === false ?
                                <div className="w-[60px] h-[25px] relative left-0 top-0 bg-[#8F88FF] rounded-[25px] cursor-pointer"  onClick={() => toggleDarkMode()}>
                                    <div className="w-[16px] h-[16px] left-[5px] top-[5px] absolute bg-yellow-50 rounded-full animatedFirstCircle "></div>
                                    <div className="w-0.5 h-0.5 left-[3px] top-[6px] absolute bg-[#8F88FF] rounded-full animatedSecondCircle "></div>
                                </div>
                                :
                                <div className="w-[60px] h-[25px] relative left-0 top-0  bg-[#2a3613] rounded-[25px] cursor-pointer"  onClick={() => toggleDarkMode()}>
                                    <div className="w-[16px] h-[16px] left-[37.5px] top-[5px] absolute bg-amber-200 rounded-full animatedFirstCircleReverse"></div>
                                    <div className="w-3.5 h-3.5 left-[35px] top-[6px] absolute bg-[#2a3613] rounded-full animatedSecondCircleReverse "></div>
                                </div>
                        }
                        {
                            darkMode === false ?
                                <div className=" text-indigo-700 text-[15px] font-bold  tracking-wider " >DARK MODE</div> :
                                <div className="  text-white text-[15px] font-bold  tracking-wider " >LIGHT MODE</div>
                        }
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


