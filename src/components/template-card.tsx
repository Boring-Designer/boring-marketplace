import Image from "next/image"
import { Download, Github } from "lucide-react"
import type { Template } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={template.thumbnail || "/placeholder.svg"}
          alt={template.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{template.name}</CardTitle>
        <CardDescription className="line-clamp-2">{template.description}</CardDescription>
      </CardHeader>
      {/* <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent> */}
      <CardFooter className="flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <Button className="flex-1" asChild>
            <a href={template.downloadUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <a href={template.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
        <div className="w-full">
        <Button variant="default" className="flex-1 w-full bg-white" asChild>
            <a href={template.previewLink} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

