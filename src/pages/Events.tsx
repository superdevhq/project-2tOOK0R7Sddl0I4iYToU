
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Search, Users } from "lucide-react";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - in a real app, this would come from your database
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      date: "June 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "San Francisco, CA",
      attendees: 42,
      imageUrl: "/placeholder.svg",
      organizer: "Tech Academy",
      category: "Technology"
    },
    {
      id: 2,
      title: "Design Systems Conference",
      date: "July 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "New York, NY",
      attendees: 128,
      imageUrl: "/placeholder.svg",
      organizer: "Design Guild",
      category: "Design"
    },
    {
      id: 3,
      title: "Product Management Meetup",
      date: "August 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Austin, TX",
      attendees: 64,
      imageUrl: "/placeholder.svg",
      organizer: "Product Minds",
      category: "Business"
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
      category: "Technology"
    },
    {
      id: 5,
      title: "Startup Networking Mixer",
      date: "October 3, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Boston, MA",
      attendees: 75,
      imageUrl: "/placeholder.svg",
      organizer: "Founder's Club",
      category: "Business"
    },
    {
      id: 6,
      title: "UX Research Workshop",
      date: "November 18, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Chicago, IL",
      attendees: 38,
      imageUrl: "/placeholder.svg",
      organizer: "UX Alliance",
      category: "Design"
    }
  ];

  // Filter events based on search query
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Discover Events</h1>
            <p className="text-gray-600">Find and join amazing events near you</p>
          </div>
          <Button asChild>
            <Link to="/create-event">Create Event</Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search events by name, location, or category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="this-week">This Week</TabsTrigger>
              <TabsTrigger value="this-month">This Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// Event Card Component
const EventCard = ({ event }) => {
  const { id, title, date, time, location, attendees, imageUrl, organizer, category } = event;
  
  return (
    <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="text-sm text-primary font-medium mb-1">{category}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Calendar size={14} />
          {date} • {time}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 pb-2">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users size={14} className="mr-1" />
          {attendees} attendees
        </div>
        <div className="text-sm">
          Organized by <span className="font-medium">{organizer}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/events/${id}`}>View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Events;
