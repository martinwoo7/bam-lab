import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  GraduationCap,
  Award,
  BookOpen,
  Phone,
  Printer,
  BriefcaseBusiness,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  farhanaAwards,
  farhanaConferences,
  farhanaMembership,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Dr. Farhana F. Zulkernine",
  description: "Lorem Ipsum",
};

const DirectorPage = () => {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lab Director</h1>
          <p className="text-xl text-muted-foreground">
            Leading innovation in computational research
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-muted mb-6">
                <Image
                  src="/placeholder.png"
                  alt="Dr. Farhana Zulkernine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Dr. Farhana F. Zulkernine
                  </h2>
                  <p className="text-muted-foreground">
                    Professor & Lab Director
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="size-4 text-muted-foreground" />
                    <Link
                      href="mailto:farhana.zulkernine@queensu.ca"
                      className="hover:underline"
                    >
                      farhana.zulkernine@queensu.ca
                    </Link>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex gap-2">
                      <Phone className="size-4 text-muted-foreground" />
                      <span>(613) 533-6426</span>
                    </div>
                    <div className="flex gap-2">
                      <Printer className="size-4 text-muted-foreground" />
                      <span>(613) 533-6513</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="size-4 text-muted-foreground" />
                    <span>PhD, Computer Science; PEng</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Mail className="mr-2 size-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            {/* Biography */}
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Farhana Zulkernine is a Professor and the Coordinator of
                  the Cognitive Science program at the School of Computing at
                  Queen&apos;s University. She holds a Ph.D. degree from the
                  School of Computing at Queen&apos;s University and is a member
                  of Professional Engineers of Ontario. Her research interests
                  include service and cloud computing, big data analytics and
                  management, and cognitive computing.
                </p>
                <p>
                  She has more than 15 years of international work experience in
                  three continents in software design, analysis and research. As
                  a researcher she has worked with CA Technologies, IBM Canada,
                  SAP Germany and Fondazione Bruno Kessler in Italy. She has
                  ongoing research collaborations with IBM Canada, Roche,
                  Pfizer, Markitech, Gnowit, Calian, the Centre for Advanced
                  Computing (CAC), Compute Canada, Canadian Primary Care
                  Sentinel Services Network (CPCSSN), and Queen&apos;s School of
                  Medicine, Law, and Business.
                </p>
                <p>
                  She has taught a wide number of courses in deep learning,
                  cognitive science, and database management systems. Her
                  research has been funded by IBM, CFI, MITACS, NSERC CRD,
                  Discovery and CREATE, OCE VIP, CUTRIC, CIMVHR, SOSCIP and
                  Queen&apos;s. She has published in many reputed journals and
                  international conferences and served on a variety of
                  conference program and grant committees as an expert in big
                  data and machine learning.
                </p>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card>
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    Big and Streaming Data Management & Analytics
                  </Badge>
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">
                    Deep Learning (IoT, text and video/image data)
                  </Badge>
                  <Badge variant="secondary">
                    Decision Support Systems (DSS)
                  </Badge>
                  <Badge variant="secondary">Cognitive Computing</Badge>
                  <Badge variant="secondary">Knowledge Mangement Systems</Badge>
                  <Badge variant="secondary">
                    Cloud and Services Computing
                  </Badge>
                </div>
              </CardContent>

              <CardHeader>
                <CardTitle>Fields of Application</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    Medical/health Information Systems
                  </Badge>
                  <Badge variant="secondary">Wearable Health Monitors</Badge>
                  <Badge variant="secondary">Autonomous Vehicles</Badge>
                  <Badge variant="secondary">Smart Cities</Badge>
                  <Badge variant="secondary">
                    Medical, Law and Financial Data Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">PhD in Computer Science</div>
                  <div className="text-sm text-muted-foreground">
                    Queen&apos;s University, 2009
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Thesis: &quot;Thesis name&quot;
                  </div>
                </div>
                <div>
                  <div className="font-semibold">MSc in Engineering</div>
                  <div className="text-sm text-muted-foreground">
                    Bangladesh University of Engineering and Technology, [date]
                  </div>
                </div>
                <div>
                  <div className="font-semibold">BSc in Computer Science</div>
                  <div className="text-sm text-muted-foreground">
                    Bangladesh University of Engineering and Technology, [date]
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-5 w-5" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Conference Leadership</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {farhanaConferences.map((item, i) => (
                      <li className="space-y-1" key={i}>
                        <div>
                          <span className="font-bold">{item.title}</span>
                          {item.workshop && (
                            <Link
                              href={item.workshop_url ? item.workshop_url : "#"}
                              className="underline"
                            >
                              , {item.workshop}
                            </Link>
                          )}
                        </div>
                        <div className="border-l border-l-border pl-3">
                          <Link
                            href={item.conference_url}
                            className="underline"
                          >
                            {item.conference}
                          </Link>
                        </div>
                        <div className="text-xs">
                          {item.date} • {item.location}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Professional Memberships
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {farhanaMembership.map((item, i) => (
                      <Badge key={i}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Honors & Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Select Honors & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {farhanaAwards.map((item, i) => (
                    <li className="flex gap-3" key={i}>
                      <span className="text-muted-foreground min-w-16">
                        {item.year}
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorPage;
