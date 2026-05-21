import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Quality from "@/components/Quality";
import Areas from "@/components/Areas";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { useFadeUp } from "@/hooks/useFadeUp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ClearSpace Pro | Birmingham Property Cleaning Services" },
      {
        name: "description",
        content:
          "Birmingham-based specialists in Airbnb turnovers, end-of-tenancy, void, and deep cleaning for landlords, letting agents, and short-let hosts.",
      },
      { property: "og:title", content: "ClearSpace Pro | Birmingham Property Cleaning" },
      {
        property: "og:description",
        content:
          "Reliable, structured property cleaning across Birmingham — checklist-based, photo verified, fast turnaround.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",
      },
    ],
  }),
});

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeUp(ref);

  return (
    <div ref={ref}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Quality />
        <Areas />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
