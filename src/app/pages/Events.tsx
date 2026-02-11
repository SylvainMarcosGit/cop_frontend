import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar } from "../components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Search,
  Filter,
  Video,
  CheckCircle,
  XCircle
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function Events() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Atelier DevOps & CI/CD",
      date: new Date(2026, 1, 15),
      time: "14h00 - 17h00",
      location: "Salle A - Format hybride",
      type: "Atelier",
      badge: "bg-primary/20 text-primary",
      capacity: 30,
      registered: 18,
      description: "Découvrez les meilleures pratiques DevOps et apprenez à mettre en place une pipeline CI/CD robuste.",
      speaker: "Marc Dubois - DevOps Lead",
      isOnline: true,
      status: "open",
    },
    {
      id: 2,
      title: "Conférence: L'IA dans le développement",
      date: new Date(2026, 1, 22),
      time: "10h00 - 12h00",
      location: "Auditorium - En ligne",
      type: "Conférence",
      badge: "bg-purple-100 text-purple-600",
      capacity: 100,
      registered: 67,
      description: "Explorez comment l'intelligence artificielle transforme le développement logiciel moderne.",
      speaker: "Dr. Sophie Laurent - AI Researcher",
      isOnline: true,
      status: "open",
    },
    {
      id: 3,
      title: "Networking IT Professional",
      date: new Date(2026, 1, 28),
      time: "18h00 - 21h00",
      location: "Espace événementiel",
      type: "Networking",
      badge: "bg-green-100 text-green-600",
      capacity: 50,
      registered: 45,
      description: "Une soirée de networking pour rencontrer d'autres professionnels IT et échanger sur vos projets.",
      speaker: "Event ouvert à tous",
      isOnline: false,
      status: "open",
    },
    {
      id: 4,
      title: "Workshop: Sécurité des applications Web",
      date: new Date(2026, 2, 5),
      time: "09h00 - 16h00",
      location: "Centre de formation",
      type: "Workshop",
      badge: "bg-red-100 text-red-600",
      capacity: 20,
      registered: 20,
      description: "Formation intensive sur les vulnérabilités web courantes et comment les prévenir.",
      speaker: "Thomas Bernard - Security Expert",
      isOnline: false,
      status: "full",
    },
    {
      id: 5,
      title: "Présentation: Architecture Microservices",
      date: new Date(2026, 2, 12),
      time: "15h00 - 17h00",
      location: "Salle B - Format hybride",
      type: "Présentation",
      badge: "bg-yellow-100 text-yellow-600",
      capacity: 40,
      registered: 22,
      description: "Découvrez les principes et patterns d'architecture microservices avec des exemples concrets.",
      speaker: "Anne Martin - Solution Architect",
      isOnline: true,
      status: "open",
    },
    {
      id: 6,
      title: "Hackathon CoP 2026",
      date: new Date(2026, 2, 20),
      time: "09h00 - 18h00",
      location: "Campus Tech",
      type: "Hackathon",
      badge: "bg-indigo-100 text-indigo-600",
      capacity: 60,
      registered: 38,
      description: "24h de développement en équipe sur des challenges innovants proposés par la communauté.",
      speaker: "Événement communautaire",
      isOnline: false,
      status: "open",
    },
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Workshop Cloud Architecture",
      date: new Date(2026, 0, 10),
      attendees: 42,
      type: "Workshop",
      badge: "bg-gray-100 text-gray-600",
    },
    {
      id: 102,
      title: "Conférence Docker & Kubernetes",
      date: new Date(2026, 0, 5),
      attendees: 78,
      type: "Conférence",
      badge: "bg-gray-100 text-gray-600",
    },
    {
      id: 103,
      title: "Networking de rentrée",
      date: new Date(2025, 11, 15),
      attendees: 55,
      type: "Networking",
      badge: "bg-gray-100 text-gray-600",
    },
  ];

  const filteredUpcomingEvents = upcomingEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Événements de la CoP
          </h1>
          <p className="text-gray-600">
            Participez aux ateliers, conférences et rencontres de la communauté
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher un événement..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">À venir</TabsTrigger>
            <TabsTrigger value="calendar">Calendrier</TabsTrigger>
            <TabsTrigger value="past">Passés</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUpcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className={`hover:shadow-lg transition-shadow ${
                    event.status === "full" ? "opacity-75" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={event.badge}>{event.type}</Badge>
                      {event.isOnline && (
                        <Badge variant="outline" className="flex items-center">
                          <Video className="w-3 h-3 mr-1" />
                          En ligne
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.speaker}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex items-center text-gray-600">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {format(event.date, "d MMMM yyyy", { locale: fr })}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.registered}/{event.capacity} inscrits
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: `${(event.registered / event.capacity) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full"
                          onClick={() => setSelectedEvent(event)}
                          disabled={event.status === "full"}
                        >
                          {event.status === "full" ? (
                            <>
                              <XCircle className="w-4 h-4 mr-2" />
                              Complet
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              S'inscrire
                            </>
                          )}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{event.title}</DialogTitle>
                          <DialogDescription>
                            {event.speaker}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-gray-600">{event.description}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Date & Heure</h4>
                              <p className="text-gray-600">
                                {format(event.date, "d MMMM yyyy", { locale: fr })}
                                <br />
                                {event.time}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Lieu</h4>
                              <p className="text-gray-600">{event.location}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Disponibilité</h4>
                            <p className="text-gray-600">
                              {event.registered}/{event.capacity} places réservées
                            </p>
                          </div>
                          <Button className="w-full">
                            Confirmer l'inscription
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Calendrier</CardTitle>
                  <CardDescription>
                    Sélectionnez une date pour voir les événements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Événements - {date && format(date, "d MMMM yyyy", { locale: fr })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {upcomingEvents
                      .filter(
                        (event) =>
                          date &&
                          event.date.toDateString() === date.toDateString()
                      )
                      .map((event) => (
                        <div
                          key={event.id}
                          className="p-4 border rounded-lg mb-3 hover:bg-gray-50"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className={event.badge + " mb-2"}>
                                {event.type}
                              </Badge>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {event.time} - {event.location}
                              </p>
                            </div>
                            <Button size="sm">Détails</Button>
                          </div>
                        </div>
                      ))}
                    {(!date ||
                      !upcomingEvents.some(
                        (event) =>
                          event.date.toDateString() === date.toDateString()
                      )) && (
                      <p className="text-gray-500 text-center py-8">
                        Aucun événement prévu pour cette date
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <Badge className={event.badge}>{event.type}</Badge>
                    <CardTitle className="text-lg mt-2">{event.title}</CardTitle>
                    <CardDescription>
                      {format(event.date, "d MMMM yyyy", { locale: fr })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} participants
                    </div>
                    <Button variant="outline" className="w-full">
                      Voir le compte-rendu
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
