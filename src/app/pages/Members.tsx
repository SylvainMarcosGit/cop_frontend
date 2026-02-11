import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  MessageSquare,
  Award,
  Building,
  MapPin,
  Star
} from "lucide-react";

export function Members() {
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Architecte Cloud",
      organization: "TechCorp",
      location: "Bruxelles",
      avatar: "",
      initials: "SM",
      badges: ["Expert", "Mentor"],
      skills: ["AWS", "Kubernetes", "Terraform"],
      contributions: 45,
      status: "online",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Développeur Full Stack",
      organization: "Digital Solutions",
      location: "Anvers",
      avatar: "",
      initials: "TD",
      badges: ["Contributeur", "Membre Actif"],
      skills: ["React", "Node.js", "Python"],
      contributions: 38,
      status: "online",
    },
    {
      id: 3,
      name: "Marc Laurent",
      role: "DevOps Engineer",
      organization: "CloudTech",
      location: "Gand",
      avatar: "",
      initials: "ML",
      badges: ["Expert", "Speaker"],
      skills: ["Docker", "Jenkins", "GitLab"],
      contributions: 52,
      status: "offline",
    },
    {
      id: 4,
      name: "Anne Bernard",
      role: "Expert Cybersécurité",
      organization: "SecureIT",
      location: "Liège",
      avatar: "",
      initials: "AB",
      badges: ["Expert", "Mentor"],
      skills: ["Sécurité", "Pentesting", "OWASP"],
      contributions: 41,
      status: "online",
    },
    {
      id: 5,
      name: "Julie Petit",
      role: "Data Engineer",
      organization: "DataCorp",
      location: "Bruxelles",
      avatar: "",
      initials: "JP",
      badges: ["Contributeur"],
      skills: ["Python", "Spark", "Kafka"],
      contributions: 27,
      status: "offline",
    },
    {
      id: 6,
      name: "Pierre Moreau",
      role: "Project Manager IT",
      organization: "Agile Partners",
      location: "Namur",
      avatar: "",
      initials: "PM",
      badges: ["Membre Actif"],
      skills: ["Agile", "Scrum", "JIRA"],
      contributions: 19,
      status: "online",
    },
    {
      id: 7,
      name: "Claire Dupont",
      role: "UX/UI Designer",
      organization: "Design Studio",
      location: "Bruxelles",
      avatar: "",
      initials: "CD",
      badges: ["Contributeur"],
      skills: ["Figma", "UI Design", "Prototyping"],
      contributions: 23,
      status: "offline",
    },
    {
      id: 8,
      name: "David Lambert",
      role: "Tech Lead",
      organization: "Innovation Labs",
      location: "Anvers",
      avatar: "",
      initials: "DL",
      badges: ["Expert", "Mentor", "Speaker"],
      skills: ["Architecture", "Leadership", "Microservices"],
      contributions: 67,
      status: "online",
    },
    {
      id: 9,
      name: "Emma Rousseau",
      role: "Backend Developer",
      organization: "CodeFactory",
      location: "Gand",
      avatar: "",
      initials: "ER",
      badges: ["Contributeur"],
      skills: ["Java", "Spring", "PostgreSQL"],
      contributions: 31,
      status: "offline",
    },
    {
      id: 10,
      name: "Lucas Simon",
      role: "Frontend Developer",
      organization: "WebAgency",
      location: "Bruxelles",
      avatar: "",
      initials: "LS",
      badges: ["Membre Actif"],
      skills: ["React", "TypeScript", "Tailwind"],
      contributions: 25,
      status: "online",
    },
  ];

  const topContributors = [...members]
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, 5);

  const onlineMembers = members.filter((member) => member.status === "online");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: "Membres actifs", value: "250+", icon: Users },
    { label: "En ligne", value: onlineMembers.length.toString(), icon: Users },
    { label: "Experts", value: "42", icon: Award },
    { label: "Mentors", value: "28", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Membres de la CoP
          </h1>
          <p className="text-gray-600">
            Découvrez et connectez-vous avec les membres de la communauté
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher un membre..."
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

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Tous les membres</TabsTrigger>
            <TabsTrigger value="online">En ligne</TabsTrigger>
            <TabsTrigger value="top">Top contributeurs</TabsTrigger>
          </TabsList>

          {/* All Members */}
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-lg">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        {member.status === "online" && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg truncate">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="truncate">
                          {member.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {member.badges.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">{member.organization}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{member.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2">
                        {member.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-xs text-gray-500 pt-2">
                        {member.contributions} contributions
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Contacter
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Online Members */}
          <TabsContent value="online">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-lg">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg truncate">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="truncate">
                          {member.role}
                        </CardDescription>
                        <Badge variant="secondary" className="text-xs mt-1">
                          En ligne
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        Profil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Top Contributors */}
          <TabsContent value="top">
            <div className="space-y-4">
              {topContributors.map((member, index) => (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {index + 1}
                        </div>
                        <div className="relative">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="text-lg">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          {member.status === "online" && (
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {member.badges.map((badge) => (
                              <Badge
                                key={badge}
                                variant="secondary"
                                className="text-xs"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-blue-600">
                          {member.contributions}
                        </div>
                        <div className="text-sm text-gray-500">
                          contributions
                        </div>
                        <Button size="sm" className="mt-2">
                          Voir profil
                        </Button>
                      </div>
                    </div>
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
