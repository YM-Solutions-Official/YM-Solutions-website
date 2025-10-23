import WebProjectsEnhanced from '@/components/work/WebProjectsEnhanced';
import { webProjects } from '@/lib/data/project-data';
import Link from 'next/link';

export default function WebProjectsPage() {
  const totalTechnologies = new Set(webProjects.flatMap((p) => p.tags)).size;
  const categories = new Set(webProjects.map((p) => p.category)).size;

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <section className="relative py-20 bg-linear-to-r from-corporate-navy to-corporate-accent text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Web Development
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Crafting digital experiences that combine cutting-edge technology
              with exceptional user experience. From responsive websites to
              complex web applications.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {webProjects.length}+
                </div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {totalTechnologies}+
                </div>
                <div className="text-white/70 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{categories}</div>
                <div className="text-white/70 text-sm">Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WebProjectsEnhanced projects={webProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-corporate-navy mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s collaborate to bring your digital vision to life with
            cutting-edge web solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-corporate-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-corporate-accent transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="border-2 border-corporate-navy text-corporate-navy px-8 py-4 rounded-xl font-semibold hover:bg-corporate-navy hover:text-white transition-all duration-300"
            >
              View Other Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
