
import { useState } from "react";
import { PlusCircle } from "lucide-react";

const StartCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement campaign creation logic with Supabase
  };

  return (
    <div className="container-padding mx-auto py-12">
      <div className="max-w-2xl mx-auto">
        <div className="glass p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Start Your Campaign</h1>
            <p className="text-sm text-muted-foreground">
              Share your idea with the world and get the funding you need
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Campaign Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field"
                placeholder="Enter campaign title"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field min-h-[150px]"
                placeholder="Describe your campaign"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="target" className="text-sm font-medium">
                  Funding Target ($)
                </label>
                <input
                  id="target"
                  type="number"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="input-field"
                  placeholder="Enter amount"
                  min="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium">
                  Campaign Deadline
                </label>
                <input
                  id="deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                Campaign Image
              </label>
              <input
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="input-field"
                accept="image/*"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Create Campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartCampaign;
