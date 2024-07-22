'use client'
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyChild() {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__calendly_root_element"));
    }
  }, []);

  return (
    <div className="cal_div pt-8">
      <PopupButton
        className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        url="https://calendly.com/ngnaveen83/30min"
        rootElement={rootElement}
        text="Book a call"
        styles={{ color: 'rgb(94 234 212)', backgroundColor: 'rgb(45 212 191 / 0.1)', padding: '10px 20px' }}
      />
    </div>
  );
}