"use client"

import Link from "next/link"
import * as React from "react"
import "../../app/style.css"
import { Codesandbox } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaDiscord, FaShoppingBasket } from "react-icons/fa";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"


export function Navbar() {
  const { setTheme } = useTheme()

  return (
    <div className="navbar backdrop-blur-[50px] border">
      <Link href="/">
        <Codesandbox />
      </Link>

      <nav className="flex gap-3 items-center">
        <Button asChild variant="ghost" className="">
          <Link href="https://binmasterdocs.gitbook.io/binmaster-docs">Documentation</Link>
        </Button>

        <Button asChild variant="outline" className="discord-button">
          <Link href="https://discord.gg/binmaster"><FaDiscord /></Link>
        </Button>

        <Button variant="outline" className="discord-button">
        <Link href="https://binmaster-bot.mysellix.io/"><FaShoppingBasket /></Link>
        </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
     </nav>
    </div>
  )
}