import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, MessageCircle, Calendar, Clock, ChevronUp, Send, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AutomatedCallSystem = () => {
  const [formData, setFormData] = useState({
    countryCode: "+1 (United States)",
    phoneNumber: "",
    fullName: "",
    voiceTone: "professional",
    preferredDate: "",
    preferredTime: "",
    industry: "real-estate"
  });

  const [chatMessage, setChatMessage] = useState("");
  const { toast } = useToast();

  const chatHistory = [
    { 
      id: 1, 
      message: "Hello! I'm here to help you with your automated call request. What industry are you in?", 
      time: "2:30 PM", 
      isBot: true 
    },
    { 
      id: 2, 
      message: "I'm in real estate and looking for property inquiry automation.", 
      time: "2:32 PM", 
      isBot: false 
    },
    { 
      id: 3, 
      message: "Perfect! Our real estate automation can handle property searches, viewing schedules, and financing inquiries. Would you like to schedule a demo call?", 
      time: "2:35 PM", 
      isBot: true 
    }
  ];

  const handleRequestCall = () => {
    if (!formData.phoneNumber.trim() || !formData.fullName.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your phone number and full name.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Call Request Submitted",
      description: "We'll call you back within minutes!",
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessage("");
      toast({
        title: "Message Sent",
        description: "Our team will respond shortly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">UX PILOT</h1>
            </div>
            <nav className="flex items-center gap-6">
              <span className="text-sm font-medium text-primary cursor-pointer">ai call</span>
              <span className="text-sm text-muted-foreground cursor-pointer">Prompt history</span>
              <span className="text-sm text-muted-foreground cursor-pointer">All Design</span>
              <span className="text-sm text-primary cursor-pointer">Single Design</span>
              <div className="w-8 h-8 bg-muted rounded-full"></div>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Automated Call System for Every Business
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your customer engagement with intelligent automated calling solutions. 
            From real estate to retail, streamline your operations and boost conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-[var(--gradient-primary)] hover:opacity-90 text-lg px-8 py-6"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="bg-muted/30 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Automated Call System Dashboard</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-xs text-muted-foreground">Calls Made</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">342</div>
                  <div className="text-xs text-muted-foreground">Leads Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$127k</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--shadow-elegant)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-foreground">Request an Automated Call</CardTitle>
                <p className="text-muted-foreground">
                  Experience our system firsthand. Enter your details and we'll call you back within minutes.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Country Code *</Label>
                    <Select value={formData.countryCode} onValueChange={(value) => updateFormData("countryCode", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+1 (United States)">+1 (United States)</SelectItem>
                        <SelectItem value="+44 (United Kingdom)">+44 (United Kingdom)</SelectItem>
                        <SelectItem value="+91 (India)">+91 (India)</SelectItem>
                        <SelectItem value="+61 (Australia)">+61 (Australia)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</Label>
                    <div className="relative">
                      <Input
                        id="phone"
                        placeholder="123-456-7890"
                        value={formData.phoneNumber}
                        onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                        className="border-border"
                      />
                      <div className="absolute right-3 top-3">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">We'll send an OTP to verify your number</p>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Voice Tone</Label>
                    <Select value={formData.voiceTone} onValueChange={(value) => updateFormData("voiceTone", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Call Scheduling */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-sm font-medium text-foreground">Preferred Call Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => updateFormData("preferredDate", e.target.value)}
                        className="border-border"
                      />
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="time" className="text-sm font-medium text-foreground">Preferred Call Time</Label>
                    <div className="relative">
                      <Input
                        id="time"
                        type="time"
                        value={formData.preferredTime}
                        onChange={(e) => updateFormData("preferredTime", e.target.value)}
                        className="border-border"
                      />
                      <Clock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                    <SelectTrigger className="border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Request Button */}
                <Button 
                  onClick={handleRequestCall}
                  className="w-full h-12 text-base font-medium bg-[var(--gradient-primary)] hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Request Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 h-full" style={{ boxShadow: 'var(--shadow-elegant)' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg text-foreground">Chat History</CardTitle>
                  </div>
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                {/* Chat Messages */}
                <div className="flex-1 space-y-4 max-h-96 overflow-y-auto">
                  {chatHistory.map((chat) => (
                    <div key={chat.id} className={`flex gap-3 ${chat.isBot ? '' : 'flex-row-reverse'}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className={chat.isBot ? 'bg-primary text-primary-foreground' : 'bg-muted'}>
                          {chat.isBot ? 'AI' : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`flex-1 ${chat.isBot ? '' : 'text-right'}`}>
                        <div className={`p-3 rounded-lg text-sm ${
                          chat.isBot 
                            ? 'bg-muted text-foreground' 
                            : 'bg-primary text-primary-foreground'
                        }`}>
                          {chat.message}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 border-border"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    size="sm"
                    className="px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedCallSystem;