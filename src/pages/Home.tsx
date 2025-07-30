import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { CheckSquare, Calendar, Users, Zap } from 'lucide-react';

export default function Home() {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: CheckSquare,
      title: 'Smart Task Management',
      description: 'Organize your tasks with priorities, due dates, and categories.'
    },
    {
      icon: Calendar,
      title: 'Calendar Integration',
      description: 'Never miss a deadline with our intelligent scheduling system.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share tasks and collaborate with your team seamlessly.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern technology for exceptional performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Organize Your Life
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate task management app that helps you stay focused, organized, and productive.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isAuthenticated ? (
              <>
                <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90">
                  <Link to="/register">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              </>
            ) : (
              <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join thousands of productive users</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">100K+</div>
                <div className="text-muted-foreground">Tasks Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="text-center space-y-6 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get organized?</h2>
            <p className="text-xl text-muted-foreground">
              Start your journey to better productivity today.
            </p>
            <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90">
              <Link to="/register">Create Free Account</Link>
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 TaskFlow. Built with ❤️ for productivity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}