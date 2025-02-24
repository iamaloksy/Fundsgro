
import { useParams } from "react-router-dom";
import { Clock, Target, Users, ArrowLeftCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

const CampaignDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const campaign = {
    id: 1,
    title: "Eco-Friendly Water Bottles",
    description: `Our mission is to reduce plastic waste by introducing innovative, sustainable water bottles made from biodegradable materials. These bottles are designed to break down naturally after their useful life, leaving no harmful residues in our environment.

    Why support us?
    - Reduce plastic pollution
    - Support sustainable innovation
    - Create a cleaner future
    
    Your contribution will help us:
    1. Complete final product development
    2. Set up manufacturing
    3. Launch our first production run
    4. Distribute to early supporters`,
    target: 50000,
    raised: 32000,
    daysLeft: 15,
    backers: 245,
    creator: {
      name: "Alex",
      title: "Entrepreneur",
      image: "https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png",
    },
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3dc51d14580227.5628639e9d687.jpg",
    updates: [
      {
        date: "2024-02-15",
        title: "Production Update",
        content: "We've finalized the design and are ready for manufacturing!",
      },
    ],
  };


  
  const recentDonations = [
    { id: 1, name: "John Doe", amount: 100, date: "2024-02-15" },
    { id: 2, name: "Jane Smith", amount: 250, date: "2024-02-14" },
    { id: 3, name: "Alex Brown", amount: 50, date: "2024-02-14" },
  ];

  

  const handleDonation = async () => {
    setIsLoading(true);
    try {
      await loadRazorpay();

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Please login",
          description: "You need to be logged in to make a donation",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch('https://vkhreviytqvqqhxkzfbe.supabase.co/functions/v1/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        },
        body: JSON.stringify({
          amount: 100
        })
      });

      const { id: order_id } = await response.json();

      const options = {
        key: "RAZORPAY_KEY_ID",
        amount: 100 * 100,
        currency: "INR",
        name: campaign.title,
        description: "Campaign Donation",
        order_id: order_id,
        handler: async function (response: any) {
          const { error } = await supabase.from('donations').insert({
            campaign_id: id,
            user_id: user.id,
            amount: 100,
            status: 'completed',
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id
          });

          if (error) {
            toast({
              title: "Error recording donation",
              description: error.message,
              variant: "destructive",
            });
            return;
          }

          toast({
            title: "Thank you for your donation!",
            description: "Your support means a lot to us.",
          });
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: "#10B981",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-padding mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/campaigns"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeftCircle className="w-4 h-4 mr-2" />
          Back to Campaigns
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{campaign.title}</h1>
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full rounded-xl object-cover h-[400px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="glass p-6 space-y-4">
                <h2 className="text-xl font-semibold">About the Campaign</h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {campaign.description}
                </div>
              </div>

              <div className="glass p-6 space-y-4">
                <h2 className="text-xl font-semibold">Campaign Updates</h2>
                {campaign.updates.map((update) => (
                  <div key={update.date} className="space-y-2">
                    <h3 className="font-medium">{update.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {update.content}
                    </p>
                    <p className="text-xs text-muted-foreground">{update.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 space-y-6">
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${(campaign.raised / campaign.target) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">
                      ${campaign.raised.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      of ${campaign.target.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Target className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">
                      ${campaign.target.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Goal</div>
                  </div>
                  <div>
                    <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">
                      {campaign.backers}
                    </div>
                    <div className="text-xs text-muted-foreground">Backers</div>
                  </div>
                  <div>
                    <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">{campaign.daysLeft}</div>
                    <div className="text-xs text-muted-foreground">Days Left</div>
                  </div>
                </div>

                <button 
                  className="btn-primary w-full" 
                  onClick={handleDonation}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Donate"}
                </button>
                
                <button className="w-full px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center justify-center gap-2 hover:border-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <div className="glass p-6 space-y-4">
                <h3 className="font-semibold">Created by</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={campaign.creator.image}
                    alt={campaign.creator.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{campaign.creator.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {campaign.creator.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-6 space-y-4">
                <h3 className="font-semibold">Recent Donations</h3>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <div
                      key={donation.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium">{donation.name}</span>
                      <span className="text-primary">
                        ${donation.amount.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { supabase } from "@/integrations/supabase/client";

// const CampaignDetail = () => {
//   const { id } = useParams();
//   const [campaign, setCampaign] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from("campaigns")
//         .select("*")
//         .eq("id", id)
//         .single();

//       if (error) {
//         console.error("Error fetching campaign:", error.message);
//       } else {
//         setCampaign(data);
//       }
//       setLoading(false);
//     };

//     fetchCampaign();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!campaign) return <p>Campaign not found</p>;

//   return (
//     <div>
//       <h1>{campaign.title}</h1>
//       <p>{campaign.description}</p>
//       <img src={campaign.image} alt={campaign.title} />
//     </div>
//   );
// };

// export default CampaignDetail;
