import { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container-padding mx-auto py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="glass p-6 flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-muted-foreground">support@fundsgro.com</p>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="glass p-6 flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm</p>
              </div>
            </div>

            <div className="glass p-6 flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-muted-foreground">123 Funding Street</p>
                <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="input-field"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="input-field"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                className="input-field min-h-[150px]"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;