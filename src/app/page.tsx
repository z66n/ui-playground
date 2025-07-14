// src/app/page.tsx (or wherever you’d like the demo to live)
"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RippleButton } from '@/components/animate-ui/buttons/ripple'

const CODES = {
  Cursor: `// Copy and paste the code into .cursor/mcp.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://animate-ui.com/r/registry.json"
      }
    }
  }
}`,
  Windsurf: `// Copy and paste the code into .codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://animate-ui.com/r/registry.json"
      }
    }
  }
}`,
};

export default function DemoPage() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8 sm:p-20 font-geist">
        {/* --- Header ------------------------------------------------------- */}
        <header className="flex flex-col items-center gap-6">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={180}
            height={38}
            priority
            className="dark:invert"
          />
          <h1 className="text-3xl font-semibold tracking-tight">
            shadcn/ui × Next.js Demo
          </h1>
        </header>

        {/* --- Tabs --------------------------------------------------------- */}
        <Tabs defaultValue="buttons" className="w-full max-w-lg">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="form">Form Inputs</TabsTrigger>
            <TabsTrigger value="dialog">Dialog</TabsTrigger>
            <TabsTrigger value="accordion">Accordion</TabsTrigger>
          </TabsList>

          {/* –– Buttons tab –– */}
          <TabsContent value="buttons">
            <Card>
              <CardHeader className="text-lg font-medium">Buttons</CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">I'm a tooltip 🎉</TooltipContent>
                </Tooltip>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                All variants come from <code>&nbsp;@/components/ui/button</code>.
              </CardFooter>
            </Card>
          </TabsContent>

          {/* –– Form tab –– */}
          <TabsContent value="form">
            <Card>
              <CardHeader className="text-lg font-medium">Form Inputs</CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="you@example.com" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="newsletter">Subscribe</Label>
                  <Checkbox id="newsletter" />
                </div>

                <Separator />

                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="mode">Dark Mode</Label>
                  <Switch id="mode" />
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                Combine with react-hook-form or zod for validation.
              </CardFooter>
            </Card>
          </TabsContent>

          {/* –– Dialog tab –– */}
          <TabsContent value="dialog">
            <Card>
              <CardHeader className="text-lg font-medium">Dialog</CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open dialog</Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Super simple</DialogTitle>
                      <DialogDescription>
                        Dialogs render at the end of <code>body</code> via Portal.
                      </DialogDescription>
                    </DialogHeader>

                    <p className="leading-relaxed">
                      You can place any content here — forms, confirmations,
                      etc. Everything comes with sensible accessibility
                      defaults.
                    </p>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button">Got it</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Accordion tab –– */}
          <TabsContent value="accordion">
            <Card>
              <CardHeader className="text-lg font-medium">Accordion</CardHeader>
              <CardContent>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with sleek
                      design. Built with premium materials, it offers unparalleled
                      performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and an
                      intuitive user interface designed for both beginners and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier partners.
                      Standard delivery takes 3-5 business days, while express shipping
                      ensures delivery within 1-2 business days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track your
                      shipment in real-time through our dedicated tracking portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day return
                      policy. If you&apos;re not completely satisfied, simply return the
                      item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return shipping and
                      full refunds processed within 48 hours of receiving the returned
                      item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Link href="/animate-ui">
          <RippleButton>Animate UI</RippleButton>
        </Link>

        {/* --- Footer ------------------------------------------------------- */}
        <footer className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="https://ui.shadcn.com" className="hover:underline" target="_blank">
            shadcn/ui docs
          </a>
          <a href="https://nextjs.org" className="hover:underline" target="_blank">
            Next.js docs
          </a>
          <a href="https://github.com/shadcn/ui" className="hover:underline" target="_blank">
            GitHub ↗
          </a>
        </footer>
      </div>
    </TooltipProvider>
  );
}
