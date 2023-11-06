import { Images } from "../assets/img/Images";
/* TODO
[ ] Basic Information Refactor need   
*/
export default function Profile() {
    return (
        <div className="bg-[#4731D3] py-[6rem]">
            <div className="flex flex-col w-[70%] mx-auto gap-10 flex-wrap">
                <h2 className="text-lime-300 text-5xl font-bold leading-[48px] tracking-wide">Profile</h2>
                <div className="inline-flex gap-10">
                    <div className="flex flex-col w-[30%]  justify-start gap-10">
                        <h3 className="text-white text-3xl font-medium leading-7">Basic Information</h3>
                        <div className="flex flex-col justify-start items-start text-base leading-normal tracking-tight gap-8">
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold m-0">Doğum Tarihi</h4>
                                <p className=" text-white font-normal m-0">24.03.1996</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold m-0">İkamet Şehri</h4>
                                <p className=" text-white font-normal m-0">Ankara</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold m-0">Eğitim Durumu</h4>
                                <p className=" text-white font-normal m-0">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <h4 className=" text-lime-300 font-semibold m-0">Tercih Ettiği<br/> Rol</h4>
                                <p className=" text-white font-normal m-0">Frontend, UI</p>
                            </div>
                        </div>
                    </div>
                    <img className=" w-[40%]  mx-auto rounded-[10px] shadow object-cover" src={Images.photos.profilePhotoInProfile} />
                    <div className=" flex w-[30%] flex-col gap-8 text-white">
                        <h5 className=" text-3xl font-medium leading-[30px]">About Me</h5>
                        <div className="flex flex-col gap-6 text-lg">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                            <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}