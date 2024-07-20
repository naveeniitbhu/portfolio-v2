import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';

const Resume = () => {
  return (
    <div className="mt-12">
      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)"><span>View Full <span className="inline-block">
        Resume
        <ArrowLink />
      </span>
      </span>
      </a>
    </div>
  )
}

export default Resume;
