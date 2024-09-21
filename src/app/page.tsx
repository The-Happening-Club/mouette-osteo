import React from "react";
import styles from "@/app/page.module.css"

import HeroSection from "@/components_2/HeroSection_2";
import ServiceSection from "@/components_2/ServiceSection_2";

export default function Home(){
  return(
    <div className={styles.main}>
      <HeroSection />
      <ServiceSection />
    </div>
  )
}
