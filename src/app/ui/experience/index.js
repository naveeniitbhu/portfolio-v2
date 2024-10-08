import Tag from '@/app/ui/tag';
import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';
import SectionHeading from "@/app/ui/sectionHeading"

export default function Experience() {
  const experienceData = [
    {
      title: 'Senior Software Engineer',
      company: 'CBS',
      duration: 'August 2023 - Present',
      highlights: [
        <>
          <span className='primary-text-color' key='company-portal'>Company Portal:</span><span key="company-portal-description"> I worked with the team on various projects. First is the company portal myscphealth.com
            which can be accessed via okta only. This portal was created using Next.js, material UI etc.
            I created various features here. One is medical director reports which allows an individual to submit reports
            and another individual can review it. Second is creating resources section and bringing all our resources under
            one roof. This included pdf reports, videos etc. Third is creating a section for getting all the facilities
            associated with an individual and allowing the individual to fetch and submit and necessary info to it.</span>
        </>,
        <>
          <span className='primary-text-color' key='care-app'>Care Mobile App and Web:</span><span key="care-description"> I also worked on &quot;Care&quot;
            which was used to schedule any appointments with a doctor. The doctor can also see all the info corresponding to his facility here. This app was built for use of doctors only. They could reschedule, see history of patients along with any other details.</span>
        </>,
        <>
          <span className='primary-text-color' key='connect-app'>Patient Portal:</span><span key="connect-description"> Another project I worked on was patient portal.
            This was primarily used by patients for booking appointment in a facility. They could see the availability of doctors and so book a slot accordingly.</span>
        </>,
        <>
          <span className='primary-text-color' key='patient-portal'>Connect Mobile App and Web:</span><span key="patient-portal-description"> Connect was used for communication between doctors and employees.
            They could coordinate, get details and do any other task via this application.</span>
        </>,
        <>
          <span className='primary-text-color' key='patient-portal'>SCP Backend:</span><span key="patient-portal-description"> A centralized backend for all the mobile applications and web applications.</span>
        </>,
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js', 'React Native', 'Xcode', 'Android Studio'],
      companyLink: 'https://scphealth.com/'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Tekion',
      duration: 'May - August 2023',
      highlights: [
        `Worked on a web application for HONDA. This web application allows
        an individual to purchase a car completely online. From documentation to payment(including leasing if any)
        , everything was taken care in this web application. A user could also order any additional accessories 
        via this application.`,
        `I worked in building the frontend for various pages(accessories, payment, delivery etc.). I also worked on
        creating generic elements to be used across multiple projects. Next.js was used for this web application.
        For state management, we were using Context API.`,
        `Collaborated with designers and engineers to streamline the creation of various elements and streamline the process for other individuals in our tema.`
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js', 'Context'],
      companyLink: 'https://tekion.com/'
    },
    {
      title: 'Software Engineer',
      company: 'Cubera',
      duration: 'August - May 2023',
      highlights: [
        `Built a mobile application using React Native and Redux Saga. 
        This app allowed an individual to configure a cubera router under 60secs. 
        Also, certain data of the individual was collected by this app which will be monetised through advertisements`,
        `Built the company website using Next.js`,
        `Wrote scripts to streamline building the android apk.
        I also took care of setting up code-signing, provisioning profile, creating identifiers,
        certificates etc. required to publish the iOS apps.`

      ],
      technologies: ['React Native', 'Typescript', 'Redux', 'Next.js'],
      companyLink: 'https://cubera.co/'
    },
    {
      title: 'Software Engineer',
      company: 'CuriousJr',
      duration: 'November - July 2022',
      highlights: [
        `CuriousJr is a platform for teaching coding to kids via mobile.
        I built the company website using React and Redux.
        All the best practices for website development like SSR, no multiple 
        render, adding sitemaps for SEO and others have
        been used while developing this website.`,
        `Worked on creating dashboards for internal use of the team. 
        This was used to upload images, short videos to curiousjr app`,
        `Worked on creating frameworks to be used with webview in CuriouJr app. 
        This was required as code written by an individual in this app was executed using this framework.`,
      ],
      technologies: ['React', 'Typescript', 'Redux', 'React Native', 'SSR'],
      companyLink: 'https://www.curiousjr.com/'
    },
    {
      title: 'Software Engineer',
      company: 'Idea To Startup',
      duration: 'July 2020 - October 2021',
      highlights: [
        `Worked on a project here named "Civol". This is a platform for users to interact and discuss various issues
        through short videos (less than 90 secs). People can reply to others through videos
        only and can also start a separate debate. There is also a rating system so that
        users can rate others’ videos.`,
        `Upgraded the complete project from material-ui version-1 to version-4. This was a
        substantial change as some components were removed in version-4 and had to be
        rebuilt using the latest one.`
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Redux', 'React Native', 'Postgres'],
      companyLink: 'https://tekion.com/'
    },
    {
      title: 'Freelancer - Software Engineer',
      duration: 'Jan - June 2020',
      highlights: [
        `Designed a website where one can detect face from images using
        Face Recognition API from Clarifai (www.clarifai.com).`,
      ],
      technologies: ['JavaScript', 'React', 'Node'],
      companyLink: 'https://tekion.com/'
    }]
  return (
    <section id="experience" className="pt-12 scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience" >
      <SectionHeading heading="EXPERIENCE" />
      <div>
        <ol className="group/list">
          {experienceData.map((data) => {
            return (
              <li className="mb-12" key={data.duration}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                    {data.duration}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={data.companyLink} target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                          </span>
                          <span>
                            {data.title}
                            {data.company && <span className="inline-block">, {data.company}</span>}
                            <ArrowLink />
                          </span>
                        </a>
                      </div>
                    </h3>
                    {data.highlights.map((details, index) => (
                      <p key={details} className="mt-2 text-sm leading-normal secondary-text-color">
                        {details}
                      </p>
                    ))}
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {data.technologies.map((tag) => (
                        <li className="mr-1.5 mt-2" key={tag}>
                          <Tag tag={tag} />
                        </li>)
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section >
  )
}