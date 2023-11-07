import { Images } from "../assets/img/Images"
export const data =
{
    lang: "ENG",
    name: "almila",
    headline: "I am a Frontend Developer...",
    introduction: "...who likes to craft solid and scalable frontend products with great user experiences.",
    profilePhoto: Images.photos.profilePhotoInHero,
    socials: [
        { name: "Github", url: "www.github.com", img: Images.socials.github },
        { name: "Linkedin", url: "www.linkedin.com", img: Images.socials.linkedin }
    ],
    skills: [
        {name:"JavaScript", img:Images.skills.javaScriptLogo,},
        {name:"Node", img:Images.skills.nodeLogo},
        {name:"React", img:Images.skills.reactLogo},
        {name:"VS Code", img:Images.skills.visualStudioLogo},
        {name:"Redux", img:Images.skills.reduxLogo},
        {name:"Figma", img:Images.skills.figmaLogo},
    ],
    profile: {
        birthday: "24.03.1996",
        recidenceCity: "Ankara",
        educationalStatus: "Hacettepe Ünv. Biyoloji Lisans, 2016",
        preferredRole: "Frontend, UI",
        profilePhotoInProfile:Images.photos.profilePhotoInProfile,
        aboutMeP1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        aboutMeP2:"Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
    },
    projects: [
        {
            projectName: "Workintech",
            projectImg: Images.projects.projectWorkintech,
            description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            technologies: ["react", "redux", "vercel"],
            siteURL: "https://www.workintech.com.tr",
            githubURL: "https://github.com/Workintech"
        },
        {
            projectName: "Journey",
            projectImg: Images.projects.projectJourney,
            description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            technologies: ["react", "redux", "vercel"],
            siteURL: "https://www.journeyapp.com/",
            githubURL: "https://github.com/Workintech"
        },
    ],
    footer: {
        mail: "almilasucode@gmail.com",
        socials: [{ url: "www.twitter.com", img: Images.socials.twitter }, { url: "www.codepen.com", img: Images.socials.codepen }, { url: "www.atsign.com", img: Images.socials.atSign }, { url: "www.instagram.com", img: Images.socials.instagram }]
    }
}