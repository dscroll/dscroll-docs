import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docs.dscroll.com';
  
  const contentDir = path.join(process.cwd(), 'content');
  
  // Recursively read all .mdx or .md files in the content folder
  const getMdxFiles = (dir: string, baseDir = dir): string[] => {
    let results: string[] = [];
    if (!fs.existsSync(dir)) return results;
    
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        results = results.concat(getMdxFiles(filePath, baseDir));
      } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
        // Skip system/internal files starting with an underscore (like _meta.ts)
        if (file.startsWith('_')) continue;
        
        const relativePath = path.relative(baseDir, filePath);
        const cleanPath = relativePath.replace(/\.mdx?$/, '');
        results.push(cleanPath);
      }
    }
    return results;
  };

  const pages = getMdxFiles(contentDir);
  
  const sitemapEntries: MetadataRoute.Sitemap = pages.map((pagePath) => {
    // Normalise "index" pages
    const isIndex = pagePath === 'index';
    const isSubIndex = pagePath.endsWith('/index') || pagePath.endsWith('\\index');
    
    let urlPath = '';
    if (isIndex) {
      urlPath = '/docs';
    } else if (isSubIndex) {
      // Normalize slashes and remove "index" at the end
      const normalizedPath = pagePath.replace(/\\/g, '/');
      urlPath = `/docs/${normalizedPath.substring(0, normalizedPath.length - 6)}`;
    } else {
      urlPath = `/docs/${pagePath.replace(/\\/g, '/')}`;
    }

    return {
      url: `${baseUrl}${urlPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: isIndex ? 1.0 : 0.8,
    };
  });

  // Prepend the main landing page (/)
  sitemapEntries.unshift({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  });

  return sitemapEntries;
}
