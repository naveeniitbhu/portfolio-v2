'use client';
import React from "react";
import CalendlyDynamic from "./CalendlyDynamic";

export default function Home() {
  return (
    <div>
      <CalendlyDynamic />
      <div id="__calendly_root_element"></div>
    </div>
  )
}