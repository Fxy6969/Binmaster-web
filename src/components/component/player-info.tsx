"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Send } from 'lucide-react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


export function Search() {
  return (
    <>
       <div className="flex flex-col items-center">
        <Input className="w-1/6 transition-all focus:w-1/3" type="username" placeholder="Enter your Minecraft Username / UUID" />
       </div>
    </>
  );
}
