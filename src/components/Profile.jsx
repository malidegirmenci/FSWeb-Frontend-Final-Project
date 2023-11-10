import { useSelector } from "react-redux";

/* TODO
[ ] Basic Information Refactor need   
*/
export default function Profile() {
    const {profile, headers} = useSelector((state) => state.data)
    const language = useSelector((state) => state.language);
    return (
        <div className="bg-[#4731D3] dark:bg-indigo-950 py-[6rem]">
            <div className="grid grid-rows w-[70%] mx-auto gap-10">
                <h2 className="text-lime-300 text-5xl font-bold leading-[48px] tracking-wide">{language === "ENG" ? headers.profile.ENG : headers.profile.TR}</h2>
                <div className="grid grid-cols-[30%,40%,30%] gap-x-10 max-lg:grid-cols-1 max-lg:gap-2 " >
                    <div className="grid">
                        <h3 className="text-white text-3xl font-medium leading-7 max-xl:text-xl" >{language === "ENG" ? headers.basicInfo.ENG : headers.basicInfo.TR}</h3>
                        <div className="grid text-base leading-normal tracking-tight">
                            <div className="grid grid-cols-2 ">
                                <h4 className=" text-lime-300 text-lg font-semibold max-xl:text-base">{language === "ENG" ? headers.birthday.ENG : headers.birthday.TR}</h4>
                                <p className=" text-white font-normal m-0 max-xl:text-base">{profile.birthday}</p>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <h4 className=" text-lime-300 text-lg font-semibold max-xl:text-base">{language === "ENG" ? headers.cityOfResidence.ENG : headers.cityOfResidence.TR}</h4>
                                <p className=" text-white font-normal text-lg m-0 max-xl:text-base">{profile.recidenceCity}</p>
                            </div>
                            <div className="grid grid-cols-2 ">
                                <h4 className=" text-lime-300 text-lg font-semibold max-xl:text-base">{language === "ENG" ? headers.educationStatus.ENG : headers.educationStatus.TR}</h4>
                                <p className=" text-white font-normal text-lg max-xl:text-base ">{profile.educationalStatus.ENG}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <h4 className=" text-lime-300 text-lg font-semibold max-xl:text-base">{language === "ENG" ? headers.preferredRole.ENG : headers.preferredRole.TR}</h4>
                                <p className=" text-white font-normal text-lg max-xl:text-base">{profile.preferredRole}</p>
                            </div>
                        </div>
                    </div>
                    <img className=" mx-auto rounded-[10px] shadow object-cover" src={profile.profilePhotoInProfile} />
                    <div className="grid gap-2 text-white">
                        <h5 className=" text-3xl font-medium leading-[30px] max-xl:text-lg">{language === "ENG" ? headers.aboutMe.ENG : headers.aboutMe.TR}</h5>
                        <div className="grid gap-1">
                            <p className="text-lg font-normal max-xl:text-base">{language === "ENG" ? profile.aboutMeP1.ENG : profile.aboutMeP1.TR}</p>
                            <p className="text-lg font-normal max-xl:text-base">{language === "ENG" ? profile.aboutMeP2.ENG : profile.aboutMeP2.TR}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}