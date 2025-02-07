import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Cancellation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Cancellation and Refund Policy</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Refund Eligibility</h2>
            <div className="space-y-2">
              {[
                "Donations above ₹55 are eligible for refunds",
                "Refund requests must be made within 30 days of donation",
                "Donations below ₹55 are non-refundable",
                "Processing fees are non-refundable"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">How to Request a Refund</h2>
            <div className="space-y-2">
              {[
                "Email your refund request to rakeshchow202@gmail.com",
                "Include your transaction ID and reason for refund",
                "Provide the payment method used for the donation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Refund Processing</h2>
            <div className="space-y-2">
              {[
                "Refunds are processed within 7-10 business days",
                "Refunds will be issued to the original payment method",
                "You will receive an email confirmation once the refund is processed"
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