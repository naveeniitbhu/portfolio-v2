// 'use client';

// import { PopupButton } from "react-calendly";

// const PopupButtonCalendly = () => {
//   return (
//     <div className="App">
//       <PopupButton
//         url="https://calendly.com/ngnaveen83/30min"
//         /*
//          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//          */
//         rootElement={document.getElementById("root")}
//         text="Click here to schedule!"
//       />
//     </div>
//   );
// };

// export default PopupButtonCalendly;

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
    <div className="cal_div">
      <PopupButton
        className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        url="https://calendly.com/ngnaveen83/30min"
        rootElement={rootElement}
        text="Schedule Appointment"
      />
    </div>
  );
}