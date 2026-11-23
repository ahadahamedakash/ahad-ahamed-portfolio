/**
 * JSON-LD Structured Data Component
 *
 * Provides structured data for search engines
 * https://schema.org/
 */
interface StructuredDataProps {
  type?: "Person" | "WebSite" | "WebPage";
  data?: Record<string, any>;
}

export function StructuredData({ type = "Person", data }: StructuredDataProps) {
  const baseUrl = "https://ahadahamedakash.com";

  const schemas = {
    Person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ahad Ahamed Akash",
      url: baseUrl,
      jobTitle: "Full-Stack Software Engineer",
      email: "ahadahamedakash@gmail.com",
      sameAs: [
        "https://github.com/ahadahamedakash",
        "https://linkedin.com/in/ahadahamed",
        "https://twitter.com/ahadahamed",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "JavaScript",
        "Full-Stack Development",
        "Competitive Programming",
      ],
      description:
        "Full-Stack Software Engineer from Bangladesh specializing in React, Next.js, and Node.js. Building real products and solving algorithmic problems.",
    },
    WebSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ahad Ahamed Akash Portfolio",
      url: baseUrl,
      description:
        "Portfolio of Ahad Ahamed Akash, a Full-Stack Software Engineer from Bangladesh.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    WebPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Ahad Ahamed Akash - Full-Stack Software Engineer's Portfolio",
      description:
        "Portfolio showcasing projects, skills, and experience of Ahad Ahamed Akash",
      url: baseUrl,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: "Ahad Ahamed Akash Portfolio",
        url: baseUrl,
      },
    },
  };

  const schema = data || schemas[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
