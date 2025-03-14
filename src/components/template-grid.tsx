import { templates } from "@/lib/data"
import TemplateCard from "./template-card"

interface TemplateGridProps {
  filter?: string
}

export default function TemplateGrid({ filter }: TemplateGridProps = {}) {
  // Filter templates based on the selected category
  const filteredTemplates = filter
    ? templates.filter((template) => template.tags.includes(filter.toLowerCase()))
    : templates

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-2 ">
      {filteredTemplates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  )
}

