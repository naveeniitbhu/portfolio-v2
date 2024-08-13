import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';
import Resume from '@/app/ui/resume';
import SectionHeading from "@/app/ui/sectionHeading"
import Image from 'next/image';
import Link from 'next/link'

export default function Projects() {
  const projectsData = [
    {
      title: '2024 - Shivaay Infratech',
      image: '/shivaay.png',
      content: 'Building the website for the company showcasing all its details including facility to upload resumes etc.',
      companyLink: 'https://shivaayinfratech.in/'
    }]
  return (
    <section id="projects" className="lg:pb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Work experience" >
      <SectionHeading heading="PROJECTS" />
      <div>
        <ol className="group/list">
          {projectsData.map((data, index) => {
            return (
              <li className="mb-12" key={data.title}>
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
                      src="/shivaay.png"
                      alt="Follow us on Twitter"
                      className="max-w-max"
                      href={data.companyLink}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-6">{data.title}</p>
                      <h3>
                        <span>{data.content}
                          <ArrowLink />
                        </span>
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