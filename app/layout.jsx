import "../src/style.css";

export const metadata = {
  metadataBase: new URL("https://www.getspurly.com"),
  title:
    "Spurly — Turn LinkedIn into your pipeline. Capture, connect & reach out in one click.",
  description:
    "Spurly is the LinkedIn & Sales Navigator prospecting tool that captures leads, enriches profiles, and personalizes outreach at scale. Built for recruiters, job-seekers and founders. Start free with 100 credits.",
  keywords: [
    "LinkedIn lead generation",
    "Sales Navigator scraper",
    "LinkedIn outreach automation",
    "prospecting tool",
    "cold outreach",
    "lead enrichment",
    "recruiting tool",
    "B2B sales",
    "find leads",
    "personalized connection requests",
  ],
  authors: [{ name: "Spurly" }],
  alternates: { canonical: "/" },
  icons: { icon: "/assets/spurly-icon.png" },
  openGraph: {
    type: "website",
    title: "Spurly — Turn LinkedIn into your pipeline",
    description:
      "Capture leads from any LinkedIn or Sales Navigator page, enrich them, and send personalized outreach at scale. Start free — 100 credits.",
    url: "/",
    images: ["/assets/shot-reachout.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spurly — Turn LinkedIn into your pipeline",
    description:
      "Capture, connect & reach out across LinkedIn — in one click. Start free with 100 credits.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Spurly",
  url: "https://www.getspurly.com/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Chrome",
  description:
    "LinkedIn & Sales Navigator prospecting tool that captures leads, enriches profiles, and personalizes outreach at scale.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Spurly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spurly is a Chrome extension that turns LinkedIn and Sales Navigator into a prospecting pipeline. It captures leads, enriches profiles with emails and details, and sends personalized outreach — all in one click, without leaving your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is Spurly free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spurly has a free plan with 100 credits per month — enough to run your first outreach campaign. Paid plans start at $29/month for 2,000 credits with full enrichment and messaging features.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Spurly for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spurly is built for recruiters, founders, SDRs, job-seekers, agencies, account executives, and growth marketers — anyone who does outbound prospecting on LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "Is my LinkedIn data safe with Spurly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spurly is 100% local-only — all captured data stays on your device and never leaves your browser without your permission.",
      },
    },
    {
      "@type": "Question",
      name: "Does Spurly work with Sales Navigator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spurly works with both standard LinkedIn and LinkedIn Sales Navigator. You can capture leads from any search results page on either platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does Spurly send personalized messages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You write a message template once using variables like {{name}} and {{company}}. Spurly fills in the details for each person and sends a unique message to everyone, with a live preview before anything goes out.",
      },
    },
  ],
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to prospect on LinkedIn with Spurly",
  description:
    "Three steps to go from a LinkedIn search to sent outreach messages using Spurly.",
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Capture",
      text: "Open any LinkedIn or Sales Navigator search page and click Spurly to capture every profile into a Session — names, titles, companies, and locations — in one click.",
    },
    {
      "@type": "HowToStep",
      position: "2",
      name: "Enrich and connect",
      text: "Spurly visits each profile to enrich emails and contact details, then fires personalized connection requests with human-like pacing to keep your account safe.",
    },
    {
      "@type": "HowToStep",
      position: "3",
      name: "Reach out",
      text: "Write a message template once using {{name}} and {{company}} variables. Spurly generates a unique message for each person and sends with a live preview before anything goes out.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
        />
      </head>
      <body
        data-palette="violet"
        style={{
          backgroundColor: "rgb(233, 238, 254)",
          fontFamily: "-apple-system",
        }}
      >
        {children}
      </body>
    </html>
  );
}
