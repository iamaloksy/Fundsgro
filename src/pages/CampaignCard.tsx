import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  return (
    <Link
      to={`/campaigns/${campaign.id}`}
      className="campaign-card group"
    >
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
      />
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {campaign.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {campaign.description}
      </p>
      <div className="space-y-2">
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
            ${campaign.raised.toLocaleString()} raised
          </span>
          <span className="text-muted-foreground">
            of ${campaign.target.toLocaleString()}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          {campaign.daysLeft} days left
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
