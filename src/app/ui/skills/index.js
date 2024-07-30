import SectionHeading from "@/app/ui/sectionHeading"
import Image from 'next/image';

const skills = [
  '/react.svg', '/next-js.svg',
  '/typescript.svg', '/javascript.svg', '/html-5.svg',
  '/aws.svg', '/postgresql.svg', '/tailwind-css.svg',
  '/redux.svg', '/material-ui.svg', '/docker.svg'
]

export default function Skills() {
  return (
    <section id="skills" className="pt-12 scroll-mt-16 lg:scroll-mt-24" aria-label="Skills">
      <div>
        <SectionHeading heading="SKILLS | TECHNOLOGIES" />
        <div className="flex flex-row gap-x-6 flex-wrap justify-center">
          {skills.map((skill, index) => {
            return (
              <Image
                key={skill.concat(index.toString())}
                width={75}
                height={75}
                src={skill}
                alt="Follow us on Twitter"
                className="m-8"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}