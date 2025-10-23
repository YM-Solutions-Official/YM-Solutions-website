import VideoProjectsEnhanced from '@/components/work/VideoProjectsEnhanced';
import { videoProjects } from '@/lib/data/project-data';
import Link from 'next/link';

export default function VideoProjectsPage() {
  const totalClients = new Set(videoProjects.map((p) => p.client)).size;
  const videoTypes = new Set(videoProjects.map((p) => p.type)).size;

  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header Section */}
      <section className="relative py-20 bg-linear-to-r from-red-600 to-orange-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Video Production
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Bringing stories to life through compelling video content. From
              promotional videos to event coverage, creating visual narratives
              that engage and convert audiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">
                  {videoProjects.length}+
                </div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{totalClients}+</div>
                <div className="text-white/70 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{videoTypes}</div>
                <div className="text-white/70 text-sm">Video Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoProjectsEnhanced projects={videoProjects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s create compelling video content that resonates with your
            audience and drives results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              Start Video Project
            </Link>
            <Link
              href="/work"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              View Other Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
