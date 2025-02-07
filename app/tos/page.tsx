import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <Card className="backdrop-blur-lg bg-card/50 p-8 shadow-xl border border-border/50">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Use License</h2>
            <div className="flex items-start space-x-2">
              <ChevronRight className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Buy Me a Coffee for personal, non-commercial transitory viewing only.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Disclaimer</h2>
            <div className="flex items-start space-x-2">
              <ChevronRight className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                The materials on Buy Me a Coffee are provided on an 'as is' basis. Buy Me a Coffee makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Refund Policy</h2>
            <div className="flex items-start space-x-2">
              <ChevronRight className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                All donations are final and non-refundable. However, if you believe there has been an error in your transaction, please contact our support team within 48 hours of the transaction.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Cancellation Policy</h2>
            <div className="flex items-start space-x-2">
              <ChevronRight className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                For recurring donations, you may cancel your subscription at any time through your account settings or by contacting our support team. The cancellation will be effective immediately, and no further charges will be made.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Limitations</h2>
            <div className="flex items-start space-x-2">
              <ChevronRight className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Buy Me a Coffee or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Buy Me a Coffee.
              </p>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
}