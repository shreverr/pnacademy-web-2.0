import AnimationContainer from "@/components/global/animation-container";
import { Form } from "@/components/other-components/Form";
import { Sparkles } from "@/components/ui/sparkles";
import { FileCog, Pyramid, School, Server, Shield } from "lucide-react";
import React from "react";
import Image from "next/image";
import { GlowingStarsCard } from "@/components/other-components/glowing-star-card-tab";

const page = () => {
  return (
    <main className="mt-8 flex flex-col  items-center justify-center mx-10 mb-10 gap-4">
      <AnimationContainer delay={0.1}>
        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
          <span>
            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
          <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
          <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
            Educational Institution
            <School className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </span>
        </button>
      </AnimationContainer>

      <div className="flex flex-col 2xl:flex-row items-center gap-4 justify-center w-full">
        <AnimationContainer
          delay={0.2}
          className="hidden lg:flex h-[calc(100vh-11rem)] flex-col rounded-2xl border-muted border-2 min-h-[42rem] 2xl:w-2/3 w-full bg-black overflow-hidden"
        >
          <div className="relative h-80 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
            <Sparkles
              density={400}
              size={1.4}
              direction="top"
              className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
          </div>
          <div className="mx-auto -mt-52 w-screen max-w-2xl relative z-10">
            <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full">
              <Image
                src="/icons/logo.png"
                alt="PNAcademy Logo"
                className="pl-2 invert"
                width={120}
                height={120}
                priority
              />
            </div>
          </div>
          <article className="text-white pt-2 w-2/3 mx-auto block text-center z-10 relative">
            <h1 className="text-center text-5xl text-white font-medium py-3">
              Educational Institution
            </h1>
            <p>
              Support educational institutions with tailored assessments, secure
              proctoring, detailed analytics, and efficient management.
            </p>
          </article>
          <div className="w-full p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <GlowingStarsCard
                title={"Customizable Test Creation"}
                description={
                  "Create and customize tests to suit your institution's requirements with ease."
                }
                icon={<FileCog className="size-5" />}
              />
              <GlowingStarsCard
                title={"Scalable Infrastructure"}
                description={
                  "Scale your infrastructure to accommodate a large number of students and courses."
                }
                icon={<Server className="size-5" />}
              />
              <GlowingStarsCard
                title={"Secure Proctoring Solutions"}
                description={
                  "Ensure the integrity of your assessments with advanced proctoring features."
                }
                icon={<Shield className="size-5" />}
              />
            </div>
          </div>
        </AnimationContainer>
        <AnimationContainer
          delay={0.3}
          className="flex h-[calc(100vh-11rem)] min-h-[42rem] w-full 2xl:w-1/3"
        >
          <Form />
        </AnimationContainer>
      </div>
    </main>
  );
};

export default page;
