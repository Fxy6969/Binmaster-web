"use client"
import { Codesandbox } from 'lucide-react';

import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { BookOpenText } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import Link from "next/link";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

export function MainPage() {
    return (
        <>
            <section className="container flex flex-col items-left-2 justify-center h-screen">
                <Codesandbox className="w-10 h-10" />
                <div className='text-left-2 justify-center '>
                    <h1 className="text-3xl font-semibold leading-tight tracking-tight mr-3 mb-3 md:text-5xl select-none">Experience the Fully Automated <br />Skyblock Experience with Binmaster.</h1>
                    <p className="mb-7 text-lg text-muted-foreground">A 1.8.9 Minecraft Utility Modification optimized for the best automation tools for Hypixel.</p>
                    <div className="flex justify-left gap-2 mb-6">
                        <Button asChild variant="outline" className="mb-6"><Link href="https://binmasterdocs.gitbook.io/binmaster-docs"><BookOpenText className='mr-2 size-4' />Documentation</Link></Button>
                        <Button asChild variant="outline" className="mb-6"><Link href="https://binmaster-bot.mysellix.io/">Purchase<ArrowRight className='ml-2 size-4'/></Link></Button>
                    </div>
                    {/* <div className='flex flex-col justify-center text-center mb-90 items-center'>
                        <h1>Scroll down for more information</h1>
                        <ArrowDown />
                    </div> */}
                </div>
            </section>
        </>
    );
}