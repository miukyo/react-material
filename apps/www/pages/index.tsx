import Iridescence from "@/components/blocks/iridescence";
import Link from "@/components/misc/link";
import { Button, Ripple, Icon } from "react-material";
import ShikiHighlighter from "react-shiki/web";

export default function Index() {
  return (
    <div className="w-full min-h-screen">
      <section className="p-1">
        <div className="h-125 md:h-200 bg-surface-container-highest rounded-xl grid place-items-center relative overflow-hidden">
          <div className="absolute inset-0 blur-xl scale-120 opacity-50">
            <Iridescence mouseReact={false} speed={2} resolution={0.1} />
          </div>
          <div className="absolute inset-0 z-10 dark:bg-[#000] w-full h-full opacity-30 backdrop-blur-xl"></div>
          <div className="z-10 flex items-center justify-center flex-col px-2">
            <h1 className="m3-font-display-large text-center text-5xl  md:text-8xl text-on-surface font-semibold">
              React Material
            </h1>
            <p className="m3-font-headline-small text-center text-sm md:text-2xl text-on-surface">
              Material Design 3 Expressive Implementation in React
            </p>
            <Link href="/docs/get-started/introduction">
              <Button size="large" className="mt-8 font-dmsans font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-2 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="m3-font-display-medium text-4xl text-on-surface mb-8 text-center">
            Features
          </h2>
          <p className="m3-font-body-large text-on-surface-variant mb-16 text-center max-w-2xl mx-auto">
            React Material brings the latest Material Design 3 features to your React applications
            with a focus on performance, accessibility, and developer experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-xl overflow-hidden">
            {/* Modern Design System */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  auto_awesome
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Modern Design System</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Implementation of the latest Material Design 3 guidelines with expressive animations
                and interactions.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                Elegant typography, sophisticated elevation system, and fluid motion design
                principles
              </p>
            </div>

            {/* Responsive Components */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  devices
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Responsive</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Adaptable components that work seamlessly across desktop, tablet, and mobile
                devices.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                Fluid layouts, adaptive sizing, and consistent behavior across all screen sizes
              </p>
            </div>

            {/* Performance Optimized */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  speed
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Optimized</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Built with performance in mind, ensuring smooth animations and responsive
                interactions even on complex interfaces.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                Efficient rendering, minimal bundle size, and optimized state management
              </p>
            </div>

            {/* Theming */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  palette
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Dynamic Theming</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Material You-inspired theming with dynamic color generation and dark mode support.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                Create beautiful, consistent themes from a single color
              </p>
            </div>

            {/* Accessibility */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  accessibility
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Accessibility First</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                All components are designed with accessibility in mind, ensuring your applications
                are usable by everyone.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                ARIA support, keyboard navigation, and focus management
              </p>
            </div>

            {/* Developer Experience */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={30} className="text-primary">
                  code
                </Icon>
                <h3 className="m3-font-headline-medium text-on-surface">Developer Friendly</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Intuitive APIs and detailed documentation make it easy to integrate components in
                your projects.
              </p>
              <p className="m3-font-body-medium text-on-surface-variant">
                TypeScript support, customizable props, and consistent behavior
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/docs/components">
              <Button size="large" variant="tonal" className="font-dmsans font-semibold">
                Explore Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="m3-font-display-medium text-4xl text-on-surface mb-8 text-center">
            Getting Started is Easy
          </h2>
          <p className="m3-font-body-large text-on-surface-variant mb-16 text-center max-w-2xl mx-auto">
            Follow these simple steps to integrate React Material into your project and start
            building beautiful, accessible applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="bg-surface-container-high p-8 rounded-xl rounded-b-md xl:rounded-r-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-on-primary rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="m3-font-headline-medium text-on-surface">Install</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Add React Material to your project
              </p>
              <div className="rounded-lg overflow-hidden">
                <ShikiHighlighter
                  theme={{
                    light: "one-light",
                    dark: "one-dark-pro",
                  }}
                  language="bash">
                  {`npm install react-material # npm
yarn add react-material # yarn
pnpm add react-material # pnpm
bun add react-material # bun`}
                </ShikiHighlighter>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-md xl:rounded-xl xl:rounded-l-md xl:rounded-b-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-on-primary rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                  2
                </div>
                <h3 className="m3-font-headline-medium text-on-surface">Setup Provider</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Wrap your application with ThemeProvider for proper styling
              </p>
              <div className="rounded-lg overflow-hidden">
                <ShikiHighlighter
                  theme={{
                    light: "one-light",
                    dark: "one-dark-pro",
                  }}
                  language="tsx">
                  {`import { ThemeProvider } from 'react-material'

<ThemeProvider root>
  <App />
</ThemeProvider>`}
                </ShikiHighlighter>
              </div>
            </div>

            <div className="bg-surface-container-high p-8 rounded-xl rounded-t-md md:col-span-2 xl:mx-80">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-on-primary rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                  3
                </div>
                <h3 className="m3-font-headline-medium text-on-surface">Use & Customize</h3>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                Import components and customize them to match your brand
              </p>
              <div className="rounded-lg overflow-hidden mb-4">
                <ShikiHighlighter
                  theme={{
                    light: "one-light",
                    dark: "one-dark-pro",
                  }}
                  language="tsx">
                  {`import { Button, TextField } from 'react-material'`}
                </ShikiHighlighter>
              </div>
              <p className="m3-font-body-large text-on-surface-variant mb-4">
                You can also customize themes and styles globally or locally. Learn more in the
                theming documentation.
              </p>
              <div className="mt-4 text-center">
                <Link href="/docs/get-started/theming">
                  <Button
                    size="medium"
                    variant="tonal"
                    className="font-dmsans font-semibold w-full">
                    Learn About Theming
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-2 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="m3-font-display-medium text-4xl text-on-surface mb-8 text-center">
            Why Choose React Material?
          </h2>
          <p className="m3-font-body-large text-on-surface-variant mb-16 text-center max-w-2xl mx-auto">
            See how React Material compares to other popular UI libraries
          </p>

          <div className="bg-surface-container-high p-8 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="p-4 text-left m3-font-title-medium text-on-surface">Library</th>
                    <th className="p-4 text-center m3-font-title-medium text-primary">
                      React Material
                    </th>
                    <th className="p-4 text-center m3-font-title-medium text-on-surface-variant">
                      MUI
                    </th>
                    <th className="p-4 text-center m3-font-title-medium text-on-surface-variant">
                      Other MD Libraries
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant">
                    <td className="p-4 m3-font-body-large text-on-surface">Material Design 3</td>
                    <td className="p-4 text-center text-primary">
                      <Icon>check_circle</Icon>
                    </td>
                    <td className="p-4 text-center text-on-surface-variant">
                      <Icon>close</Icon>
                    </td>
                    <td className="p-4 text-center text-on-surface-variant">Partial</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-4 m3-font-body-large text-on-surface">Dynamic Theming</td>
                    <td className="p-4 text-center text-primary">
                      <Icon>check_circle</Icon>
                    </td>
                    <td className="p-4 text-center text-on-surface-variant">Limited</td>
                    <td className="p-4 text-center text-on-surface-variant">Limited</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-4 m3-font-body-large text-on-surface">
                      Performance Optimized
                    </td>
                    <td className="p-4 text-center text-primary">
                      <Icon>check_circle</Icon>
                    </td>
                    <td className="p-4 text-center text-on-surface-variant">
                      <Icon>check</Icon>
                    </td>
                    <td className="p-4 text-center text-on-surface-variant">Varies</td>
                  </tr>
                  <tr>
                    <td className="p-4 m3-font-body-large text-on-surface">Bundle Size</td>
                    <td className="p-4 text-center text-primary">Minimal</td>
                    <td className="p-4 text-center text-on-surface-variant">Large</td>
                    <td className="p-4 text-center text-on-surface-variant">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="m3-font-display-medium text-4xl text-on-surface mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <p className="m3-font-body-large text-on-surface-variant mb-16 text-center max-w-2xl mx-auto">
            Find answers to common questions about React Material
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto rounded-xl overflow-hidden">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <h3 className="m3-font-headline-small text-on-surface mb-4">
                Is React Material free to use?
              </h3>
              <p className="m3-font-body-large text-on-surface-variant">
                Yes, React Material is open-source and free to use in both personal and commercial
                projects under the Apache License Version 2.0.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <h3 className="m3-font-headline-small text-on-surface mb-4">
                Does it support TypeScript?
              </h3>
              <p className="m3-font-body-large text-on-surface-variant">
                Absolutely! React Material is built with TypeScript and includes comprehensive type
                definitions for all components and APIs.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <h3 className="m3-font-headline-small text-on-surface mb-4">How do I contribute?</h3>
              <p className="m3-font-body-large text-on-surface-variant">
                We welcome contributions! Check out our GitHub repository for contribution
                guidelines and open issues that need help.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-surface-container-high p-8 rounded-md">
              <h3 className="m3-font-headline-small text-on-surface mb-4">
                Does it work with Next.js?
              </h3>
              <p className="m3-font-body-large text-on-surface-variant">
                Yes, React Material works seamlessly with Next.js and other React frameworks. This
                documentation site is built with Next.js!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-2 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="m3-font-display-medium text-4xl text-on-surface mb-6">
              Ready to Get Started?
            </h2>
            <p className="m3-font-body-large text-on-surface-variant mb-16 text-center max-w-2xl mx-auto">
              Join the growing community of developers creating beautiful, accessible, and
              performant React applications with Material Design 3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs/get-started/introduction">
                <Button size="large" variant="tonal" className="font-dmsans font-semibold">
                  Read the Docs
                </Button>
              </Link>
              <Link href="https://github.com/miukyo/react-material">
                <Button size="large" variant="outlined" className="font-dmsans font-semibold">
                  <Icon className="mr-2">code</Icon>
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
