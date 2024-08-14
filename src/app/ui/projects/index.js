import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';
import Resume from '@/app/ui/resume';
import SectionHeading from "@/app/ui/sectionHeading"
import Image from 'next/image';
import Link from 'next/link'

export default function Projects() {
  const projectsData = [
    {
      title: 'Curious JR',
      image: '/curiousjr.png',
      content: 'Ed-Tech platform for teaching coding to kids',
      companyLink: 'https://www.curiousjr.com/',
      highlights: [
        <>
          <span key="patient-portal-description"> Ed-Tech platform for teaching coding to kids.</span>
        </>,
      ]
    },
    {
      image: '/connect-web.png',
      companyLink: 'https://connect.myscp.com/login',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Connect Web:</span>
          <span key="patient-portal-description"> Connect website for communication between doctors and employees.</span>
        </>
      ]
    },
    {
      image: '/connect.png',
      companyLink: 'https://apps.apple.com/us/app/myscp-connect/id1285276892',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Connect App:</span>
          <span key="patient-portal-description"> iOS & android app for scp-health for communication app between doctors and employees.</span>
        </>
      ]
    },
    {
      image: '/care-web.png',
      companyLink: 'https://care.myscp.com/login',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Care Web:</span>
          <span key="patient-portal-description"> Care website for appointment setting with doctor. Also, it enables doctors to see details of all his patients.</span>
        </>
      ]
    },
    {
      image: '/care.png',
      companyLink: 'https://apps.apple.com/us/app/myscp-care/id1485581229',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Care App:</span>
          <span key="patient-portal-description"> iOS & android app for scp-health.</span>
        </>
      ]
    },
    {
      title: 'Shivaay Infratech',
      image: '/shivaay.png',
      companyLink: 'https://shivaayinfratech.in/',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Connect Web:</span><span key="patient-portal-description"> Connect was used for communication between doctors and employees.</span>
        </>
      ]
    },
    {
      title: 'Cubera',
      image: '/cubera.png',
      companyLink: 'https://cubera.co/',
      highlights: [
        <>
          <span className='primary-text-color' key='patient-portal'>Cubera App:</span><span key="patient-portal-description"> Router configuration and data collection company.</span>
        </>
      ]
    }]
  return (
    <section id="projects" className="lg:pb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience" >
      <SectionHeading heading="PROJECTS" />
      <div>
        <ol className="group/list">
          {projectsData.map((data, index) => {
            return (
              <li className="mb-12" key={data.image.concat(index.toString())}>
                <Link
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  href={data.companyLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Website for Shivaay Infratech (opens in a new tab)"
                >
                  <div className="group relative flex gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <Image
                      width={160}
                      height={48}
                      src={data.image}
                      alt="Follow us on Twitter"
                      className="max-w-max"
                      href={data.companyLink}
                    />
                    <div>
                      {data?.title && <p className="text-sm font-semibold leading-6">{data.title}</p>}
                      <h3>
                        {data.highlights.map((details, index) => (
                          <span key={details} className="mt-2 text-sm leading-normal">
                            {details}
                          </span>
                        ))}
                        <ArrowLink />
                      </h3>
                    </div>
                  </div>
                </Link>
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