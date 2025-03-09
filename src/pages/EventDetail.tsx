
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Share2, Users, ExternalLink } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(false);
  
  // Mock event data - in a real app, this would be fetched from your database
  const event = {
    id: parseInt(id || "1"),
    title: "Web Development Workshop",
    date: "June 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Conference Center",
    address: "123 Innovation St, San Francisco, CA 94103",
    attendees: 42,
    capacity: 50,
    imageUrl: "/placeholder.svg",
    organizer: "Tech Academy",
    organizerImage: "/placeholder.svg",
    category: "Technology",
    description: `
      <p>Join us for a comprehensive workshop on modern web development practices and tools. This full-day session is perfect for developers looking to enhance their skills and stay current with industry trends.</p>
      
      <p>What you'll learn:</p>
      <ul>
        <li>Modern JavaScript frameworks and libraries</li>
        <li>Responsive design principles</li>
        <li>Performance optimization techniques</li>
        <li>Accessibility best practices</li>
        <li>API integration strategies</li>
      </ul>
      
      <p>This workshop is suitable for intermediate developers with at least basic knowledge of HTML, CSS, and JavaScript. Bring your laptop and come ready to code!</p>
      
      <p>Lunch and refreshments will be provided.</p>
    `,
    agenda: [
      { time: "10:00 AM", title: "Welcome and Introduction" },
      { time: "10:30 AM", title: "Modern Frontend Frameworks Overview" },
      { time: "12:00 PM", title: "Lunch Break" },
      { time: "1:00 PM", title: "Hands-on Coding Session" },
      { time: "3:00 PM", title: "Performance Optimization Workshop" },
      { time: "4:00 PM", title: "Q&A and Networking" }
    ]
  };

  const handleRegister = () => {
    // In a real app, this would send a request to your backend
    setIsRegistered(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Event Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/events" className="text-sm text-primary hover:underline">
                ← Back to events
              </Link>
              <Badge>{event.category}</Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex items-center mb-6">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={event.organizerImage} alt={event.organizer} />
                <AvatarFallback>{event.organizer.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-gray-600">Organized by</p>
                <p className="font-medium">{event.organizer}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="md:col-span-2">
              {/* Event Image */}
              <div className="rounded-lg overflow-hidden mb-8 border">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Event Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About this event</h2>
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </div>

              {/* Event Agenda */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Agenda</h2>
                <Card>
                  <CardContent className="p-0">
                    <ul className="divide-y">
                      {event.agenda.map((item, index) => (
                        <li key={index} className="flex py-4 px-6">
                          <div className="w-24 font-medium text-gray-600">{item.time}</div>
                          <div>{item.title}</div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Card */}
            <div>
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{event.date}</p>
                        <p className="text-sm text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{event.location}</p>
                        <p className="text-sm text-gray-600">{event.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{event.attendees} attending</p>
                        <p className="text-sm text-gray-600">{event.capacity - event.attendees} spots left</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      {isRegistered ? (
                        <div className="text-center space-y-4">
                          <div className="bg-green-50 text-green-700 px-4 py-3 rounded-md">
                            You're registered for this event!
                          </div>
                          <Button variant="outline" className="w-full">
                            Add to calendar
                          </Button>
                        </div>
                      ) : (
                        <Button className="w-full" onClick={handleRegister}>
                          Register for free
                        </Button>
                      )}
                    </div>
                    
                    <div className="pt-2 flex justify-center">
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share event
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Similar Events */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar events you might like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden bg-gray-100">
                    <img 
                      src="/placeholder.svg" 
                      alt="Event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1">Related Tech Event {i}</h3>
                    <p className="text-sm text-gray-600 mb-2">July {10 + i}, 2024</p>
                    <Link 
                      to={`/events/${event.id + i}`} 
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center"
                    >
                      View details
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
