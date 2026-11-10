import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Every page of the site. After the build, index.html is copied into a
// folder for each one (e.g. dist/about/index.html), so refreshing or opening
// any page URL directly works on Hostinger instead of showing a 404.
const routes = [
  'about', 'ourprocess', 'service', 'project', 'contact', 'faq', 'privacypolicy', 'termcondition',
  'service/web', 'service/ecommerce', 'service/mobile', 'service/software', 'service/uiux',
  'service/branding', 'service/stationary', 'service/seo', 'service/media',
  'service/development', 'service/graphics', 'service/marketing',
  'home2', 'home3', 'team', 'team/team-details', 'pricing', 'blog', 'blog-sidebar',
  'blog/blog-details', 'service/service-details', 'project/project-details',
]

const spaPages = () => ({
  name: 'indenio-spa-pages',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve('dist')
    const html = fs.readFileSync(path.join(dist, 'index.html'))
    for (const r of routes) {
      const dir = path.join(dist, r)
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(path.join(dir, 'index.html'), html)
    }
    fs.writeFileSync(path.join(dist, '404.html'), html)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaPages()],
})
