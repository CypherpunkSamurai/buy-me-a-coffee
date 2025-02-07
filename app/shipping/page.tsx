import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function Shipping() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Shipping and Delivery</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Digital Delivery</h2>
            <p className="text-muted-foreground mb-4">
              As this is a digital donation platform, there are no physical items to be shipped. Your donation will be processed immediately through our secure payment gateway, Razorpay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Transaction Confirmation</h2>
            <div className="space-y-2">
              {[
                "You will receive an email confirmation immediately after your donation",
                "The transaction will appear on your bank statement as a Razorpay payment",
                "A receipt will be generated for your records"
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