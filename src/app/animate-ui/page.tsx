'use client';
 
import * as React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/components/animate-ui/components/tabs';
import { Label } from '@/components/ui/label';
import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import { ManagementBar } from '@/components/animate-ui/ui-elements/management-bar';
import { File, Folder, Files } from '@/components/animate-ui/components/files';
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
<div className="w-full max-w-lg">
  <CodeTabs lang="json" codes={CODES} />
  
</div>


export default function AnimateUIDemo() {
  return (
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
        Animate UI × Next.js Demo
        </h1>
      </header>

      <Tabs defaultValue="account" className="w-full max-w-lg bg-muted rounded-lg">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="code-tabs">Code</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
        </TabsList>
  
        <TabsContents className="mx-1 mb-1 -mt-2 rounded-sm h-full bg-background">
          <TabsContent value="account" className="space-y-6 p-6">
            <p className="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
  
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </div>
  
            <Button>Save changes</Button>
          </TabsContent>
          <TabsContent value="password" className="space-y-6 p-6">
            <p className="text-sm text-muted-foreground">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm">Confirm password</Label>
                <Input id="confirm" type="password" />
              </div>
            </div>
  
            <Button>Save password</Button>
          </TabsContent>
          <TabsContent value="code-tabs" className="space-y-6 p-6">
            <CodeTabs lang="json" codes={CODES} />
          </TabsContent>
          <TabsContent value="files" className="space-y-6 p-6">
            <Files className="max-w-[500px] w-full" defaultOpen={['app']}>
              <Folder name="app" defaultOpen={['(home)']}>
                <Folder name="animate-ui">
                  <File name="page.tsx" />
                </Folder>
                <File name="layout.tsx" />
                <File name="page.tsx" />
                <File name="global.css" />
              </Folder>
              <Folder name="components">
                <Folder name="ui">
                  <File name="button.tsx" />
                  <File name="tabs.tsx" />
                  <File name="dialog.tsx" />
                </Folder>
                <Folder name="animate-ui">
                  <Folder name="buttons" />
                  <Folder name="components" />
                  <Folder name="effects" />
                </Folder>
              </Folder>
              <File name="package.json" />
              <File name="next.config.ts" />
            </Files>
          </TabsContent>        
        </TabsContents>
      </Tabs>

      <ManagementBar />

      <Link href="/">
        <RippleButton>shadcn/ui</RippleButton>
      </Link>

      {/* --- Footer ------------------------------------------------------- */}
      <footer className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="https://animate-ui.com/" className="hover:underline" target="_blank">
          Animate UI docs
        </a>
        <a href="https://nextjs.org" className="hover:underline" target="_blank">
          Next.js docs
        </a>
        <a href="https://github.com/animate-ui/animate-ui" className="hover:underline" target="_blank">
          GitHub ↗
        </a>
      </footer>
    </div>
  );
}
