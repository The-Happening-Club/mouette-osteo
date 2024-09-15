import React from "react";
import ServiceSection from "@/components/ServiceSection";

import styles from "@/app/page.module.css"
import HeroSection from "@/components/HeroSection";

export default function Home(){
  return(
    <div className={styles.main}>
      <HeroSection />
      <ServiceSection />
    </div>
  )
}
