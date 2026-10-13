import GlassHero from "./glass-hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative h-screen w-full">
        {/* The visible text is drawn on the canvas; this keeps it readable for
            screen readers and makes the browser load the font the canvas uses. */}
        <h1 className="sr-only font-[family-name:var(--font-geist-sans)] font-semibold">
          GLASS ICON
        </h1>
        <GlassHero />
      </section>
    </main>
  );
}
