"use client";

import { useEffect } from "react";
import DashboardSection from "../../components/projects/DashboardSection";
import DesignSection from "../../components/projects/DesignSection";
import VideoSection from "../../components/projects/VideoSection";

function injectEmbedHTML(containerId: string, html: string) {
  const host = document.getElementById(containerId);
  if (!host) return;
  host.innerHTML = html;
}

function ensureTableauScript() {
  return new Promise<void>((resolve) => {
    const existing = document.getElementById("tableau-api");
    if (existing) return resolve();
    const s = document.createElement("script");
    s.id = "tableau-api";
    s.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

export default function ProjectsPage() {
  useEffect(() => {
    // 1) Dashboard: Konsumsi & Tagihan Air (Isolation Forest)
    injectEmbedHTML(
      "viz1",
      `<div class='tableauPlaceholder' id='viz1763002010821' style='position: relative'>
         <noscript><a href='#'>
           <img alt='Konsumsi dan Tagihan Air per Wilayah Bulan  Tahun  ' src='https://public.tableau.com/static/images/Bu/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz' style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Bu/BusinessIntelligenceDashboardDeteksiAnomaliPolaKonsumsiAirmenggunakanIsoaltionForest_17629204939610/DashboardKonsumsidanTagihanAIr/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    // 2) Dashboard: Praktik Modul 5
    injectEmbedHTML(
      "viz2",
      `<div class='tableauPlaceholder' id='viz1763003574315' style='position: relative'>
         <noscript><a href='#'>
           <img alt='Dashboard ' src='https://public.tableau.com/static/images/Im/ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz' style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Im/ImamMuhannad__Kelompok3_Praktik1_Modul5/Dashboard/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    // 3) Dashboard: Finpro Kelompok 3C
    injectEmbedHTML(
      "viz3",
      `<div class='tableauPlaceholder' id='viz1763003977610' style='position: relative'>
         <noscript><a href='#'>
           <img alt=' ' src='https://public.tableau.com/static/images/Ke/Kelompok3CFinproproject2_17630035054610/Dashboard1/1_rss.png' style='border: none' />
         </a></noscript>
         <object class='tableauViz' style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='Kelompok3CFinproproject2_17630035054610/Dashboard1' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='no' />
           <param name='static_image' value='https://public.tableau.com/static/images/Ke/Kelompok3CFinproproject2_17630035054610/Dashboard1/1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' />
           <param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='en-US' />
         </object>
       </div>`
    );

    let resizeAll: (() => void) | null = null;

    ensureTableauScript().then(() => {
      const sizer1 = () => {
        const div = document.getElementById(
          "viz1763002010821"
        ) as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName("object")[0] as
          | HTMLElement
          | undefined;
        if (!obj) return;
        if (div.offsetWidth > 500) {
          obj.style.width = "1000px";
          obj.style.height = "827px";
        } else {
          obj.style.width = "100%";
          obj.style.height = "1477px";
        }
        obj.style.display = "block";
      };

      const sizer2 = () => {
        const div = document.getElementById(
          "viz1763003574315"
        ) as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName("object")[0] as
          | HTMLElement
          | undefined;
        if (!obj) return;
        if (div.offsetWidth > 500) {
          obj.style.width = "100%";
          obj.style.height = `${Math.round(div.offsetWidth * 0.75)}px`;
        } else {
          obj.style.width = "100%";
          obj.style.height = "1927px";
        }
        obj.style.display = "block";
      };

      const sizer3 = () => {
        const div = document.getElementById(
          "viz1763003977610"
        ) as HTMLElement | null;
        if (!div) return;
        const obj = div.getElementsByTagName("object")[0] as
          | HTMLElement
          | undefined;
        if (!obj) return;
        if (div.offsetWidth > 500) {
          obj.style.minWidth = "1169px";
          obj.style.maxWidth = "100%";
          obj.style.minHeight = "877px";
          obj.style.maxHeight = `${Math.round(div.offsetWidth * 0.75)}px`;
        } else {
          obj.style.width = "100%";
          obj.style.minHeight = "2050px";
          obj.style.maxHeight = `${Math.round(div.offsetWidth * 1.77)}px`;
        }
        obj.style.display = "block";
      };

      resizeAll = () => {
        sizer1();
        sizer2();
        sizer3();
      };

      resizeAll();
      window.addEventListener("resize", resizeAll);
    });

    return () => {
      if (resizeAll) {
        window.removeEventListener("resize", resizeAll);
      }
    };
  }, []);

  return (
    <main className="pt-16" role="main">
      <DashboardSection />
      <DesignSection />
      <VideoSection />
    </main>
  );
}
