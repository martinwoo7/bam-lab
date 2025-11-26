import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { ArrowRight, File, SquareArrowOutUpRight } from "lucide-react";

import { openPositions } from "@/lib/positions";

const ClientPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-10">
      {/* Hero */}
      <div className="space-y-4 lg:flex lg:flex-row lg:gap-x-8 lg:items-center">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Badge variant={"outline"}>University Department</Badge>
          <h1 className="text-primary font-bold text-5xl">Your Lab</h1>
          <h2 className="text-muted-foreground font-serif text-3xl text-center md:text-start ">
            Secondary text & more text
          </h2>
          <h3 className="text-center md:text-start font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vehicula nulla purus, a feugiat neque venenatis in. Donec et quam.
          </h3>
          <div className="flex gap-2">
            <Button size={"sm"}>
              Explore Research
              <ArrowRight />
            </Button>
            <Button variant={"outline"} size={"sm"}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative w-full lg:max-w-xl h-auto aspect-video">
          {/* <Image src="#" fill alt="Lab image" /> */}
          <div className="absolute inset-0 bg-secondary flex items-center justify-center rounded-md">
            <p>Image</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-y-border gap-4 py-4">
        <div className="text-center">
          <p className="font-bold text-primary text-3xl">200+</p>
          <p className="font-serif text-xs">Publications</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-primary text-3xl">20+</p>
          <p className="font-serif text-xs">Team Members</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-primary text-3xl">10+</p>
          <p className="font-serif text-xs">Active Projects</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-primary text-3xl">#1</p>
          <p className="font-serif text-xs">Largest at University</p>
        </div>
      </div>

      <div className="flex flex-col items-center py-4">
        <h2 className="text-primary font-bold text-3xl text-center">
          Research Focus Areas
        </h2>
        <p className="text-center font-serif text-xs max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="size-8 bg-primary/50 rounded-md" />
              <CardTitle>
                <p className="font-medium">Research Focus</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices massa vitae lectus imperdiet mattis eu id
                lectus. Sed egestas.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant={"link"}>
                Learn More <ArrowRight />
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="size-8 bg-primary/50 rounded-md" />
              <CardTitle>
                <p className="font-medium">Research Focus 2</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices massa vitae lectus imperdiet mattis eu id
                lectus. Sed egestas.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant={"link"}>
                Learn More <ArrowRight />
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="size-8 bg-primary/50 rounded-md" />
              <CardTitle>
                <p className="font-medium">Research Focus 3</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-serif text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ultrices massa vitae lectus imperdiet mattis eu id
                lectus. Sed egestas.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant={"link"}>
                Learn More <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex flex-col items-center py-4">
        {openPositions.length >= 1 && (
          <Badge
            asChild
            variant="secondary"
            className="rounded-sm lg:hidden mx-auto mb-2"
          >
            <Link href="/contact#hiring">
              <span
                className="flex size-2 rounded-full bg-primary"
                title="New"
              />
              We have open positions <ArrowRight />
            </Link>
          </Badge>
        )}
        <h2 className="text-primary font-bold text-3xl text-center">
          About This Lab
        </h2>
        <p className="text-center font-serif text-xs max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vehicula nulla purus, a feugiat neque venenatis in.
        </p>
        <div className="flex flex-col lg:flex-row w-full items-center space-x-8 space-y-4 mt-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="size-8 bg-primary/50 rounded-md shrink-0" />
              <div>
                <p className="font-medium">Collaborative Environment</p>
                <p className="font-serif text-xs text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vehicula nulla purus, a feugiat neque venenatis in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-8 bg-primary/50 rounded-md shrink-0" />
              <div>
                <p className="font-medium">Well-Funded Research</p>
                <p className="font-serif text-xs text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vehicula nulla purus, a feugiat neque venenatis in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-8 bg-primary/50 rounded-md shrink-0" />
              <div>
                <p className="font-medium">Diverse Research Topics</p>
                <p className="font-serif text-xs text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vehicula nulla purus, a feugiat neque venenatis in.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:max-w-xl h-auto aspect-video">
            {/* <Image src="#" fill alt="Lab image" /> */}
            <div className="absolute inset-0 bg-secondary flex items-center justify-center rounded-md">
              <p>Image</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-4">
        <h2 className="text-primary font-bold text-3xl text-center">
          Latest News
        </h2>
        <p className="text-center font-serif text-xs max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          <Card>
            <CardContent>
              <Badge variant={"secondary"} className="mb-2">
                March 15, 2025
              </Badge>
              <p className="font-medium">Lab Received NSERC Grant</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Badge variant={"secondary"} className="mb-2">
                March 8, 2025
              </Badge>
              <p className="font-medium">
                John Doe wins Best Paper Award at ICML 2025
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Badge variant={"secondary"} className="mb-2">
                Feb 28, 2025
              </Badge>
              <p className="font-medium">
                Jane Doe wins an amazing award at ABCD 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="py-4 gap-2">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-end justify-between">
          <div className="">
            <h2 className="text-primary font-bold text-3xl text-center md:text-left ">
              Recent Publications
            </h2>
            <p className="text-center md:text-left font-serif text-xs max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              in ante eget ante consectetur sollicitudin. Sed eget eros viverra,
              placerat.
            </p>
          </div>

          <Button variant={"outline"} className="text-xs" size={"sm"}>
            All Publications
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 w-full">
          <Card className="w-full">
            <CardHeader>
              <div className="flex gap-2">
                <Badge variant={"secondary"}>2025</Badge>
                <Badge variant={"outline"}>Conference</Badge>
              </div>

              <CardTitle className="font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <p className="text-muted-foreground text-sm mb-2">
                Doe, J., Deer, F., & Chen, L.
              </p>
              <p className="text-muted-foreground text-xs">
                Published in: IEEE International Conference on Big Data
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size={"sm"} className="text-xs" variant={"outline"}>
                <File />
                PDF
              </Button>
              <Button size={"sm"} className="text-xs" variant={"outline"}>
                <SquareArrowOutUpRight /> Link
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <div className="flex gap-2">
                <Badge variant={"secondary"}>2024</Badge>
                <Badge variant={"outline"}>Conference</Badge>
              </div>

              <CardTitle className="font-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <p className="text-muted-foreground text-sm mb-2">
                Doe, J., Deer, F., & Chen, L.
              </p>
              <p className="text-muted-foreground text-xs">
                Published in: IEEE International Conference on Big Data
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size={"sm"} className="text-xs" variant={"outline"}>
                <File />
                PDF
              </Button>
              <Button size={"sm"} className="text-xs" variant={"outline"}>
                <SquareArrowOutUpRight /> Link
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
