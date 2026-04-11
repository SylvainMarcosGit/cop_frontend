import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FileText, Lock, Users, ArrowRight } from "lucide-react";

export function Resources() {
  const modules = [
    { title: "LA1-Environnement de developpement et architecture ap...", icon: FileText },
    { title: "LA2-Processus de test et d'acceptation.pptx", icon: FileText },
    { title: "LA3-Référentiel Commun de Bonnes Pratiques.pptx", icon: FileText },
    { title: "LA4-Piloter la communication avec les parties prenantes ...", icon: FileText },
    { title: "LA5-Partage d'expériences entre ESN - WP3.pptx", icon: FileText },
    { title: "LA6-Qualité et Sécurité par la Pratique.pptx", icon: FileText },
    { title: "LA7-Méthodes Agiles dans le cadre d'un Marché Forfaitai...", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Modules clés offerts par la CoP
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez l'ensemble des modules et bonnes pratiques mis à disposition
            pour la dématérialisation du secteur public. L'accès complet à ces
            ressources est réservé aux membres de la communauté.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8">
                <Users className="w-5 h-5 mr-2" />
                Rejoindre la communauté pour accéder aux ressources 
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="https://giz-chat.vercel.app/" target="_blank" rel="noopener noreferrer">
             
            </a>
          </div>
        </div>

        <Card className="bg-gray-900 border-gray-800 text-gray-100 shadow-xl overflow-hidden">
          <div className="bg-gray-800 px-6 py-4 flex justify-between items-center border-b border-gray-700">
            <div className="font-semibold flex items-center">
              <FileText className="w-5 h-5 mr-2 text-yellow-500" />
              Dossier de formation
            </div>
            <div className="text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded">
              Trier de De Z à A
            </div>
          </div>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-800">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-center px-6 py-4 hover:bg-gray-800/50 transition-colors group cursor-not-allowed"
                >
                  <div className="w-8 h-8 rounded bg-yellow-500/20 text-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-xs">P</span>
                  </div>
                  <span className="flex-1 font-medium text-gray-200 truncate pr-4">
                    {module.title}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Lock className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Users className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="bg-gray-800/80 px-6 py-4 text-sm text-center text-gray-400 border-t border-gray-700">
            Veuillez rejoindre la communauté pour débloquer l'accès à ces présentations.
          </div>
        </Card>
      </div>
    </div>
  );
}
