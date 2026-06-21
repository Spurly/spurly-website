import Link from "next/link";
import ContentShell from "../../src/components/ContentShell.jsx";
import { POSTS, formatDate } from "../../src/blogPosts.js";

export const metadata = {
  title: "Blog — LinkedIn outreach & prospecting guides | Spurly",
  description:
    "Practical guides on LinkedIn outreach, Sales Navigator prospecting, and building a pipeline — from the team behind Spurly.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Spurly Blog — LinkedIn outreach & prospecting guides",
    description:
      "Practical guides on LinkedIn outreach, Sales Navigator prospecting, and building a pipeline.",
    url: "/blog",
  },
};

export default function BlogIndex() {
  return (
    <ContentShell>
      <div className="prose wrap">
        <p className="eyebrow">Blog</p>
        <h1 className="h1">Outreach &amp; prospecting, done right</h1>
        <p>
          Practical playbooks on LinkedIn outreach, Sales Navigator prospecting,
          and building a pipeline that actually replies — from the team behind{" "}
          <Link href="/">Spurly</Link>.
        </p>

        <div className="blog-list">
          {POSTS.map((p) => (
            <article key={p.slug} className="blog-card">
              <p className="prose-meta">
                {formatDate(p.date)} · {p.readTime}
              </p>
              <h2>
                <Link href={"/blog/" + p.slug}>{p.title}</Link>
              </h2>
              <p>{p.excerpt}</p>
              <Link className="blog-readmore" href={"/blog/" + p.slug}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </ContentShell>
  );
}
