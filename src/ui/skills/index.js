import SectionHeading from "@/ui/sectionHeading"
import Image from 'next/image';

const skills = [
  '/react.svg', '/next-js.svg',
  '/typescript.svg', '/javascript.svg', '/html-5.svg',
  '/aws.svg', '/postgresql.svg', '/tailwind-css.svg',
  '/redux.svg', '/material-ui.svg', '/docker.svg'
]

export default function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-8 lg:scroll-mt-24" aria-label="Skills">
      <div>
        <SectionHeading heading="SKILLS | TECHNOLOGIES" />
        <div className="flex flex-row gap-x-6 flex-wrap">
          {skills.map((skill, index) => {
            return (
              <Image
                key={skill.concat(index.toString())}
                width={50}
                height={50}
                src={skill}
                alt="Follow us on Twitter"
                className="m-4"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}