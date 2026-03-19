import { FileText, Globe, BookOpen, Video } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Documents officiels',
    items: ['Constitution', 'Déclaration des droits', 'Lois fondamentales'],
  },
  {
    icon: Globe,
    title: 'Portails citoyens',
    items: ['Services publics', 'Démarches en ligne', 'Informations locales'],
  },
  {
    icon: BookOpen,
    title: 'Guides pratiques',
    items: ['Voter', 'S\'engager', 'Comprendre les institutions'],
  },
  {
    icon: Video,
    title: 'Formations',
    items: ['Webinaires', 'Ateliers', 'Cours en ligne'],
  },
];

export default function ResourcesSection() {
  return (
    <section id="ressources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Ressources et Outils
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour devenir un citoyen informé et engagé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {resource.title}
                </h3>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="text-slate-600 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center p-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Prêt à vous engager ?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Chaque action compte. Ensemble, construisons une société plus démocratique et inclusive.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
