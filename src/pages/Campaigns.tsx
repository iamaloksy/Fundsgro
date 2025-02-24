import { useState } from "react";
import CampaignCard from "./CampaignCard";

const Campaigns = ({ hideTitle = false }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const campaigns = [
    {
      id: 1,
      title: "Eco-Friendly Water Bottles",
      description: "Help us reduce plastic waste with innovative water bottles.",
      target: 50000,
      raised: 32000,
      daysLeft: 15,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3dc51d14580227.5628639e9d687.jpg",
    },
    {
      id: 2,
      title: "Community Garden Project",
      description: "Creating green spaces in urban areas for sustainable living.",
      target: 25000,
      raised: 18000,
      daysLeft: 20,
      image: "https://images.unsplash.com/photo-1628243989859-db92e2de1340?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tbXVuaXR5JTIwZ2FyZGVufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Secure Dev",
      description: "Learn, Build And Thrive.",
      target: 45000,
      raised: 38000,
      daysLeft: 3,
      image: "https://www.ss8.com/wp-content/uploads/2025/02/Secure-Dev-Ops.jpg",
    },
  ];

  // Search filter logic
  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  <br />
  return (
    <div className="container-padding mx-auto">
      {/* Show title only if hideTitle is false */}
      {!hideTitle && (
        <h2 className="text-3xl font-bold text-center mb-6">Explore Campaigns</h2>
      )}

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-black w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p className="text-center text-muted-foreground">No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default Campaigns;
