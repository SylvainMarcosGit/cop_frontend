import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {
  BookOpen,
  Search,
  Filter,
  Download,
  Eye,
  ThumbsUp,
  Upload,
  FileText,
  Video,
  Link as LinkIcon,
  Folder,
  Star,
} from "lucide-react";

export function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Toutes les catégories", count: 150 },
    { id: "guides", name: "Guides & Tutoriels", count: 45 },
    { id: "best-practices", name: "Bonnes pratiques", count: 32 },
    { id: "documentation", name: "Documentation technique", count: 28 },
    { id: "videos", name: "Vidéos & Webinaires", count: 25 },
    { id: "case-studies", name: "Études de cas", count: 20 },
  ];

  const resources = [
    {
      id: 1,
      title: "Guide complet des bonnes pratiques en cybersécurité",
      description:
        "Un guide exhaustif couvrant les aspects essentiels de la sécurité des applications web et des infrastructures cloud.",
      category: "Bonnes pratiques",
      type: "PDF",
      icon: FileText,
      author: "Sophie Martin",
      date: "5 février 2026",
      views: 342,
      downloads: 156,
      likes: 89,
      tags: ["Cybersécurité", "Cloud", "DevSecOps"],
      level: "Intermédiaire",
    },
    {
      id: 2,
      title: "Architecture Microservices: De la théorie à la pratique",
      description:
        "Découvrez comment concevoir, implémenter et déployer une architecture microservices évolutive.",
      category: "Guides & Tutoriels",
      type: "PDF",
      icon: FileText,
      author: "Thomas Dubois",
      date: "3 février 2026",
      views: 278,
      downloads: 124,
      likes: 67,
      tags: ["Architecture", "Microservices", "Kubernetes"],
      level: "Avancé",
    },
    {
      id: 3,
      title: "Introduction à Docker et aux conteneurs",
      description:
        "Apprenez les bases de la conteneurisation et comment utiliser Docker pour vos projets.",
      category: "Guides & Tutoriels",
      type: "Vidéo",
      icon: Video,
      author: "Marc Laurent",
      date: "1 février 2026",
      views: 456,
      downloads: 0,
      likes: 102,
      tags: ["Docker", "DevOps", "Conteneurisation"],
      level: "Débutant",
    },
    {
      id: 4,
      title: "CI/CD avec GitLab: Pipeline moderne",
      description:
        "Un guide pratique pour mettre en place une pipeline CI/CD complète avec GitLab.",
      category: "Documentation technique",
      type: "PDF",
      icon: FileText,
      author: "Anne Bernard",
      date: "28 janvier 2026",
      views: 312,
      downloads: 143,
      likes: 78,
      tags: ["CI/CD", "GitLab", "DevOps"],
      level: "Intermédiaire",
    },
    {
      id: 5,
      title: "Retour d'expérience: Migration vers le cloud",
      description:
        "Découvrez notre parcours de migration d'une infrastructure on-premise vers AWS.",
      category: "Études de cas",
      type: "Article",
      icon: LinkIcon,
      author: "Julie Petit",
      date: "25 janvier 2026",
      views: 289,
      downloads: 0,
      likes: 56,
      tags: ["Cloud", "AWS", "Migration"],
      level: "Tous niveaux",
    },
    {
      id: 6,
      title: "Webinaire: Les tendances IT 2026",
      description:
        "Enregistrement du webinaire sur les principales tendances technologiques de l'année.",
      category: "Vidéos & Webinaires",
      type: "Vidéo",
      icon: Video,
      author: "Équipe CoP",
      date: "20 janvier 2026",
      views: 523,
      downloads: 0,
      likes: 134,
      tags: ["Tendances", "Innovation", "IA"],
      level: "Tous niveaux",
    },
  ];

  const popularResources = resources
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const recentResources = resources.slice(0, 6);

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqItems = [
    {
      question: "Comment puis-je partager une ressource ?",
      answer:
        "Cliquez sur le bouton 'Partager une ressource' en haut de la page. Remplissez le formulaire avec les informations de votre ressource et elle sera soumise à validation.",
    },
    {
      question: "Quels types de ressources puis-je partager ?",
      answer:
        "Vous pouvez partager des guides PDF, des vidéos, des liens vers des articles, des présentations, du code source, et tout autre contenu pertinent pour la communauté.",
    },
    {
      question: "Les ressources sont-elles validées avant publication ?",
      answer:
        "Oui, toutes les ressources sont vérifiées par les modérateurs pour s'assurer qu'elles sont pertinentes et de qualité avant d'être publiées.",
    },
    {
      question: "Puis-je télécharger les ressources pour une utilisation hors ligne ?",
      answer:
        "Oui, la plupart des ressources peuvent être téléchargées. Cliquez sur le bouton de téléchargement à côté de chaque ressource.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Base documentaire
            </h1>
            <p className="text-gray-600">
              Accédez à une bibliothèque de ressources partagées par la communauté
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Partager une ressource
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Partager une nouvelle ressource</DialogTitle>
                <DialogDescription>
                  Partagez vos connaissances avec la communauté
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre *</Label>
                  <Input id="title" placeholder="Titre de la ressource" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez brièvement le contenu..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guides">Guides & Tutoriels</SelectItem>
                        <SelectItem value="best-practices">
                          Bonnes pratiques
                        </SelectItem>
                        <SelectItem value="documentation">
                          Documentation technique
                        </SelectItem>
                        <SelectItem value="videos">Vidéos & Webinaires</SelectItem>
                        <SelectItem value="case-studies">
                          Études de cas
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Niveau *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Débutant</SelectItem>
                        <SelectItem value="intermediate">
                          Intermédiaire
                        </SelectItem>
                        <SelectItem value="advanced">Avancé</SelectItem>
                        <SelectItem value="all">Tous niveaux</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
                  <Input
                    id="tags"
                    placeholder="ex: Docker, DevOps, CI/CD"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Fichier ou URL</Label>
                  <Input id="file" type="file" />
                  <p className="text-xs text-gray-500">
                    Ou collez l'URL d'une ressource externe
                  </p>
                  <Input placeholder="https://..." />
                </div>

                <Button type="submit" className="w-full">
                  Soumettre la ressource
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher dans les ressources..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtres avancés
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="popular">Populaires</TabsTrigger>
            <TabsTrigger value="recent">Récentes</TabsTrigger>
            <TabsTrigger value="categories">Par catégorie</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* All Resources */}
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{resource.category}</Badge>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm ml-1">{resource.likes}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg flex items-center">
                        <Icon className="w-5 h-5 mr-2 text-primary" />
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {resource.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {resource.views}
                            </span>
                            {resource.downloads > 0 && (
                              <span className="flex items-center">
                                <Download className="w-4 h-4 mr-1" />
                                {resource.downloads}
                              </span>
                            )}
                          </div>
                          <Badge variant="outline">{resource.level}</Badge>
                        </div>

                        <div className="text-xs text-gray-500">
                          Par {resource.author} · {resource.date}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Voir
                          </Button>
                          {resource.downloads > 0 && (
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Popular Resources */}
          <TabsContent value="popular">
            <div className="grid md:grid-cols-2 gap-6">
              {popularResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <Badge variant="secondary">{resource.category}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg flex items-center">
                        <Icon className="w-5 h-5 mr-2 text-primary" />
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {resource.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {resource.likes}
                          </span>
                        </div>
                        <Button size="sm">Voir</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Recent Resources */}
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentResources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900">
                                {resource.title}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {resource.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {resource.description}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{resource.author}</span>
                              <span>·</span>
                              <span>{resource.date}</span>
                              <span>·</span>
                              <span className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {resource.views}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" className="ml-4">
                          Voir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Categories */}
          <TabsContent value="categories">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Folder className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {category.name}
                          </CardTitle>
                          <CardDescription>
                            {category.count} ressources
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
                <CardDescription>
                  Trouvez des réponses aux questions courantes sur les ressources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
