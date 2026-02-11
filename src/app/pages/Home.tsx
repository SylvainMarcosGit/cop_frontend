import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Calendar,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const stats = [
    { label: "Membres actifs", value: "250+", icon: Users },
    { label: "Événements/an", value: "30+", icon: Calendar },
    { label: "Ressources", value: "150+", icon: BookOpen },
    { label: "Discussions", value: "500+", icon: MessageSquare },
  ];

  const upcomingEvents = [
    {
      title: "Atelier DevOps & CI/CD",
      date: "15 février 2026",
      time: "14h00 - 17h00",
      location: "Salle A - Format hybride",
      badge: "Atelier",
      badgeColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Conférence: L'IA dans le développement",
      date: "22 février 2026",
      time: "10h00 - 12h00",
      location: "Auditorium - En ligne",
      badge: "Conférence",
      badgeColor: "bg-purple-100 text-purple-600",
    },
    {
      title: "Networking IT Professional",
      date: "28 février 2026",
      time: "18h00 - 21h00",
      location: "Espace événementiel",
      badge: "Networking",
      badgeColor: "bg-green-100 text-green-600",
    },
  ];

  const recentNews = [
    {
      title: "Nouvelle ressource: Guide des bonnes pratiques en cybersécurité",
      date: "5 février 2026",
      excerpt: "Un guide complet pour sécuriser vos applications et infrastructures.",
      category: "Cybersécurité",
    },
    {
      title: "Retour sur l'atelier Cloud Architecture",
      date: "3 février 2026",
      excerpt: "Plus de 40 participants pour un atelier enrichissant sur les architectures cloud modernes.",
      category: "Cloud",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-variant))' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm">Plateforme collaborative IT</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Communauté de Pratiques pour les professionnels IT
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Rejoignez une communauté dynamique et collaborative qui favorise
                l'échange de connaissances, l'apprentissage continu et
                l'innovation dans le secteur informatique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/50">
                    Rejoindre la communauté
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/events">
                  {/*  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Voir les événements
                  </Button>*/}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-2xl">
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

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Objectifs de la CoP
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre plateforme vise à créer un espace dynamique et intuitif pour
              les membres de la communauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <CardTitle>Espace dynamique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offrir un espace interactif et intuitif pour faciliter les
                  échanges et la collaboration entre les membres
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle>Partage d'expériences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Favoriser le partage d'expériences, réussites et
                  apprentissages entre professionnels de l'IT
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle>Cohésion & engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Renforcer la cohésion et l'engagement autour des thématiques
                  IT et services
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle>Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Contribuer à la montée en compétences et à la
                  professionnalisation de la communauté
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <CardTitle>Événements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Faciliter la communication sur les événements, workshops et
                  rencontres virtuelles
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle>Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Créer des espaces de discussion thématiques pour approfondir
                  les sujets techniques
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Événements à venir
              </h2>
              <p className="text-gray-600">
                Ne manquez pas nos prochains ateliers et rencontres
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline">
                Voir tout
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={event.badgeColor}>{event.badge}</Badge>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">S'inscrire</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Actualités de la communauté
              </h2>
              <p className="text-gray-600">
                Restez informé des dernières nouvelles
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{news.excerpt}</CardDescription>
                  <Button variant="link" className="px-0 mt-2">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
