import React from "react";
import TemplateGrid from "@/components/template-grid";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background xl:mx-7">
      <div className="mx-auto my-auto">
        <h1 className=" my-5 md:my-0 text-[10vw] xl:text-[11vw] font-bold container px-4 md:px-4 xl:px-0">
          BORINGDESIGNER
        </h1>
      </div>
      <div className="">
        <section className="container px-4 md:px-4 xl:px-0">
          <div className="container ">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-medium mb-6 leading-tight">
                Start your project with the best responsive website templates.
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                Create beautiful websites effortlessly with premium Framer
                templates. Explore a curated selection to kickstart your next
                project.
              </p>
            </div>
          </div>
        </section>

        <main className="mx-auto py-8 px-4 md:px-4 xl:px-0">
          <Tabs defaultValue="all" className="w-full mx-auto ">
            <TabsList className="mb-8 w-full sm:w-auto grid grid-cols-4 max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="html">HTML/CSS</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <TemplateGrid />
            </TabsContent>
            <TabsContent value="react" className="mt-0">
              <TemplateGrid filter="react" />
            </TabsContent>
            <TabsContent value="nextjs" className="mt-0">
              <TemplateGrid filter="nextjs" />
            </TabsContent>
            <TabsContent value="html" className="mt-0">
              <TemplateGrid filter="html" />
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BoringDesigner. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
