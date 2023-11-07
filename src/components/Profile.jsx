import { useSelector } from "react-redux";

/* TODO
[ ] Basic Information Refactor need   
*/
export default function Profile() {
    const {aboutMeP1,aboutMeP2,profilePhotoInProfile,birthday,recidenceCity,educationalStatus,preferredRole} = useSelector((state) => state.data.profile)
    return (
        <div className="bg-[#4731D3] py-[6rem]">
            <div className="flex flex-col w-[70%] mx-auto gap-10 flex-wrap">
                <h2 className="text-lime-300 text-5xl font-bold leading-[48px] tracking-wide">Profile</h2>
                <div className="inline-flex gap-10">
                    <div className="flex flex-col w-[32%]  justify-start gap-10">
                        <h3 className="text-white text-3xl font-medium leading-7">Basic Information</h3>
                        <div className="flex flex-col justify-start items-start text-base leading-normal tracking-tight gap-8">
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">Birthday</h4>
                                <p className=" text-white font-normal m-0">{birthday}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">City of Residance</h4>
                                <p className=" text-white font-normal m-0">{recidenceCity}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">Education Status</h4>
                                <p className=" text-white font-normal ">{educationalStatus}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold">Preferred Role<br /> Rol</h4>
                                <p className=" text-white font-normal ">{preferredRole}</p>
                            </div>
                        </div>
                    </div>
                    <img className=" w-[36%]  mx-auto rounded-[10px] shadow object-cover" src={profilePhotoInProfile} />
                    <div className=" flex w-[32%] flex-col gap-8 text-white">
                        <h5 className=" text-3xl font-medium leading-[30px]">About Me</h5>
                        <div className="flex flex-col gap-6  ">
                            <p className="text-lg font-normal">{aboutMeP1}</p>
                            <p className="text-lg font-normal">{aboutMeP2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}