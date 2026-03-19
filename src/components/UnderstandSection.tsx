import { Book, Users, Scale, Vote } from 'lucide-react';

const concepts = [
  {
    icon: Book,
    title: 'Qu\'est-ce que la citoyenneté ?',
    description: 'La citoyenneté est le lien juridique et politique qui unit une personne à un État. Elle confère des droits et des devoirs.',
  },
  {
    icon: Users,
    title: 'Vivre ensemble',
    description: 'Partager des valeurs communes, respecter la diversité et contribuer au bien-être collectif de la société.',
  },
  {
    icon: Scale,
    title: 'Droits et devoirs',
    description: 'Les citoyens bénéficient de droits fondamentaux et ont des responsabilités envers la communauté.',
  },
  {
    icon: Vote,
    title: 'Participation démocratique',
    description: 'S\'engager dans la vie publique, voter et contribuer aux décisions qui façonnent notre société.',
  },
];

export default function UnderstandSection() {
  return (
    <section id="comprendre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Comprendre la Citoyenneté
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Les fondements essentiels de la vie en société démocratique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {concept.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
