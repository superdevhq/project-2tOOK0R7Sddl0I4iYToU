
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Edit, MapPin, MoreHorizontal, Plus, Trash2, Users } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  // Mock data - in a real app, this would come from your database
  const [myEvents, setMyEvents] = useState([
    {
      id: 1,
      title: "Web Development Workshop",
      date: "June 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "San Francisco, CA",
      attendees: 42,
      imageUrl: "/placeholder.svg",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Design Systems Conference",
      date: "July 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "New York, NY",
      attendees: 128,
      imageUrl: "/placeholder.svg",
      status: "upcoming"
    }
  ]);

  const [registeredEvents, setRegisteredEvents] = useState([
    {
      id: 3,
      title: "Product Management Meetup",
      date: "August 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Austin, TX",
      attendees: 64,
      imageUrl: "/placeholder.svg",
      organizer: "Product Minds",
      status: "upcoming"
    },
    {
      id: 4,
      title: "AI and Machine Learning Summit",
      date: "September 12, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Seattle, WA",
      attendees: 95,
      imageUrl: "/placeholder.svg",
      organizer: "AI Research Group",
      status: "upcoming"
    }
  ]);

  const [pastEvents, setPastEvents] = useState([
    {
      id: 5,
      title: "JavaScript Fundamentals",
      date: "March 10, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 56,
      imageUrl: "/placeholder.svg",
      organizer: "Code Academy",
      status: "past"
    }
  ]);

  const handleDeleteEvent = (id: number) => {
    setMyEvents(myEvents.filter(event => event.id !== id));
  };

  const handleCancelRegistration = (id: number) => {
    setRegisteredEvents(registeredEvents.filter(event => event.id !== id));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome, Jane!</h1>
                <p className="text-gray-600">Manage your events and registrations</p>
              </div>
            </div>
            <Button asChild>
              <Link to="/create-event">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Link>
            </Button>
          </div>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="my-events" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="my-events">My Events</TabsTrigger>
              <TabsTrigger value="registered">Registered</TabsTrigger>
              <TabsTrigger value="past-events">Past Events</TabsTrigger>
            </TabsList>

            {/* My Events Tab */}
            <TabsContent value="my-events">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Events You're Organizing</h2>
                  <p className="text-sm text-gray-600">{myEvents.length} events</p>
                </div>

                {myEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {myEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden bg-gray-100">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                  <Link to={`/events/${event.id}/edit`} className="flex items-center">
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit event
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link to={`/events/${event.id}/attendees`} className="flex items-center">
                                    <Users className="mr-2 h-4 w-4" />
                                    Manage attendees
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="text-red-600 focus:text-red-600"
                                  onClick={() => handleDeleteEvent(event.id)}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete event
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="mr-2 h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="mr-2 h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="mr-2 h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="mr-2 h-4 w-4" />
                            {event.attendees} attendees
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" asChild className="flex-1">
                            <Link to={`/events/${event.id}`}>View</Link>
                          </Button>
                          <Button asChild className="flex-1">
                            <Link to={`/events/${event.id}/manage`}>Manage</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No events yet</h3>
                      <p className="text-gray-600 text-center mb-6">
                        You haven't created any events yet. Start by creating your first event.
                      </p>
                      <Button asChild>
                        <Link to="/create-event">
                          <Plus className="mr-2 h-4 w-4" />
                          Create Event
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Registered Events Tab */}
            <TabsContent value="registered">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Events You're Attending</h2>
                  <p className="text-sm text-gray-600">{registeredEvents.length} events</p>
                </div>

                {registeredEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {registeredEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden bg-gray-100">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription>Organized by {event.organizer}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="mr-2 h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="mr-2 h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="mr-2 h-4 w-4" />
                            {event.location}
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button variant="outline" asChild className="flex-1">
                            <Link to={`/events/${event.id}`}>View details</Link>
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleCancelRegistration(event.id)}
                          >
                            Cancel registration
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No registrations</h3>
                      <p className="text-gray-600 text-center mb-6">
                        You haven't registered for any upcoming events yet.
                      </p>
                      <Button asChild>
                        <Link to="/events">Browse Events</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Past Events Tab */}
            <TabsContent value="past-events">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Past Events</h2>
                  <p className="text-sm text-gray-600">{pastEvents.length} events</p>
                </div>

                {pastEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {pastEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden opacity-80">
                        <div className="aspect-video w-full overflow-hidden bg-gray-100">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription>Organized by {event.organizer}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="mr-2 h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="mr-2 h-4 w-4" />
                            {event.location}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" asChild className="w-full">
                            <Link to={`/events/${event.id}`}>View details</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium mb-2">No past events</h3>
                      <p className="text-gray-600 text-center">
                        You don't have any past events to display.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
