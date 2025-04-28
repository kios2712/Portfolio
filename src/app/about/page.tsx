import GeneralTemplate from "@/components/templates/GeneralTemplate";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <GeneralTemplate>
      <div className="col-span-12 md:col-span-3 lg:col-span-3 md:col-start-2 lg:col-start-2">
        <Card>
          <Image
            src="/kiosma.jpeg"
            alt="logo"
            width={250}
            height={20}
            className="w-full p-2 rounded-s-lg grayscale rounded-xl"
          />
          <CardFooter className="flex flex-col">
            <CardTitle className="mb-3 text-center">
              Front-end Web Developer
            </CardTitle>
            <a
              href="https://www.linkedin.com/in/kiosma-rincones-83778bba

"
            >
              @Kiosma Rincones
            </a>
          </CardFooter>
          <div></div>
        </Card>
      </div>
      <div className="col-span-12 p-4 md:col-span-2 lg:col-span-6">
        <h2>About me</h2>
        <p className="p-3 mb-5 text-justify">
          Hello, I m Kiosma Rincones, a computer science engineer from Colombia,
          specialized in web development. I master technologies such as HTML,
          CSS, JavaScript, Next.js, Tailwind CSS, Shadcn, GitHub, Atomic Design,
          React, and Node.js. I focus on creating modern digital experiences
          that combine functional design, scalability, and high performance.
          Passionate about innovation and excellence, I approach each project
          with dedication and a strong commitment to making a real difference
          through technology.
        </p>
        <h1>Experience</h1>
        <section className="flex flex-col p-3 mb-2">
          <span className="text-sm text-gray-500">2024 - 2025</span>
          <span className="text-lg">WonderCraff</span>
          <span className="mb-3 text-sm text-gray-500">Junior Developer</span>

          <ul className="pl-5 text-justify list-disc">
            <li>Created custom endpoints to consume the OTASyn API.</li>
            <li>
              Implemented full internationalization support with next-intl.
            </li>
            <li>
              Built modern, scalable, and responsive interfaces with Next.js and
              Tailwind CSS.
            </li>
            <li>
              Developed accessible and reusable UI components with shadcn/ui.
            </li>
            <li>
              Applied best development practices with dynamic routing using
              Next.js App Router.
            </li>
            <li>
              Contributed to performance optimization and user experience
              improvements.
            </li>
          </ul>
        </section>
        <section className="flex flex-col p-3 mb-5">
          <span className="text-gray-500">2024 - 2025</span>
          <span className="text-lg">Digital Suiche</span>
          <span className="mb-2 text-sm text-gray-500">
            Web Developer (WordPress & Elementor)
          </span>

          <ul className="pl-5 text-justify list-disc">
            <li>
              Designed and developed modern, responsive websites using{" "}
              <strong>WordPress</strong> and <strong>Elementor</strong>,
              ensuring high performance and intuitive user experience.
            </li>
            <li>
              Customized themes and templates from{" "}
              <strong>Envato Market</strong>, adapting them to meet specific
              client needs and branding.
            </li>
            <li>
              Managed domain registration and hosting setup, including server
              configurations, SSL certificates, and website migrations.
            </li>
            <li>
              Optimized website speed, SEO, and mobile responsiveness to enhance
              visibility and user engagement.
            </li>
            <li>
              Provided ongoing maintenance, updates, and technical support for
              WordPress sites to ensure security and functionality.
            </li>
          </ul>
        </section>
        <h1 className="mb-3">Skill</h1>

        <section className="grid grid-cols-6">
          <div className="col-span-3">
            <ul className="pl-5 space-y-2">
              <li>html</li>
              <li>css</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>node.js</li>
              <li>git hub</li>
            </ul>
          </div>
          <div>
            <ul className="pl-5 space-y-2">
              <li>shadcn/UI</li>
              <li>next.js</li>
              <li>taiwnind CSS</li>
            </ul>
          </div>
        </section>
      </div>
    </GeneralTemplate>
  );
}
