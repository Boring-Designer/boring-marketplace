import { Search } from "lucide-react";
import TemplateGrid from "@/components/template-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background md:px-20">
      <div className="w-full mx-auto my-auto">
        <h1 className=" my-10 md:my-0 text-[10vw] text-center font-bold">
          BORINGDESIGNER
        </h1>
      </div>
      <header className="border-b-2 border-dotted">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col gap-6">
            <div className="flex md:items-center justify-between gap-[20px] md:max-w-[800px] max-w-[400px]">
              <h1 className="text-[30px] leading-[50px] md:text-5xl font-medium">
                Boring Marketplace - Best Free Open-Source Web Templates.
              </h1>
              {/* <Button variant="outline" size="sm">
                Submit Template
              </Button> */}
            </div>
            <div className="mb-10">
              <h2 className="text-lg text-[#8b8b8b] font-medium tracking-tight md:max-w-[600px] max-w-[400px]">
                No signups,no BS.Just pure creativity at your fingertips.No
                signups required—just download and customize!
              </h2>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="all" className="w-full">
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
  );
}
