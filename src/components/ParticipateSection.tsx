import { MessageSquare, HandHeart, Lightbulb, Users as Users2 } from 'lucide-react';

const actions = [
  {
    icon: MessageSquare,
    title: 'S\'informer',
    description: 'Restez au courant des enjeux sociaux et politiques qui affectent votre communauté.',
    color: 'blue',
  },
  {
    icon: HandHeart,
    title: 'S\'engager',
    description: 'Participez à des associations, organisations ou initiatives locales qui correspondent à vos valeurs.',
    color: 'green',
  },
  {
    icon: Lightbulb,
    title: 'Proposer',
    description: 'Contribuez avec vos idées et initiatives pour améliorer la vie collective.',
    color: 'amber',
  },
  {
    icon: Users2,
    title: 'Débattre',
    description: 'Échangez respectueusement avec les autres citoyens sur les questions d\'intérêt commun.',
    color: 'red',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    hover: 'group-hover:bg-blue-600',
    icon: 'text-blue-600',
    border: 'hover:border-blue-100',
  },
  green: {
    bg: 'bg-green-100',
    hover: 'group-hover:bg-green-600',
    icon: 'text-green-600',
    border: 'hover:border-green-100',
  },
  amber: {
    bg: 'bg-amber-100',
    hover: 'group-hover:bg-amber-600',
    icon: 'text-amber-600',
    border: 'hover:border-amber-100',
  },
  red: {
    bg: 'bg-red-100',
    hover: 'group-hover:bg-red-600',
    icon: 'text-red-600',
    border: 'hover:border-red-100',
  },
};

export default function ParticipateSection() {
  return (
    <section id="participer" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Participer Activement
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Devenez un citoyen actif et contribuez à façonner votre société
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const colors = colorClasses[action.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`group p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-transparent ${colors.border}`}
              >
                <div className={`w-14 h-14 ${colors.bg} ${colors.hover} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}>
                  <Icon className={`${colors.icon} group-hover:text-white transition-colors duration-300`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {action.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {action.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            La citoyenneté au quotidien
          </h3>
          <p className="text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-6">
            Être citoyen, c'est bien plus que voter une fois tous les quatre ans. C'est un engagement quotidien pour construire une société plus juste, plus équitable et plus démocratique.
          </p>
          <div className="flex justify-center">
            <a
              href="#ressources"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-300"
            >
              Accéder aux ressources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
