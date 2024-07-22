import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../CalendlyChild"), {
  ssr: false
});

export default function CalendlyDynamic() {
  return (
    <div>
      <Calendly />
    </div>
  );
}