import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
  Users,
  Briefcase,
  Network,
  ArrowRight,
  Sparkles,
  Linkedin,
  LayoutGrid,
  Share2,
  HeartHandshake,
  GraduationCap,
  CalendarDays,
  MessageSquareText
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../assets/logo.png";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-variant))' }}>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        {/* Logo watermark */}
        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none z-0">
          <img src={logo} alt="Watermark" className="w-96 h-96 object-contain" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Plateforme collaborative au Bénin</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Communauté de Pratiques pour la dématérialisation du secteur public
              </h1>
              <p className="text-xl text-white/90 mb-6">
               Une communauté qui réunit les acteurs du numérique béninois afin de favoriser les échanges, le partage d’expériences et la collaboration public-privé pour améliorer les services digitaux du secteur public.
              </p>
              <div className="text-lg text-white/90 mb-8 space-y-2">
                <p>• Montée en compétences et accès à des ressources</p>
                <p>• Partage d'opportunités professionnelles</p>
                <p>• Collaboration DSI – ESN</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://forms.office.com/r/82CcMqJf1r" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/50 w-full sm:w-auto">
                    Rejoindre la communauté
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/company/communaut%C3%A9-de-pratiques-cop/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  {/* Lien LinkedIn à replacer dynamiquement si on trouve le lien officiel */}
                  <Button
                    size="lg"
                    variant=""
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Notre LinkedIn
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-2xl relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzAzNzA3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Collaboration d'équipe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous faisons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que nous faisons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mise en réseau des acteurs IT béninois et partage d'opportunités professionnelles.
            </p>
          </div>
{/*
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                  <Network className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>CoP'terwork</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Un espace dédié au réseautage et à la synergie d'actions entre professionnels de l'IT au Bénin.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle>Incubation ESN x DSI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Favoriser la collaboration étroite entre les Entreprises de Services du Numérique et les DSI pour des solutions innovantes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle>Espace de collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Une plateforme sécurisée pour travailler ensemble, partager des ressources et développer des projets structurants.
                </CardDescription>
              </CardContent>
            </Card>
          </div> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <LayoutGrid className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle>Espace dynamique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offrir un espace interactif et intuitif pour faciliter les échanges et la collaboration entre les membres
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Share2 className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle>Partage d'expériences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Favoriser le partage d'expériences, réussites et apprentissages entre professionnels de l'IT
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-2">
                  <HeartHandshake className="w-5 h-5 text-teal-600" />
                </div>
                <CardTitle>Cohésion & engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Renforcer la cohésion et l'engagement autour des thématiques IT et services
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-pink-600" />
                </div>
                <CardTitle>Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contribuer à la montée en compétences et à la professionnalisation de la communauté
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                  <CalendarDays className="w-5 h-5 text-amber-600" />
                </div>
                <CardTitle>Événements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Faciliter la communication sur les événements, workshops et rencontres virtuelles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <MessageSquareText className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle>Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Créer des espaces de discussion thématiques pour approfondir les sujets techniques
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Une question ? Un projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour vous accompagner et répondre à toutes vos demandes.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/50">
              Nous contacter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
