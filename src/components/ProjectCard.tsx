import { useState } from 'react'
import { ExternalLink, Code2, Globe } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, tags, demoUrl, repoUrl } = project
  const [imgError, setImgError] = useState(false)

  return (
    <article className="group flex flex-col bg-white border border-[#E8E8E5] rounded-xl overflow-hidden shadow-xs hover:border-[#536B82]/40 transition-colors">
      <div className="relative aspect-video w-full bg-[#FAFAF8] border-b border-[#E8E8E5] flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={image}
            alt={`${title} preview`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-[#737373] p-6 text-center">
            <Globe className="w-8 h-8 text-[#536B82]/60" />
            <span className="text-xs font-medium">{title} preview</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold text-[#171717] tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-[#737373] leading-relaxed">
            {description}
          </p>
        </div>

        {tags && tags.length > 0 && (
          <ul
            className="flex flex-wrap gap-2 my-5"
            aria-label={`Technologies used in ${title}`}
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAFAF8] text-[#536B82] border border-[#E8E8E5]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="pt-2 border-t border-[#E8E8E5] flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#536B82] hover:text-[#171717] focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none rounded-md px-1 py-0.5 transition-colors"
                aria-label={`Open live demo for ${title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-xs text-[#737373] italic">
                Live demo link pending
              </span>
            )}

            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#737373] hover:text-[#171717] focus-visible:ring-2 focus-visible:ring-[#536B82] focus-visible:outline-none rounded-md px-1 py-0.5 transition-colors"
                aria-label={`Open repository for ${title}`}
              >
                <span>Code</span>
                <Code2 className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
