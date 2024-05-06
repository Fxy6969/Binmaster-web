'use client';
import { Navbar } from "@/components/component/navbar";
import { MainPage } from "@/components/component/main";
import { Cards } from "@/components/component/cards"
import { Globe }  from "@/components/magicui/globe";
import { Calendar } from "@/components/ui/calendar";
import { Footer } from "@/components/component/footer";

import { ArrowDown } from 'lucide-react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bentogrid";
import Marquee from "@/components/magicui/marquee";
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
 
const files = [
  {
    name: "Rotation Checked!",
    body: "Rotation Check Detected, Responding Now!",
  },
  {
    name: "Player Spectating!",
    body: "Player Example-Player has been staring around your area for 25 seconds.",
  },
  {
    name: "Player Following",
    body: "Player Example-Player has been following you for 15 seconds!",
  },
  {
    name: "Mention Detected!",
    body: "Player Example-Player has mentioned you! Message: Hes Macroing. You can respond through the console commands.",
  },
  {
    name: "Teleport Detected!",
    body: "You Have been Teleported, Responding now.",
  },
];
 
const features = [
  {
    Icon: FileTextIcon,
    name: "Watchdog/Staff Checks Protection",
    description: "We automatically detect and respond in a human way to Staff-Checks, Smooth Rotations, Responding in Chat and many more.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: InputIcon,
    name: "Highly Configurable",
    description: "Configurability and Customization is our top priority in the Client.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Slayer</CommandItem>
            <CommandItem>Combat</CommandItem>
            <CommandItem>Config</CommandItem>
            <CommandItem>Path</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Availability World Wide",
    description: "No matter where you are in the World Binmaster is available for you, Binmaster can be hosted on a Cloud (VPS) which means you can configure and setup Binmaster through your Phone!",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Globe className="top-0 h-[600px] w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105 sm:left-40" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Frequent Updates",
    description: "Our Team is always active and are always working on Improving the Client.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

import WebGLComponent from './app';
import "./style.css"

export default function Home() {
  return (
    <>
    <div className="fa">
      <div className="parent-container">
        <WebGLComponent />
      </div>
      <Navbar />
      <MainPage />
      <div className="flex justify-center max-w-[1300px] mx-auto mb-80">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
    <Footer />
    </div>
    </>
  );
}
