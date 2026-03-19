import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Citoyenneté</h3>
            <p className="text-sm leading-relaxed">
              Un espace dédié à la compréhension et à la pratique de la citoyenneté active dans notre société démocratique.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#comprendre" className="hover:text-white transition-colors duration-200">
                  Comprendre
                </a>
              </li>
              <li>
                <a href="#participer" className="hover:text-white transition-colors duration-200">
                  Participer
                </a>
              </li>
              <li>
                <a href="#ressources" className="hover:text-white transition-colors duration-200">
                  Ressources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm leading-relaxed">
              Pour toute question ou suggestion, n'hésitez pas à nous contacter.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} Citoyenneté. Tous droits réservés.
          </p>
          <p className="text-sm flex items-center">
            Fait avec <Heart size={16} className="mx-1 text-red-500" /> pour une meilleure démocratie
          </p>
        </div>
      </div>
    </footer>
  );
}
