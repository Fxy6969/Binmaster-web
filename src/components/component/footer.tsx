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


export function Footer() {
  return (
    <footer className="backdrop-blur-[50px] border-t p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <Link className="flex items-center gap-2" href="#">
            <Codesandbox className="h-6 w-6" />
            <span className="font-semibold">Binmaster</span>
          </Link>
          <div className="text-gray-500 dark:text-gray-400">
            Most Advanced Automation Utility for Skyblock, Website made by bottom_person (Fxy) & moerat (Zoid).
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 Binmaster. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="#">
            Terms
          </Link>
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}