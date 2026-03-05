import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Users, Shield, Target } from "lucide-react";

export function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez le Club DSI, nos administrateurs, notre gouvernance et les objectifs institutionnels de la Communauté de Pratiques.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Club DSI</h2>
                        <p className="text-gray-600 mb-4">
                            Le Club DSI est une association regroupant les Directeurs des Systèmes d'Information et professionnels de l'IT du Bénin.
                            Notre mission est de promouvoir la dématérialisation et l'excellence dans le secteur public béninois.
                        </p>
                        <p className="text-gray-600">
                            [Texte à compléter avec les informations exactes de présentation du Club DSI]
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3MjkwMDM0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Réunion du Club DSI"
                            className="rounded-lg shadow-lg object-cover w-full h-full max-h-80"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle>Administrateurs</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardDescription>
                                [Liste ou présentation visuelle des administrateurs à insérer ici]
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle>Gouvernance</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardDescription>
                                [Détails sur la structure de gouvernance et les processus de décision à insérer ici]
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle>Objectifs Institutionnels</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardDescription>
                                [Description des objectifs institutionnels de la CoP et du Club DSI à insérer ici]
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
