import DefaultLayout from "@/layouts/DefaultLayout";
import MainVisual from "@/components/Hero/MainVisual";
import About from "@/components/Features/About";
import Businesses from "@/components/Features/Businesses";
import { Spacer } from "@chakra-ui/react";
import Contact from "@/components/Features/Contact";

export default function Home() {
  return (
    <DefaultLayout>
      <MainVisual />
      <About />
      <Spacer mt={12} />
      <Businesses />
      <Spacer mt={12} />
      <Contact />
    </DefaultLayout>
  );
}
