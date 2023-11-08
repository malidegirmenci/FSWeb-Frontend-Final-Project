import { useSelector } from "react-redux";

/* TODO
[ ] Basic Information Refactor need   
*/
export default function Profile() {
    const {profile, headers} = useSelector((state) => state.data)
    const language = useSelector((state) => state.language);
    return (
        <div className="bg-[#4731D3] py-[6rem]">
            <div className="flex flex-col w-[70%] mx-auto gap-10 flex-wrap">
                <h2 className="text-lime-300 text-5xl font-bold leading-[48px] tracking-wide">{language === "ENG" ? headers.profile.ENG : headers.profile.TR}</h2>
                <div className="inline-flex gap-10">
                    <div className="flex flex-col w-[32%]  justify-start gap-10">
                        <h3 className="text-white text-3xl font-medium leading-7">{language === "ENG" ? headers.basicInfo.ENG : headers.basicInfo.TR}</h3>
                        <div className="flex flex-col justify-start items-start text-base leading-normal tracking-tight gap-8">
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">{language === "ENG" ? headers.birthday.ENG : headers.birthday.TR}</h4>
                                <p className=" text-white font-normal m-0">{profile.birthday}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">{language === "ENG" ? headers.cityOfResidence.ENG : headers.cityOfResidence.TR}</h4>
                                <p className=" text-white font-normal m-0">{profile.recidenceCity}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">{language === "ENG" ? headers.educationStatus.ENG : headers.educationStatus.TR}</h4>
                                <p className=" text-white font-normal ">{profile.educationalStatus.ENG}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">{language === "ENG" ? headers.preferredRole.ENG : headers.preferredRole.TR}</h4>
                                <p className=" text-white font-normal ">{profile.preferredRole}</p>
                            </div>
                        </div>
                    </div>
                    <img className=" w-[36%]  mx-auto rounded-[10px] shadow object-cover" src={profile.profilePhotoInProfile} />
                    <div className=" flex w-[32%] flex-col gap-8 text-white">
                        <h5 className=" text-3xl font-medium leading-[30px]">{language === "ENG" ? headers.aboutMe.ENG : headers.aboutMe.TR}</h5>
                        <div className="flex flex-col gap-6  ">
                            <p className="text-lg font-normal">{language === "ENG" ? profile.aboutMeP1.ENG : profile.aboutMeP1.TR}</p>
                            <p className="text-lg font-normal">{language === "ENG" ? profile.aboutMeP2.ENG : profile.aboutMeP2.TR}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}