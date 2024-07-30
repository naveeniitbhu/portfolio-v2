import Experience from "@/app/ui/experience/index";
import About from "@/app/ui/about";
import IconLink from "@/app/ui/IconLink";
import GithubIcon from "@/app/ui/icons/github/Github";
import LinkedinIcon from "@/app/ui/icons/linkedin/Linkedin";
import Resume from "@/app/ui/resume";
import Skills from "@/app/ui/skills";
import CalendlyMain from "@/app/ui/calendly"
import Image from 'next/image';


export default function Home() {
  const iconLinkdata = [
    {
      title: 'Github',
      icon: <GithubIcon />,
      link: "https://github.com/naveeniitbhu"
    },
    {
      title: 'Linkedin',
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/naveengargbhu/"
    }
  ]

  const categories = [{
    title: 'About',
    href: '#about'
  },
  {
    title: 'Skills | Technologies',
    href: '#skills'
  },
  {
    title: 'Experience',
    href: '#experience'
  },
  {
    title: 'Projects',
    href: '#projects'
  }]

  return (
    <div>
      <div style={{ position: 'relative', height: '100vh', width: '100wh' }}>
        <Image
          key="/react.svg"
          fill={true}
          src="/slide1.jpg"
          alt="Follow us on Twitter"
        />
      </div>
      <div className="px-40">
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
    // <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    //   <div className="lg:flex lg:justify-between lg:gap-4">
    //     <Image
    //       key="/react.svg"
    //       layout="fill"
    //       src="/slide1.jpg"
    //       alt="Follow us on Twitter"
    //     />
    //     {/* <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
    //       <div>
    //         <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
    //           <a href="/">Naveen Garg</a>
    //         </h1>
    //         <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
    //           Senior Software Engineer
    //         </h2>
    //         <p className="mt-4 max-w-xs leading-normal secondary-text-color">
    //           I build pixel-perfect, engaging, and accessible digital experiences. I specialize in React.js, React Native and Node.js.
    //         </p>
    //         <nav className="nav hidden lg:block" aria-label="In-page jump links">
    //           <ul className="mt-16 w-max">
    //             {categories.map((category) => (
    //               <li key={category.title}>
    //                 <a className="group flex items-center py-3 active" href={category.href}>
    //                   <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
    //                   </span>
    //                   <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
    //                     {category.title}
    //                   </span>
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </nav>
    //       </div>
    //       <CalendlyMain />
    //       <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
    //         {
    //           iconLinkdata.map((iconData, index) => (
    //             <li className="mr-5 text-xs shrink-0" key={index}>
    //               <IconLink key={index} title={iconData.title} icon={iconData.icon} link={iconData.link} />
    //             </li>
    //           ))
    //         }
    //         <li><Resume /></li>
    //       </ul>
    //     </header> */}
    //     <main className="lg:w-1/2 lg:pt-4">
    //       <About />
    //       <Skills />
    //       <Experience />
    //     </main>
    //   </div>
    // </div>
  );
};