import React from "react";
import Landing from "../components/Home/Landing";
import Companies from "../components/Home/Companies";
import HAbout from "../components/Home/HAbout";
import Testimonials from "../components/Home/Testimonials";
import HCourses from "../components/Home/HCourses";
import HTabRouteMap from "../components/Home/HTabRouteMap";

export default function Home() {
  return (
    <div>
      <Landing />
      <HAbout/>
      <Companies/>
      <Testimonials/>
      <HTabRouteMap/>
    </div>
  );
}
