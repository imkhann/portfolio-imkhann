"use client";

import DashboardSection from "../../components/projects/DashboardSection";
import DesignSection from "../../components/projects/DesignSection";
import VideoSection from "../../components/projects/VideoSection";

export default function ProjectsPage() {
  return (
    <main className="pt-16" role="main">
      <DashboardSection />
      <DesignSection />
      <VideoSection />
    </main>
  );
}
