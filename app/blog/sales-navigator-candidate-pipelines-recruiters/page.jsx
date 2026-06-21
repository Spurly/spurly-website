import Link from "next/link";
import BlogLayout from "../../../src/components/BlogLayout.jsx";
import { getPost } from "../../../src/blogPosts.js";

const SLUG = "sales-navigator-candidate-pipelines-recruiters";
const post = getPost(SLUG);

export const metadata = {
  title: post.title + " | Spurly",
  description: post.description,
  alternates: { canonical: "/blog/" + SLUG },
  openGraph: {
    title: post.title,
    description: post.description,
    url: "/blog/" + SLUG,
    type: "article",
  },
};

export default function Post() {
  return (
    <BlogLayout slug={SLUG}>
      <p>
        Sales Navigator has "sales" in the name, but its real superpower is search
        — and that makes it one of the best sourcing tools a recruiter can use.
        With the right filters and a repeatable workflow, you can turn a role into
        a shortlist of warm candidates in an afternoon.
      </p>

      <h2>Translate the role into filters</h2>
      <p>
        Start with the job description and convert it into search filters: current
        title, seniority, years of experience, industry, location, and even
        current company (great for poaching from competitors). Sales Navigator's
        granular filters let you get specific in a way the standard LinkedIn
        search can't.
      </p>

      <h2>Build a shortlist per role</h2>
      <p>
        Treat each open role as its own pipeline. Run the search, then capture the
        matching profiles into a dedicated Session. With{" "}
        <Link href="/">Spurly</Link>, that's one click — names, titles, companies
        and locations land in a tidy list instead of you tabbing through profiles
        and pasting into a sheet.
      </p>

      <h2>Enrich for follow-up</h2>
      <p>
        A name alone isn't enough to run a real outreach sequence. Enriching
        profiles with contact details gives you a way to follow up beyond the
        LinkedIn inbox, so strong candidates don't slip through the cracks.
      </p>

      <h2>Reach out like a human, at scale</h2>
      <p>
        Candidates get spammed with copy-paste "exciting opportunity" messages all
        day. Stand out by personalizing: reference their actual experience and why
        this specific role fits. Write the template once and let variables tailor
        each message — the same approach we cover in{" "}
        <Link href="/blog/personalize-linkedin-connection-requests">
          personalizing LinkedIn connection requests at scale
        </Link>
        . Personal, relevant notes get replies; blasts get ignored.
      </p>

      <h2>Keep it organized</h2>
      <p>
        Sessions per role keep your candidate pipelines clean: who's been
        contacted, who responded, who's worth a second look. That structure makes
        you faster on the next role too, because your searches and templates are
        already built.
      </p>

      <p>
        Founder or seller doing your own outbound? The same playbook applies —
        see{" "}
        <Link href="/blog/free-linkedin-outreach-pipeline-founders">
          how to build a free LinkedIn outreach pipeline
        </Link>
        .
      </p>
    </BlogLayout>
  );
}
