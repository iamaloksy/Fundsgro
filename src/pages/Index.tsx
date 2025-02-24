import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Campaigns from "./Campaigns";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative hero-gradient">
        <div className="container-padding mx-auto py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fund Your Dreams with{" "}
              <span className="text-primary">Community Support</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch your campaign today and turn your innovative ideas into
              reality. Join thousands of successful creators and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="btn-primary inline-flex items-center group"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/campaigns"
                className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-300 font-medium"
              >
                Explore Campaigns
              </Link>
            </div>
          </div>
        </div>

        <div className="container-padding mx-auto pb-20">
          <div className="glass max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$0.1M+</div>
              <div className="text-sm text-muted-foreground">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">
                Successful Campaigns
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1K+</div>
              <div className="text-sm text-muted-foreground">
                Global Supporters
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

    
      <div className="container-padding mx-auto py-12">
        <Campaigns hideTitle={true} /> {/* Heading hide kar diya */}
      </div>

     
    </div>
  );
};

export default Index;
