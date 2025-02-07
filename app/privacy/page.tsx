import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Privacy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
            <div className="space-y-2">
              {[
                "Name and email address for donation receipts",
                "Payment information (processed securely by Razorpay)",
                "Transaction history",
                "Communication preferences"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Collect Information</h2>
            <div className="space-y-2">
              {[
                "Information you provide during donation",
                "Automatically collected technical information",
                "Communications you send us"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Use Information</h2>
            <div className="space-y-2">
              {[
                "Process your donations",
                "Send donation receipts and updates",
                "Respond to your inquiries",
                "Improve our services"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information Security</h2>
            <div className="space-y-2">
              {[
                "All payments are processed securely through Razorpay",
                "We use encryption to protect sensitive data",
                "Regular security audits are performed",
                "Limited access to personal information"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
}