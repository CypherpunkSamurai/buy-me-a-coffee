import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Terms() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p className="text-muted-foreground">Email: rakeshchow202@gmail.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Effective Date</h2>
            <p className="text-muted-foreground">These terms and conditions are effective as of April 1, 2024.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation of Liability</h2>
            <div className="space-y-2">
              {[
                "All donations are voluntary and non-refundable for amounts less than ₹55",
                "We are not liable for any direct, indirect, incidental, or consequential damages",
                "All payments are processed through Razorpay and subject to their terms and conditions"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Rules of Conduct</h2>
            <div className="space-y-2">
              {[
                "Users must provide accurate information when making donations",
                "Fraudulent transactions will be reported to authorities",
                "Users agree not to abuse or exploit the donation system"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">User Restrictions</h2>
            <div className="space-y-2">
              {[
                "Users must be 18 years or older to make donations",
                "Donations must be made using valid payment methods",
                "Multiple fraudulent attempts will result in blocking"
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