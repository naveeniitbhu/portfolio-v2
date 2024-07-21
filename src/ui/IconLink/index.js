export default function IconLink({ title, icon, link }) {
  return (
    <a className="block hover:text-slate-200" href={link} target="_blank" rel="noreferrer noopener" aria-label={`${title} (opens in a new tab)`} title={title}>
      <span className="sr-only">{title}</span>
      {icon}
    </a>
  )
}