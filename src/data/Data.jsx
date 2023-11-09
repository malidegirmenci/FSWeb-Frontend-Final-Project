import { Images } from "../assets/img/Images"
export const data =
{
    headers: {
        skills:{ENG:"Skills", TR:"Yetenekler"},
        profile: { ENG: "Profile", TR: "Profil" },
        projects:{ENG:"Projects", TR:"Projeler"},
        basicInfo:{ENG:"Basic Info", TR:"Temel Bilgiler"},
        birthday:{ENG:"Birthday", TR:"Doğum Tarihi"},
        cityOfResidence:{ENG:"City of Residance", TR:"Yaşadığı Şehir"},
        educationStatus:{ENG:"Education Status",TR:"Eğitim Durumu"},
        preferredRole:{ENG:"Preferred Role",TR:"Tercih Edilen Rol"},
        aboutMe:{ENG:"About Me", TR:"Hakkımda"}

    },
    name: "almila",
    headline: { ENG: "I am a Frontend Developer...", TR: "Ben bir Frontend Geliştiricisiyim..." },
    introduction: { ENG: "...who likes to craft solid and scalable frontend products with great user experiences.", TR: "...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven." },
    profilePhoto: Images.photos.profilePhotoInHero,
    socials: [
        { name: "Github", url: "www.github.com", img: Images.socials.github },
        { name: "Linkedin", url: "www.linkedin.com", img: Images.socials.linkedin }
    ],
    skills: [
        { name: "JavaScript", img: Images.skills.javaScriptLogo, },
        { name: "Node", img: Images.skills.nodeLogo },
        { name: "React", img: Images.skills.reactLogo },
        { name: "VS Code", img: Images.skills.visualStudioLogo },
        { name: "Redux", img: Images.skills.reduxLogo },
        { name: "Figma", img: Images.skills.figmaLogo },
    ],
    profile: {
        birthday: "24.03.1996",
        recidenceCity: "Ankara",
        educationalStatus: { ENG: "Hacettepe Uni. Bachelor of Biology, 2016", TR: "Hacettepe Ünv. Bioloji Lisansı, 2016" },
        preferredRole: "Frontend, UI",
        profilePhotoInProfile: Images.photos.profilePhotoInProfile,
        aboutMeP1: { ENG: "ENG Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.", TR: "TR Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia." },
        aboutMeP2: { ENG: "ENG Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!", TR: "TR Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!" }
    },
    projects: [
        {
            projectName: "Workintech",
            projectImg: Images.projects.projectWorkintech,
            description: {
                ENG: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                TR: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar."
            },
            technologies: ["react", "redux", "vercel"],
            siteURL: "https://www.workintech.com.tr",
            githubURL: "https://github.com/Workintech"
        },
        {
            projectName: "Journey",
            projectImg: Images.projects.projectJourney,
            description: {
                ENG: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                TR: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar."
            },
            technologies: ["react", "redux", "vercel"],
            siteURL: "https://www.journeyapp.com/",
            githubURL: "https://github.com/Workintech"
        },
    ],
    footer: {
        sendMeMsg: { ENG: "Send me a message!", TR: "Bana mesaj gönderin!" },
        message: { ENG: "Got a question or proposal, or just want to say hello? Go ahead.", TR: "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Yaz gönder bana!" },
        mail: "almilasucode@gmail.com",
        socials: [{ url: "www.twitter.com", img: Images.socials.twitter }, { url: "www.codepen.com", img: Images.socials.codepen }, { url: "www.atsign.com", img: Images.socials.atSign }, { url: "www.instagram.com", img: Images.socials.instagram }]
    }
}