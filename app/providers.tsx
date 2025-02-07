'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Coffee, Heart, Menu } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  // { href: '/support', label: 'Support' },
  { href: 'https://rakeshs.life', label: 'Back to Website', external: true },
];

const footerLinks = [
  { href: '/terms', label: 'Terms and Conditions' },
  { href: '/cancellation', label: 'Cancellation and Refund' },
  { href: '/shipping', label: 'Shipping and Delivery' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Contact Us' },
];

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
        <nav className="backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Coffee className="h-6 w-6" />
                <span className="font-bold text-lg">Buy Me a Coffee</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="sm:hidden">
                  <button className="p-2 rounded-md hover:bg-accent">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-lg font-bold mb-4">Navigation Menu</SheetTitle>
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-lg font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-border/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Coffee className="h-6 w-6" />
                  <span className="font-bold text-lg">Buy Me a Coffee</span>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Supporting my work one coffee at a time.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <div className="text-sm text-muted-foreground">
                  <p>Email: rakeshchow202@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Security</h3>
                <p className="text-sm text-muted-foreground">
                  All payments are secure and processed through Razorpay. By donating, you agree to our{' '}
                  <Link href="/terms" className="underline hover:text-foreground">
                    Terms and Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/40">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Buy Me a Coffee. All rights reserved.
                </p>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>by Rakesh Chowdhury</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}