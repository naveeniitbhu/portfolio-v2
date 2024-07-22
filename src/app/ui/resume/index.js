import ArrowLink from '@/app/ui/icons/arrowLink/ArrowLink';

const Resume = () => {
  return (
    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="https://drive.google.com/file/d/1PBsqhzdf4LB8kUuizss_JxL42PLSSiBJ/view?usp=drive_link" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)">
      <span>View Full Resume<span className="inline-block">
        <ArrowLink />
      </span>
      </span>
    </a>
  )
}

export default Resume;
