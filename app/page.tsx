export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Vantage Trading
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-gray-400 mb-10">
          Professional Trading Education, Market Structure Research,
          and Process-Driven Analysis.
        </p>

        <div className="flex gap-4">
          <button className="rounded-xl bg-teal-500 px-6 py-3 font-semibold text-black hover:bg-teal-400 transition">
            Join Community
          </button>

          <button className="rounded-xl border border-gray-700 px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            View Research
          </button>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Trading Education
            </h3>
            <p className="text-gray-400">
              Practical education focused on process, execution,
              and long-term consistency.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Market Analysis
            </h3>
            <p className="text-gray-400">
              Daily and weekly analysis of market structure,
              order flow, and institutional activity.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Research
            </h3>
            <p className="text-gray-400">
              Building tools and frameworks that help traders
              make better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Philosophy
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed">
            No fake lifestyles. No unrealistic promises.
            No guru marketing.
            <br />
            <br />
            Just process, consistency, transparency,
            and continuous improvement.
          </p>
        </div>
      </section>
    </main>
  );
}