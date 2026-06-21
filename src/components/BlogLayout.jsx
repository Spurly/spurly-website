import Link from "next/link";
import ContentShell from "./ContentShell.jsx";
import { ChromeLink } from "./Button.jsx";
import { getPost, otherPosts, formatDate } from "../blogPosts.js";

/* Wraps a blog post body with the shell, post header, Article JSON-LD,
   a CTA, and links to the other posts (internal linking). */
export default function BlogLayout({ slug, children }) {
  const post = getPost(slug);
  const related = otherPosts(slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Spurly" },
    publisher: {
      "@type": "Organization",
      name: "Spurly",
      logo: {
        "@type": "ImageObject",
        url: "https://www.getspurly.com/assets/spurly-icon.png",
      },
    },
    mainEntityOfPage: "https://www.getspurly.com/blog/" + slug,
  };

  return (
    <ContentShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article className="prose wrap">
        <p className="prose-meta">
          <Link href="/blog">Blog</Link> · {formatDate(post.date)} ·{" "}
          {post.readTime}
        </p>
        <h1 className="h1">{post.title}</h1>

        {children}

        <div className="blog-cta">
          <h2>Try it yourself</h2>
          <p>
            Spurly captures leads from LinkedIn &amp; Sales Navigator, enriches
            them, and sends personalized outreach — in one click. Start free with
            100 credits.
          </p>
          <ChromeLink variant="primary" size="lg">
            Add to Chrome — Start free
          </ChromeLink>
        </div>

        <div className="blog-related">
          <h2>Keep reading</h2>
          <ul>
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={"/blog/" + p.slug}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ContentShell>
  );
}
