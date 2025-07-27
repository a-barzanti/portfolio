import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center text-gray-800 relative">
      {/* GitHub Corner */}
      <a
        href="https://github.com/a-barzanti"
        className="github-corner"
        aria-label="GitHub Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style={{
            fill: '#00A4A6',
            color: '#fff',
            position: 'absolute',
            top: 0,
            border: 0,
            right: 0,
          }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: '130px 106px' }}
            className="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          />
        </svg>
      </a>
      <style>
        {`.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}`}
      </style>

      <img src="./logo.png" alt="AB Logo" className="w-32 h-32 mb-10" />

      <h1 className="text-5xl font-bold text-[#00A4A6] mb-6">
        Hi, I'm Alessandro
      </h1>
      <p className="text-xl max-w-2xl text-center mb-16">
        I’m a full-stack software engineer with a focus on TypeScript, React,
        and modern backend solutions like Supabase and Node.js. I bring
        experience across enterprise-scale projects and open-source tools, with
        a particular interest in developer experience, system design, and
        scalable architecture. Currently open to remote contract opportunities
        across the UK, EU, or US.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {[
          // {
          //   title: 'SupabaseAuthKit',
          //   role: 'Creator',
          //   stack: 'TypeScript, Supabase, Next.js',
          //   description:
          //     'An open-source authentication and user management starter kit for Supabase and Next.js. Features built-in RBAC, session handling, and CLI support for fast and secure project setup.',
          //   github: 'https://github.com/a-barzanti/FletAppTemplate',
          //   doc: 'https://flet.dev/docs/',
          //   image: 'screenshots/SupabaseAuthKit.png',
          //   highlights: [
          //     'Streamlines authentication setup for full-stack apps',
          //     'Designed for scalability and security from day one',
          //   ],
          // },
          {
            title: 'NewDay Fraud Manager',
            role: 'Lead Full-stack Engineer',
            stack: 'Vite, React, Node.js, AWS, GraphQL',
            description:
              'An internal web platform used by fraud operations teams to monitor, investigate, and resolve suspicious financial activity across multiple product lines.',
            note: 'NDA-protected project.',
            image: 'screenshots/fraud-case-manager.png',
            highlights: [
              'Built robust, scalable UI for real-time case tracking',
              'Prioritized performance and accessibility for a high-volume user base',
              'Integrated with multiple backend systems and audit logs',
            ],
          },
          {
            title: 'Ambassador Theatre Group Website Builder',
            role: 'Lead Full-stack Engineer',
            stack: 'Next.js, AWS, GraphQL',
            description:
              'Developed and maintained a scalable white-label website builder powering 12+ live sites for the Ambassador Theatre Group’s venues and productions.',
            image: 'screenshots/atg.png',
            note: 'Private repository.',
            sample1: 'https://www.thehudsonbroadway.com/',
            sample2: 'https://www.lyricbroadway.com/',
            highlights: [
              'Integrated with a hosted Umbraco CMS used in headless mode for content delivery',
              'Implemented a custom API caching layer using AWS S3 to improve reliability and reduce latency',
              'Delivered fully server-side rendered websites via Next.js for performance and SEO',
              'Built a flexible design system supporting multi-brand theming and modular layout configuration',
              'Empowered the marketing team to independently launch and manage event-specific websites without developer involvement',
            ],
          },
          {
            title: 'Scale8 Tag Manager',
            role: 'Co-Creator',
            stack: 'Typescript, React, Node.js, GraphQL',
            description:
              'A privacy-first, GDPR, CCPA, and PECR compliant open-source Tag Management and Analytics solution.',
            github:
              'https://github.com/scale8/scale8-tag-manager-and-analytics',
            doc: 'https://scale8.github.io/docs',
            image: 'screenshots/scale8.png',
            highlights: [
              'Architected and implemented the UI achieving highly positive early user feedback on usability',
              'Designed and managed CI/CD pipelines using GitHub Actions, streamlining the release process and reducing depoyment times by 25%',
              'Engineered the API backend with TypeScript and InversifyJS, exposing a documented GraphQL schema and integrating with services like Google BigQuery, Stripe, and AWS S3',
            ],
          },
        ].map((card, i) => (
          <Card key={i} className="shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: ['#F58025', '#00A4A6', '#6D66BA'][i % 3] }}
                >
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  <b>Role: </b>
                  {card.role}
                </p>
                <p className="text-gray-600 mb-4">
                  <b>Stack: </b>
                  {card.stack}
                </p>
                <p className="text-gray-600 mb-4">{card.description}</p>

                {card.highlights && card.highlights.length > 0 && (
                  <div className="mb-4">
                    <b>Highlights:</b>
                    <ul className="list-none pl-0 mt-1">
                      {card.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-gray-500 flex items-start"
                        >
                          <span className="mr-2">-</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.note && (
                  <p className="italic small text-gray-400 mb-2 mb-2">
                    {card.note}
                  </p>
                )}
                <div className="flex gap-4 mb-2">
                  {card.github && (
                    <a
                      href={card.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#24292f] underline hover:text-[#57606a]"
                    >
                      GitHub →
                    </a>
                  )}
                  {card.doc && (
                    <a
                      href={card.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#24292f] underline hover:text-[#57606a]"
                    >
                      Docs →
                    </a>
                  )}
                  {card.sample1 && (
                    <a
                      href={card.sample1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#24292f] underline hover:text-[#57606a]"
                    >
                      Sample 1 →
                    </a>
                  )}
                  {card.sample2 && (
                    <a
                      href={card.sample2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#24292f] underline hover:text-[#57606a]"
                    >
                      Sample 2 →
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-20">
        <Button
          asChild
          className="bg-[#F58025] hover:bg-[#d96e1f] text-white text-lg px-8 py-4 rounded-full shadow-md"
        >
          <a href="mailto:a.barzanti@gmail.com?subject=Let's%20Work%20Together">
            Get in Touch
          </a>
        </Button>

        <a
          href="./Alessandro Barzanti CV 2025.pdf"
          download
          className="text-[#00A4A6] underline text-lg hover:text-[#00797b]"
        >
          Download my CV
        </a>
      </div>
    </div>
  );
}
