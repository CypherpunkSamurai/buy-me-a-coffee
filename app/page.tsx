import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coffee, Pizza } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support My Work</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Hi, I&apos;m Rakesh Chowdhury. If you find my work valuable, consider supporting me.
          Your contribution helps me continue creating and sharing content.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Coffee Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Coffee"
              fill
              className="object-cover transition-all hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Coffee Break</h3>
              <p className="text-xs sm:text-sm opacity-90">Help fuel my creativity with coffee!</p>
            </div>
          </div>

          <Card className="p-4 sm:p-6 backdrop-blur-lg bg-card/50">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Coffee className="h-5 w-5 sm:h-6 sm:w-6" />
              Coffee Options
            </h2>
            <div className="grid gap-3">
              <Button 
                size="lg" 
                className="w-full text-sm sm:text-base py-6 bg-amber-400/90 hover:bg-amber-500/90 text-white font-medium flex items-center justify-center shadow-sm transition-colors"
              >
                <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Buy me a coffee (₹60)
              </Button>
              <Button 
                size="lg" 
                className="w-full text-sm sm:text-base py-6 bg-amber-500/90 hover:bg-amber-600/90 text-white font-medium flex items-center justify-center shadow-sm transition-colors"
              >
                <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Buy me 3 coffees (₹150)
              </Button>
              <Button 
                size="lg" 
                className="w-full text-sm sm:text-base py-6 bg-amber-600/90 hover:bg-amber-700/90 text-white font-medium flex items-center justify-center shadow-sm transition-colors"
              >
                <Coffee className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Buy me 5 coffees (₹250)
              </Button>
            </div>
          </Card>
        </div>

        {/* Pizza Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Pizza"
              fill
              className="object-cover transition-all hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pizza Time</h3>
              <p className="text-xs sm:text-sm opacity-90">Share a slice of happiness!</p>
            </div>
          </div>

          <Card className="p-4 sm:p-6 backdrop-blur-lg bg-card/50">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
              <Pizza className="h-5 w-5 sm:h-6 sm:w-6" />
              Pizza Options
            </h2>
            <div className="grid gap-3">
              <Button 
                size="lg" 
                className="w-full text-sm sm:text-base py-6 bg-rose-400/90 hover:bg-rose-500/90 text-white font-medium flex items-center justify-center shadow-sm transition-colors"
              >
                <Pizza className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Buy me a pizza (₹250)
              </Button>
              <Button 
                size="lg" 
                className="w-full text-sm sm:text-base py-6 bg-rose-500/90 hover:bg-rose-600/90 text-white font-medium flex items-center justify-center shadow-sm transition-colors"
              >
                <Pizza className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Pizza party! (₹499)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}