import { MetadataRoute } from 'next'
import { INSIGHTS, PROJECTS } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-mocha-beta-81.vercel.app'

  const insightUrls = INSIGHTS.map((post) => ({
    url: `${baseUrl}/insights/${post.id}`,
    lastModified: new Date(post.publishDate),
  }))

  const projectUrls = PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(project.publishDate),
  }))

  return [
    // 核心頁面
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/insights`, lastModified: new Date() },

    // 動態內容
    ...insightUrls,
    ...projectUrls,
  ]
}
