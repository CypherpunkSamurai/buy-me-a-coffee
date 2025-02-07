import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function CancellationRefund() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Cancellation & Refund Policy</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Cancellation Policy</h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-medium mb-2">For one-time donations:</p>
                <div className="space-y-2">
                  {[
                    "One-time donations cannot be cancelled once processed",
                    "If you made a mistake in your donation, please contact us immediately"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-lg font-medium mb-2">For recurring donations:</p>
                <div className="space-y-2">
                  {[
                    "You can cancel your recurring donation at any time",
                    "Cancellation will take effect immediately",
                    "No further charges will be made after cancellation",
                    "Previous donations will not be affected by cancellation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Refund Policy</h2>
            <div className="space-y-2">
              {[
                "All donations are generally non-refundable",
                "In case of technical errors or duplicate charges, refunds will be processed within 7-10 business days",
                "Refund requests must be made within 48 hours of the transaction",
                "For approved refunds, the amount will be credited back to the original payment method"
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
                "Contact our support team at support@buymecoffee.rakeshs.life",
                "Provide your transaction ID and reason for the refund",
                "Our team will review your request within 48 hours",
                "You will be notified of the decision via email"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
            <div className="space-y-2">
              {[
                "Email: support@buymecoffee.rakeshs.life",
                "Address: 123 Tech Park, Sector 5, Salt Lake City, Kolkata - 700091, West Bengal, India"
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