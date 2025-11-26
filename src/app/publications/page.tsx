import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Award, ExternalLink, FileText, Search } from "lucide-react";

import { publications, notableVenues } from "@/lib/publications";

interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  type: string;
  award?: string;
}
const PublicationCard = ({ pub }: { pub: Publication }) => {
  return (
    <Card>
      <CardHeader>
        <Badge variant={"secondary"}>{pub.year}</Badge>

        <div className="flex gap-2 mb-2">
          {pub.award && (
            <Badge className="bg-amber-500 hover:bg-amber-600 duration-200 transition-colors hover:cursor-default">
              <Award className="size-3 mr-1" />
              {pub.award}
            </Badge>
          )}
          <Badge variant={"outline"}>{pub.type}</Badge>
        </div>

        <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
        <CardDescription>{pub.authors}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <span>Published in:</span> {pub.venue}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button size="sm" variant={"outline"}>
              <FileText className="size-4 mr-2" />
              PDF
            </Button>
            <Button size="sm" variant={"outline"}>
              <ExternalLink className="size-4 mr-2" />
              Link
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Page = () => {
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our research contributions to top-tier conferences and journals in
          artificial intelligence and machine learning
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardDescription>Total Publications</CardDescription>
            <CardTitle className="text-3xl">{publications.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Conference Papers</CardDescription>
            <CardTitle className="text-3xl">
              {publications.filter((p) => p.type === "Conference").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Journal Articles</CardDescription>
            <CardTitle className="text-3xl">
              {publications.filter((p) => p.type === "Journal").length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Seach */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search publications..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="all">All Publications</TabsTrigger>
          <TabsTrigger value="conference">Conference Papers</TabsTrigger>
          <TabsTrigger value="journal">Journal Articles</TabsTrigger>
          <TabsTrigger value="awards">Award-Winning</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          {years.map((year) => (
            <section key={year}>
              <h2 className="text-2xl font-bold mb-6">{year}</h2>
              <div className="grid gap-6">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub, idx) => (
                    <PublicationCard key={idx} pub={pub} />
                  ))}
              </div>
            </section>
          ))}
        </TabsContent>
        <TabsContent value="conference" className="space-y-12">
          {years.map((year) => {
            const yearPubs = publications.filter(
              (p) => p.year === year && p.type === "Conference"
            );
            if (yearPubs.length === 0) return null;
            return (
              <section key={year}>
                <h2 className="text-2xl font-bold mb-6">{year}</h2>
                <div className="grid gap-6">
                  {yearPubs.map((pub, idx) => (
                    <PublicationCard key={idx} pub={pub} />
                  ))}
                </div>
              </section>
            );
          })}
        </TabsContent>

        <TabsContent value="journal" className="space-y-12">
          {years.map((year) => {
            const yearPubs = publications.filter(
              (p) => p.year === year && p.type === "Journal"
            );
            if (yearPubs.length === 0) return null;
            return (
              <section key={year}>
                <h2 className="text-2xl font-bold mb-6">{year}</h2>
                <div className="grid gap-6">
                  {yearPubs.map((pub, idx) => (
                    <PublicationCard key={idx} pub={pub} />
                  ))}
                </div>
              </section>
            );
          })}
        </TabsContent>

        <TabsContent value="awards">
          <div className="grid gap-6">
            {publications
              .filter((p) => p.award)
              .map((pub, idx) => (
                <PublicationCard key={idx} pub={pub} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Notable Venues */}
      <section className="mt-16 pt-12 border-t">
        <h2 className="text-3xl font-bold mb-8">Notable Publication Venues</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notableVenues.map((venue) => (
            <Card key={venue}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{venue}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
