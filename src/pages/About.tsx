import { Heart, Users, Target, Award, Link } from "lucide-react";

const About = () => {
  return (
    <div className="container-padding mx-auto py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Fundsgro</h1>
          <p className="text-xl text-muted-foreground">
            Empowering dreams, one campaign at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              At Fundsgro, we believe in the power of collective giving. Our platform connects passionate innovators with generous supporters, creating a community where great ideas flourish and dreams become reality.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&q=80"
            alt="Team collaboration"
            className="rounded-lg object-cover h-64 w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="glass p-6 text-center space-y-4">
            <Heart className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold">Trust</h3>
            <p className="text-sm text-muted-foreground">
              Built on transparency and security
            </p>
          </div>
          <div className="glass p-6 text-center space-y-4">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold">Community</h3>
            <p className="text-sm text-muted-foreground">
              Strong network of supporters
            </p>
          </div>
          <div className="glass p-6 text-center space-y-4">
            <Target className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold">Impact</h3>
            <p className="text-sm text-muted-foreground">
              Real results for real causes
            </p>
          </div>
          <div className="glass p-6 text-center space-y-4">
            <Award className="w-8 h-8 text-primary mx-auto" />
            <h3 className="font-semibold">Excellence</h3>
            <p className="text-sm text-muted-foreground">
              Committed to quality
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to fund your next big idea or support amazing causes, Fundsgro is here to help you make it happen.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/campaigns" className="btn-primary">
              Browse Campaigns
            </Link>
            <Link to="/start" className="px-6 py-3 rounded-lg border hover:border-primary transition-colors">
              Start a Campaign
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;