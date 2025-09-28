# World Friends Blog

A Next.js blog application for World Friends with excellent SEO and visibility features.

## Features

- **SEO Optimized**: Server-side rendering, meta tags, sitemap generation
- **Admin Panel**: Create and manage blog posts with rich text editor
- **Authentication**: Supabase auth for admin access
- **Responsive Design**: Mobile-friendly with Tailwind CSS
- **Rich Text Editor**: React Quill for content creation
- **Pagination**: Efficient post listing with pagination
- **Featured Posts**: Highlight important content

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Set up Supabase:**
   - Create a new Supabase project
   - Run the SQL from `supabase-schema.sql` in your Supabase SQL editor
   - Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

3. **Create admin user:**
   - Go to Supabase Auth > Users
   - Create a new user with email/password
   - This user can access the admin panel

4. **Run development server:**
```bash
npm run dev
```

## Pages

- `/` - Homepage with featured and latest posts
- `/posts` - All posts with pagination
- `/posts/[id]` - Individual post page
- `/admin` - Admin login and dashboard
- `/admin/create` - Create new posts
- `/privacy` - Privacy policy page

## SEO Features

- Server-side rendering for all pages
- Dynamic meta tags for posts
- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Open Graph tags for social sharing
- Structured data for better search visibility

## Deployment

Deploy to Vercel:

```bash
npm run build
```

The app is optimized for Vercel deployment with automatic sitemap generation and SEO features.

## Database Schema

The app uses a simple `posts` table with:
- `id` (UUID, primary key)
- `title` (text)
- `content` (text, HTML from rich editor)
- `excerpt` (text, brief description)
- `featured_image_url` (text, optional)
- `featured` (boolean, for homepage highlighting)
- `created_at` (timestamp)
- `updated_at` (timestamp, auto-updated)

## Admin Usage

1. Navigate to `/admin`
2. Login with your Supabase user credentials
3. Create new posts with the rich text editor
4. Set featured posts for homepage display
5. Generate sitemap after creating posts for SEO