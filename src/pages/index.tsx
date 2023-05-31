import DefaultLayout from "@/layouts/DefaultLayout";
import CallToActionWithAnnotation from "@/components/Hero/CTAWithAnnotation";
import About from "@/components/Features/About";

export default function Home() {
  return (
    <DefaultLayout>
      <CallToActionWithAnnotation />
      <About />
    </DefaultLayout>
  );
}
