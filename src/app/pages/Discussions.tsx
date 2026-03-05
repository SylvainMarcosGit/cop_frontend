import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { MessageSquare, ThumbsUp, Clock, Plus } from "lucide-react";

export function Discussions() {
    const categories = [
        { title: "Général", description: "Discussions générales sur l'IT au Bénin", threads: 14, lastPost: "Il y a 2h" },
        { title: "Dématérialisation", description: "Échanges sur la digitalisation des services publics", threads: 8, lastPost: "Il y a 5h" },
        { title: "Technique & Architecture", description: "Débats techniques et retours d'expérience sur l'architecture", threads: 24, lastPost: "Hier" },
    ];

    const recentThreads = [
        { title: "Déploiement d'une infrastructure PKI pour l'administration", author: "Marc Dubois", replies: 12, views: 156, time: "Il y a 3h", category: "Technique & Architecture" },
        { title: "Meilleures pratiques pour l'intégration ESN-DSI", author: "Sylvie Koffi", replies: 8, views: 89, time: "Il y a 6h", category: "Général" },
        { title: "Quid du cloud souverain au Bénin ?", author: "Jean-Paul Azon", replies: 34, views: 412, time: "Hier", category: "Dématérialisation" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discussions (Forum)</h1>
                        <p className="text-gray-600">Rejoignez la conversation avec les autres membres de la communauté.</p>
                    </div>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Nouveau sujet
                    </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Thématiques</h2>
                        <div className="space-y-4">
                            {categories.map((category, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
                                                <CardDescription className="mt-1">{category.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-sm text-gray-500 py-2 border-t mt-2 flex justify-between bg-gray-50 rounded-b-lg">
                                        <span>{category.threads} sujets</span>
                                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Dernier message: {category.lastPost}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <h2 className="text-xl font-semibold mt-10 mb-4">Sujets récents</h2>
                        <div className="space-y-3">
                            {recentThreads.map((thread, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg border shadow-sm flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="text-xs font-semibold text-primary uppercase bg-primary/10 px-2 py-1 rounded-full">{thread.category}</span>
                                        <h3 className="font-semibold text-gray-900 mt-2 hover:text-primary cursor-pointer transition-colors">{thread.title}</h3>
                                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-3">
                                            <span>Par {thread.author}</span>
                                            <span>•</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {thread.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 text-gray-500 text-sm pl-4 border-l">
                                        <div className="flex flex-col items-center">
                                            <span className="font-semibold text-gray-900">{thread.replies}</span>
                                            <span>Réponses</span>
                                        </div>
                                        <div className="flex flex-col items-center hidden sm:flex">
                                            <span className="font-semibold text-gray-900">{thread.views}</span>
                                            <span>Vues</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Modération</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-4">
                                    Cet espace est modéré. Veuillez respecter la charte de la communauté lors de vos échanges.
                                </p>
                                <Button variant="outline" className="w-full text-sm">Lire la charte</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Statistiques</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600 flex items-center"><MessageSquare className="w-4 h-4 mr-2 text-primary" /> Messages</span>
                                    <span className="font-semibold">1,245</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-t pt-4">
                                    <span className="text-gray-600 flex items-center"><ThumbsUp className="w-4 h-4 mr-2 text-primary" /> Remerciements</span>
                                    <span className="font-semibold">3,890</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
