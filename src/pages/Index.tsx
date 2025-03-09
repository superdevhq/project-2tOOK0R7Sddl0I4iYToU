
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Create memorable events, <span className="text-primary">effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            The simplest way to host, manage, and grow your events. No pricing tiers, all features included.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/create-event">Create an event</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/events">Browse events</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need for successful events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Simple Event Creation</CardTitle>
                <CardDescription>Create beautiful event pages in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our intuitive editor makes it easy to create professional event pages with all the details your attendees need.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Attendee Management</CardTitle>
                <CardDescription>Keep track of who's coming</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage registrations, send updates, and communicate with your attendees all in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Event Analytics</CardTitle>
                <CardDescription>Understand your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get insights into registration patterns, attendance rates, and more to improve your future events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover amazing events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* These would be dynamically generated from your database */}
            <EventCard 
              title="Web Development Workshop"
              date="June 15, 2024"
              location="San Francisco, CA"
              attendees={42}
              imageUrl="/placeholder.svg"
            />
            <EventCard 
              title="Design Systems Conference"
              date="July 22, 2024"
              location="New York, NY"
              attendees={128}
              imageUrl="/placeholder.svg"
            />
            <EventCard 
              title="Product Management Meetup"
              date="August 5, 2024"
              location="Austin, TX"
              attendees={64}
              imageUrl="/placeholder.svg"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">View all events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to host your next event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of event organizers who trust our platform for their events.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Get started for free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">EventHub</h3>
              <p className="text-gray-600">The simplest way to host events</p>
            </div>
            <div className="flex gap-8">
              <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-primary">Terms</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>© {new Date().getFullYear()} EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, date, location, attendees, imageUrl }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{date} • {location}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600">{attendees} attendees</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/event-details">View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Index;
