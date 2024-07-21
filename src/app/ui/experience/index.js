import Tag from '@/app/ui/tag';
import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';
import Resume from '@/app/ui/resume';

export default function Experience() {
  const experienceData = [
    {
      title: 'Senior Software Engineer',
      company: 'CBS',
      duration: 'August 2023 - Present',
      highlights: [
        'Built custom Tumblr themes for various advertising agencies',
        'Built user interfaces for our customers using Next.js and React',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intuitive interfaces',
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://tekion.com/'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Tekion',
      duration: 'May - August 2023',
      highlights: [
        'Built a web application for managing Korok seeds using the Spotify API',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intu'
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://tekion.com/'
    },
    {
      title: 'Software Engineer',
      company: 'Cubera',
      duration: 'August - May 2023',
      highlights: [
        'Built a web application for managing Korok seeds using the Spotify API',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intu'
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://cubera.co/'
    },
    {
      title: 'Software Engineer',
      company: 'CuriousJr',
      duration: 'November - August 2022',
      highlights: [
        'Built a web application for managing Korok seeds using the Spotify API',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intu'
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://www.curiousjr.com/'
    },
    {
      title: 'Software Engineer',
      company: 'Idea To Startup',
      duration: 'July 2021 - October 2022',
      highlights: [
        'Built a web application for managing Korok seeds using the Spotify API',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intu'
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://tekion.com/'
    },
    {
      title: 'Freelancer - Software Engineer',
      duration: 'Jan - July 2021',
      highlights: [
        'Built a web application for managing Korok seeds using the Spotify API',
        'Worked on various projects including a digital product studio',
        'Collaborated with designers and engineers to create accessible and intu'
      ],
      technologies: ['JavaScript', 'Typescript', 'React', 'Next.js'],
      companyLink: 'https://tekion.com/'
    }]
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience" >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
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
                    <p className="mt-2 text-sm leading-normal">
                      {data.highlights}
                    </p>
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
        <div className="mt-12">
          <Resume />
        </div>
      </div>
    </section >
  )
}