import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">rakeshchow202@gmail.com</p>
              <p className="text-sm text-muted-foreground mt-2">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">About Donations</h3>
            <p className="text-muted-foreground">
              This is a coffee fund me website that allows well-wishers to support my work through donations. 
              All payments are processed securely through Razorpay. Donations above $55 are eligible for refunds 
              within 30 days, while smaller amounts are non-refundable.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}