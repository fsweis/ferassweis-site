export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Feras Sweis
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
          Software engineer building reliable data systems for complex businesses.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          I specialize in backend engineering, SQL performance, Snowflake, data
          pipelines, and enterprise systems that need to scale without breaking.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="mailto:hello@ferassweis.com"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950"
          >
            Contact Me
          </a>

          <a
            href="#work"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold text-white"
          >
            View Work
          </a>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">What I work on</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">Data Performance</h3>
            <p className="mt-3 text-zinc-400">
              SQL tuning, batching, indexing, and large-scale processing.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">Enterprise Systems</h3>
            <p className="mt-3 text-zinc-400">
              Backend services, healthcare/finance workflows, and resilient
              integrations.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="font-semibold">Cloud Data</h3>
            <p className="mt-3 text-zinc-400">
              Snowflake, data migration, reporting systems, and modernization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}