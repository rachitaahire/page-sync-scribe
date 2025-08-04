import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Sparkles, History, ExternalLink, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SeoAutoGen = () => {
  const [formData, setFormData] = useState({
    topic: "",
    keywords: "",
    language: "english",
    writingStyle: "professional",
    articleLength: "medium",
    targetAudience: "general",
    variants: "3",
    wordpressUrl: "",
    wordpressUsername: "",
    wordpressPassword: ""
  });

  const { toast } = useToast();

  const articleHistory = [
    { title: "React Hooks Guide", date: "Jan 15, 2025" },
    { title: "SEO Best Practices", date: "Jan 14, 2025" },
    { title: "JavaScript Fundamentals", date: "Jan 13, 2025" }
  ];

  const handleGenerate = () => {
    if (!formData.topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please provide a topic for your article.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Article Generation Started",
      description: "Your SEO-optimized article is being generated...",
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">SEO AutoGen</h1>
            </div>
            <nav className="flex items-center gap-6">
              <span className="text-sm font-medium text-foreground">Dashboard</span>
              <span className="text-sm text-muted-foreground">History</span>
              <span className="text-sm text-muted-foreground">Settings</span>
              <div className="w-8 h-8 bg-muted rounded-full"></div>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--shadow-elegant)' }}>
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-foreground">Create SEO Optimized Article</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Topic Section */}
                <div className="space-y-3">
                  <Label htmlFor="topic" className="text-sm font-medium text-foreground">Topic</Label>
                  <Textarea
                    id="topic"
                    placeholder="Enter your article topic or provide a brief description..."
                    value={formData.topic}
                    onChange={(e) => updateFormData("topic", e.target.value)}
                    className="min-h-[100px] resize-none border-border"
                  />
                  <p className="text-xs text-muted-foreground">Provide a clear topic or description for your article</p>
                </div>

                {/* Keywords Section */}
                <div className="space-y-3">
                  <Label htmlFor="keywords" className="text-sm font-medium text-foreground">Keywords (Comma Separated)</Label>
                  <Input
                    id="keywords"
                    placeholder="e.g. Reactjs, Hook, Context"
                    value={formData.keywords}
                    onChange={(e) => updateFormData("keywords", e.target.value)}
                    className="border-border"
                  />
                  <p className="text-xs text-muted-foreground">Add relevant keywords to optimize your content</p>
                </div>

                {/* Form Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Language */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Language</Label>
                    <Select value={formData.language} onValueChange={(value) => updateFormData("language", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Writing Style */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Writing Style</Label>
                    <Select value={formData.writingStyle} onValueChange={(value) => updateFormData("writingStyle", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Article Length */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Article Length</Label>
                    <Select value={formData.articleLength} onValueChange={(value) => updateFormData("articleLength", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (300-500 words)</SelectItem>
                        <SelectItem value="medium">Medium (500-1000 words)</SelectItem>
                        <SelectItem value="long">Long (1000+ words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Target Audience */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground">Target Audience</Label>
                    <Select value={formData.targetAudience} onValueChange={(value) => updateFormData("targetAudience", value)}>
                      <SelectTrigger className="border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Public</SelectItem>
                        <SelectItem value="beginners">Beginners</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="experts">Experts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Variants */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">Variants</Label>
                  <Select value={formData.variants} onValueChange={(value) => updateFormData("variants", value)}>
                    <SelectTrigger className="border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Variant</SelectItem>
                      <SelectItem value="2">2 Variants</SelectItem>
                      <SelectItem value="3">Max 3 for demo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerate}
                  className="w-full h-12 text-base font-medium bg-[var(--gradient-primary)] hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Article
                </Button>

                <Separator className="my-8" />

                {/* WordPress Integration */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">WordPress Integration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To automatically post to your WordPress blog, install our plugin and provide your credentials below:
                  </p>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="wp-url" className="text-sm font-medium text-foreground">WordPress Admin URL</Label>
                      <Input
                        id="wp-url"
                        placeholder="https://yoursite.com/wp-admin"
                        value={formData.wordpressUrl}
                        onChange={(e) => updateFormData("wordpressUrl", e.target.value)}
                        className="border-border"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="wp-username" className="text-sm font-medium text-foreground">Username</Label>
                        <Input
                          id="wp-username"
                          placeholder="admin"
                          value={formData.wordpressUsername}
                          onChange={(e) => updateFormData("wordpressUsername", e.target.value)}
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="wp-password" className="text-sm font-medium text-foreground">Password</Label>
                        <Input
                          id="wp-password"
                          type="password"
                          placeholder="••••••••"
                          value={formData.wordpressPassword}
                          onChange={(e) => updateFormData("wordpressPassword", e.target.value)}
                          className="border-border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--shadow-elegant)' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg text-foreground">Article History</CardTitle>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {articleHistory.map((article, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                    <h4 className="font-medium text-foreground mb-1">{article.title}</h4>
                    <p className="text-xs text-muted-foreground">Generated on {article.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoAutoGen;