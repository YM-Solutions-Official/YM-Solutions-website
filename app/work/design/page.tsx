import DesignProjectsEnhanced from '@/components/work/DesignProjectsEnhanced';
import { designProjects } from '@/lib/data/project-data';
import Link from 'next/link';

export default function DesignProjectsPage() {
  const totalSoftware = new Set(designProjects.flatMap((p) => p.software)).size;
  const categories = new Set(designProjects.map((p) => p.category)).size;

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-pink-50">
      {/* Header Section */}
      <section className="relative py-20 bg-linear-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Graphic Design
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Transforming ideas into compelling visual stories. From brand
              identities to marketing materials, creating designs that captivate
              and communicate effectively.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {designProjects.length}+
                </div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{totalSoftware}+</div>
                <div className="text-white/70 text-sm">Design Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{categories}</div>
                <div className="text-white/70 text-sm">Design Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesignProjectsEnhanced projects={designProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Visualize Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s create stunning visuals that tell your story and connect
            with your audience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 hover:scale-105"
            >
              Start a Design Project
            </Link>
            <Link
              href="/work"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View Other Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
