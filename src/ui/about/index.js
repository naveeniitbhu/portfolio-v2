import SectionHeading from "@/ui/sectionHeading"

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-4 lg:mb-4 lg:scroll-mt-24" aria-label="About">
      <SectionHeading heading="ABOUT" />
      <div className="flex flex-col gap-y-6 text-justify">
        <p className="leading-normal secondary-text-color">
          As a seasoned <span className="primary-text-color">React, </span><span className="primary-text-color">React Native</span> and <span className="primary-text-color">Node developer</span>,
          I have successfully navigated the technical landscapes
          of both multinational corporations and dynamic startups.
          My work in MNCs involved collaborating with diverse,
          cross-functional teams to deliver robust, scalable web applications,
          ensuring seamless integration and high performance.
        </p>
        <p className="leading-normal secondary-text-color">
          In the startup world, I thrived in fast-paced, <span className="primary-text-color">agile environments</span>,
          taking on various roles to drive projects from inception to deployment.
          My expertise in <span className="primary-text-color">React, Next.js</span>  allows me to craft intuitive, responsive user interfaces,
          while my proficiency in Node.js enables the development of efficient server-side applications.
          This blend of <span className="primary-text-color">front-end</span> and <span className="primary-text-color">back-end</span> skills has equipped me with a comprehensive
          understanding of full-stack development, making me a versatile and adaptable developer
          capable of tackling complex challenges and delivering innovative solutions across different business contexts.
        </p>
      </div>
    </section>
  )
}