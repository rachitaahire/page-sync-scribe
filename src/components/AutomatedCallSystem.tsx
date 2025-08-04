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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-blue-600">UX PILOT</h1>
            </div>
            <nav className="flex items-center gap-6">
              <span className="text-sm font-medium text-blue-600 cursor-pointer border-b-2 border-blue-600 pb-1">ai call</span>
              <span className="text-sm text-gray-500 cursor-pointer flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Prompt history
              </span>
              <span className="text-sm text-gray-500 cursor-pointer">All Design</span>
              <span className="text-sm text-blue-600 cursor-pointer">Single Design</span>
              <span className="text-sm text-gray-500">Actual Size (100%)</span>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Landing Page - First Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Automated Call<br />
              System for Every<br />
              Business
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your customer engagement with intelligent<br />
              automated calling solutions. From real estate to retail,<br />
              streamline your operations and boost conversions.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50"
              >
                View Demo
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="bg-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Automated Call System Dashboard</h3>
              <p className="text-gray-500">Preview of your dashboard analytics</p>
            </div>
          </div>
        </div>

        {/* Form Section - Second & Third Images */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-sm border rounded-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-gray-900 text-center">Request an Automated Call</CardTitle>
                <p className="text-gray-600 text-center">
                  Experience our system firsthand. Enter your details and we'll call you back within minutes.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone Details Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Country Code *</Label>
                    <Select value={formData.countryCode} onValueChange={(value) => updateFormData("countryCode", value)}>
                      <SelectTrigger className="border-gray-300 bg-white">
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

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                    <div className="relative">
                      <Input
                        id="phone"
                        placeholder="123-456-7890"
                        value={formData.phoneNumber}
                        onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                        className="border-gray-300 bg-white pr-10"
                      />
                      <div className="absolute right-3 top-3">
                        <MessageCircle className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">We'll send an OTP to verify your number</p>
                  </div>
                </div>

                {/* Personal Details Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      className="border-gray-300 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Voice Tone</Label>
                    <Select value={formData.voiceTone} onValueChange={(value) => updateFormData("voiceTone", value)}>
                      <SelectTrigger className="border-gray-300 bg-white">
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

                {/* Call Scheduling Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Call Date</Label>
                    <div className="relative">
                      <Input
                        id="date"
                        placeholder="dd-mm-yyyy"
                        value={formData.preferredDate}
                        onChange={(e) => updateFormData("preferredDate", e.target.value)}
                        className="border-gray-300 bg-white pr-10"
                      />
                      <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-medium text-gray-700">Preferred Call Time</Label>
                    <div className="relative">
                      <Input
                        id="time"
                        placeholder="--:--"
                        value={formData.preferredTime}
                        onChange={(e) => updateFormData("preferredTime", e.target.value)}
                        className="border-gray-300 bg-white pr-10"
                      />
                      <Clock className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                    <SelectTrigger className="border-gray-300 bg-white">
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
                  className="w-full h-12 text-base font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
                >
                  Request Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm border rounded-xl h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">Chat History</CardTitle>
                  <ChevronUp className="h-4 w-4 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Chat Messages */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {chatHistory.map((chat) => (
                    <div key={chat.id} className="flex gap-3">
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          {chat.isBot ? '🤖' : '👤'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className={`p-3 rounded-lg text-sm ${
                          chat.isBot 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-blue-600 text-white ml-8'
                        }`}>
                          {chat.message}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{chat.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2 mt-6 pt-4 border-t">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 border-gray-300 bg-white"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    size="sm"
                    className="px-3 bg-blue-600 hover:bg-blue-700"
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