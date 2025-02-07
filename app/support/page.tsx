import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Support & Contact</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Registered Address</h3>
              <p className="text-muted-foreground">
                123 Tech Park, Sector 5<br />
                Salt Lake City<br />
                Kolkata - 700091<br />
                West Bengal, India
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@buymecoffee.rakeshs.life</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}