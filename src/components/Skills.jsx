import { Images } from '../assets/img/Images'

export default function Skills() {
    return (
        <div className='flex w-[80%] mx-auto gap-16 justify-evenly pb-10'>
            <h2 className='text-indigo-700 text-5xl font-bold tracking-wide'>Skills</h2>
            <div className='flex flex-col gap-9'>
                <div className='flex gap-6  items-center'>
                    <img src={Images.skills.javaScriptLogo} alt='javaScript Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>JAVASCRIPT</h3>
                </div>
                <div className='flex gap-6  items-center'>
                    <img src={Images.skills.reactLogo} alt='react Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>REACT</h3>
                </div>
                <div className='flex gap-6  items-center'>
                    <img src={Images.skills.reduxLogo} alt='redux Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>REDUX</h3>
                </div>
            </div>
            <div className='flex flex-col gap-9'>
                <div className='flex gap-6 items-center'>
                    <img src={Images.skills.nodeLogo} alt='node Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>NODE</h3>
                </div>
                <div className='flex gap-6  items-center'>
                    <img src={Images.skills.visualStudioLogo} alt='visual studio Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>VS CODE</h3>
                </div>
                <div className='flex gap-6  items-center'>
                    <img src={Images.skills.figmaLogo} alt='figma Logo' />
                    <h3 className='text-neutral-500 text-2xl font-medium uppercase leading-9'>FIGMA</h3>
                </div>
            </div>
        </div>
    )
}