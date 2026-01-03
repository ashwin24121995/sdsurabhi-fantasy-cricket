import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { 
  Trophy, 
  Users, 
  Shield, 
  Star, 
  ChevronRight, 
  Check,
  AlertTriangle,
  Clock,
  Target,
  Award,
  Zap,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.webp" 
                alt="SDSURABHI Fantasy Cricket" 
                className="h-10 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/contests" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">
                Contests
              </Link>
              <Link href="/leaderboard" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">
                Leaderboard
              </Link>
              <Link href="/how-to-play" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">
                How to Play
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-orange-400 transition-colors text-sm font-medium">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  My Teams
                </Button>
              ) : (
                <>
                  <a href={getLoginUrl()}>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      Login
                    </Button>
                  </a>
                  <a href={getLoginUrl()}>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Sign Up Free
                    </Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Check className="w-4 h-4" />
                100% FREE TO PLAY
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Play Fantasy Cricket
                <span className="text-orange-400 block">Win Bragging Rights!</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Create your dream team, compete with friends, and prove your cricket knowledge. 
                No money involved - just pure skill-based entertainment!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={getLoginUrl()}>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    Start Playing Free
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 w-full sm:w-auto">
                    Learn How to Play
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Secure Platform</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Skill-Based</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>18+ Only</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
                <img 
                  src="/cricket-player-hero.webp" 
                  alt="Cricket Player" 
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Honest, Non-Specific Messaging */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-slate-700/30 border border-slate-600/30">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Growing</div>
              <div className="text-slate-400 text-sm">Community</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/30 border border-slate-600/30">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Multiple</div>
              <div className="text-slate-400 text-sm">Contests Daily</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/30 border border-slate-600/30">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-slate-400 text-sm">Free to Play</div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/30 border border-slate-600/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">₹0</div>
              <div className="text-slate-400 text-sm">Real Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Play With Us?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience fantasy cricket the way it should be - fun, fair, and completely free!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <img src="/trophy.webp" alt="Trophy" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Skill-Based Contests</h3>
                <p className="text-slate-400">
                  Win based on your cricket knowledge and team selection skills. No luck, no gambling - just pure strategy!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">100% Free Forever</h3>
                <p className="text-slate-400">
                  No entry fees, no hidden charges, no real money prizes. Play unlimited contests without spending a rupee!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Updates</h3>
                <p className="text-slate-400">
                  Live scores, instant point calculations, and real-time leaderboard updates throughout the match!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
                <p className="text-slate-400">
                  Your data is protected with industry-standard security. Play with peace of mind!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Easy to Play</h3>
                <p className="text-slate-400">
                  Simple interface, intuitive team creation, and helpful guides for beginners. Start playing in minutes!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Climb the Ranks</h3>
                <p className="text-slate-400">
                  Compete on leaderboards, earn badges, and showcase your fantasy cricket expertise to friends!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-16 lg:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Play
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get started in just 3 simple steps!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-white shadow-lg shadow-orange-500/30">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create Account</h3>
              <p className="text-slate-400">
                Sign up for free in seconds. No payment details required!
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-white shadow-lg shadow-blue-500/30">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Build Your Team</h3>
              <p className="text-slate-400">
                Select 11 players within the budget. Choose your captain wisely!
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/30">
                  <img src="/podium-trophy.webp" alt="Win" className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Compete & Win</h3>
              <p className="text-slate-400">
                Join contests, track live scores, and climb the leaderboard!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={getLoginUrl()}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8">
                Start Playing Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-12 bg-amber-500/10 border-y border-amber-500/30">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Important Notice</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This is a <strong>100% FREE skill-based fantasy cricket platform</strong>. There are no real money prizes, 
                no entry fees, and no gambling involved. This platform is for entertainment purposes only. 
                Users must be 18 years or older to participate. Not available in Andhra Pradesh, Assam, Nagaland, 
                Odisha, Sikkim, and Telangana due to state regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl p-8 lg:p-12 text-center border border-slate-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Test Your Cricket Knowledge?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join our growing community of cricket enthusiasts. Create your dream team and compete for glory - all for free!
            </p>
            <a href={getLoginUrl()}>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6">
                Join Now - It's Free!
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.webp" alt="SDSURABHI" className="h-10 mb-4" />
              <p className="text-slate-400 text-sm">
                India's skill-based fantasy cricket platform. 100% free to play, no real money involved.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/contests" className="text-slate-400 hover:text-orange-400 text-sm">Contests</Link></li>
                <li><Link href="/leaderboard" className="text-slate-400 hover:text-orange-400 text-sm">Leaderboard</Link></li>
                <li><Link href="/how-to-play" className="text-slate-400 hover:text-orange-400 text-sm">How to Play</Link></li>
                <li><Link href="/faq" className="text-slate-400 hover:text-orange-400 text-sm">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-slate-400 hover:text-orange-400 text-sm">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-slate-400 hover:text-orange-400 text-sm">Privacy Policy</Link></li>
                <li><Link href="/responsible-gaming" className="text-slate-400 hover:text-orange-400 text-sm">Responsible Gaming</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-orange-400 text-sm">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>SDSURABHI PRIVATE LIMITED</li>
                <li>CIN: U41002UP2023PTC194590</li>
                <li>GST: 09ABMCS3759A1Z4</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2024 SDSURABHI Private Limited. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>18+ Only</span>
                </div>
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <Check className="w-4 h-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Award className="w-4 h-4" />
                  <span>Skill-Based</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-600 text-xs mt-4 text-center">
              This platform is for entertainment purposes only. No real money is involved. 
              Not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
