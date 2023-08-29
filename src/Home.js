import React, { useEffect, useCallback } from "react";
import Homelayout from "./components/Homelayout/Homelayout";
import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import DoctorExpert from "./components/Home/DoctorExpert";
import DoctorSection from "./components/Home/DoctorSection";
import ExplorHealth from "./components/Home/ExplorHealth";
import FAQ from "./components/Home/FAQ";
import HealthPackage from "./components/Home/HealthPackage";
import HealthQuerys from "./components/Home/HealthQuerys";
import HospitalSection from "./components/Home/HospitalSection";
import InternationalPlatform from "./components/Home/InternationalPlatform";
import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";
import Testimonials from "./components/Home/Testimonials";
import WorldMap from "./components/Home/WorldMap";
import { useDispatch, useSelector } from "react-redux";
import { fetchComponents } from "./Api/action/ComponentsActions";
import { Helmet } from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();
  const { components } = useSelector((state) => state.Cdata);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchComponents());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);


  const schema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    name: "Medflick",
    url: "https://medflick.com/",
    sameAs: [
      "https://in.linkedin.com/in/medflick",
      "https://www.instagram.com/mymedflick/",
      "https://twitter.com/medflick",
      "https://www.facebook.com/medflick/",
    ],
    logo: "https://api.medflick.com/setting/64ca31e26e7321.png",
    description:
      "Medflick is changing the way people access and interact with medical knowledge. We deliver you a complete combination of healthcare information, empowering you to make well-informed decisions about your health and well-being. We are present here with a strong emphasis on improving people's lives through credible healthcare knowledge. Discover Reliable Information Easily",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-213 Sector - 63",
      addressLocality: "Noida",
      postalCode: "201301",
      addressCountry: "India",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What exactly is Medflick and how does it function?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medflick is a website committed to giving trustworthy medical information. It provides a diverse range of healthcare content from respected experts in a variety of medical sectors.",
        },
      },
      {
        "@type": "Question",
        name: "Is Medflick's medical information reliable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Medflick is dedicated to providing accurate and genuine medical information. We work with top healthcare experts and practitioners to curate the most relevant and up-to-date content, ensuring that the information you receive is accurate.",
        },
      },
      {
        "@type": "Question",
        name: "Can I communicate with medical professionals on Medflick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! Medflick supports user participation and interaction. You can join forums, share your stories, ask questions, and learn from people who have encountered similar health challenges. It is a platform that promotes information exchange and community assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Medflick available on all platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Medflick is intended to be used on a variety of devices. You can use your desktop computer, laptop, tablet, or smartphone to access our platform, allowing you to study medical information and connect with the community whenever and wherever you want.",
        },
      },
      {
        "@type": "Question",
        name: "Are the Hospitals or clinics accredited?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all the Hospitals and Clinics that we are associated with are accredited and we'll-recognized, known to offer the finest surgical interventions & treatments for a wide range of medical conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get second opinion on Medflick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can consult our doctors for getting an expert opinion on your diagnosis and treatment. For this, you need to book an online consultation and share your medical history with our team.",
        },
      },
      {
        "@type": "Question",
        name: "How can I plan my treatment in India with Medflick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To plan your treatment in India with Medflick, you need to book an online consultation and share your medical history with our team. Our experts with assess the same and get in touch to plan your treatment.",
        },
      },
    ],
  };

  return (
    <>
       {components &&
        components.map((e) => (
          <Helmet key={e.id}>
            <title>{e.title}</title>

            <meta name="description" content={e.description} />

            <link rel="canonical" href="https://medflick.com" />
            <meta property="og:title" content={e.title} />

            <meta property="og:description" content={e.description} />

            <meta property="og:url" content="https://medflick.com" />

            <meta property="og:type" content="website" />

            <meta property="og:locale" content="en" />

            <meta property="og:site_name" content="Medflick" />

            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            <script type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
          </Helmet>
        ))}
      <main>
        <Homelayout>
          <Section1 />
          <Section2 />
          <Section3 />
          <HospitalSection />
          <DoctorExpert />
          <ExplorHealth />
          <InternationalPlatform />
          <DoctorSection />
          <HealthPackage />
          <HealthQuerys />
          <Testimonials />
          <About />
          <WorldMap />
          <FAQ />
          <Blog />
        </Homelayout>
      </main>
    </>
  );
};

export default Home;
