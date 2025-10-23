import GameProjectsEnhanced from '@/components/work/GameProjectsEnhanced';
import { gameProjects } from '@/lib/data/project-data';
import Link from 'next/link';

export default function GameProjectsPage() {
  const totalPlatforms = new Set(gameProjects.flatMap((p) => p.platforms)).size;
  const completedProjects = gameProjects.filter(
    (p) => p.status === 'Completed'
  ).length;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Header Section */}
      <section className="relative py-20 bg-linear-to-r from-gray-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Game Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Crafting immersive gaming experiences across multiple platforms.
              From hyper-casual mobile games to immersive VR prototypes,
              creating worlds that engage and entertain.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {gameProjects.length}+
                </div>
                <div className="text-white/70 text-sm">Games Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{totalPlatforms}</div>
                <div className="text-white/70 text-sm">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {completedProjects}
                </div>
                <div className="text-white/70 text-sm">Published Games</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GameProjectsEnhanced projects={gameProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let&apos;s create engaging gaming experiences that captivate players
            and stand out in the market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300 hover:scale-105"
            >
              Start Game Project
            </Link>
            <Link
              href="/work"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
            >
              View Other Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
