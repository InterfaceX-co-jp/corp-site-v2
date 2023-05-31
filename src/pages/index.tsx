import DefaultLayout from "@/layouts/DefaultLayout";
import CallToActionWithAnnotation from "@/components/Hero/CTAWithAnnotation";
import About from "@/components/Features/About";
import Businesses from "@/components/Features/Businesses";
import { Spacer } from "@chakra-ui/react";

export default function Home() {
  return (
    <DefaultLayout>
      <CallToActionWithAnnotation />
      <About />
      <Spacer mt={12} />
      <Businesses />
    </DefaultLayout>
  );
}
