"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field";

import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import * as z from "zod";

import { Mail, MapPin, ArrowDown } from "lucide-react";

import { openPositions } from "@/lib/positions";
import { Badge } from "@/components/ui/badge";

import { director } from "@/lib/director";

const formSchema = z.object({
  name: z.string().min(1, { error: "This field has to be filled." }),
  email: z
    .email({ message: "Invalid email address." })
    .min(1, { error: "This field has to be filled." }),
  affiliation: z.string().optional(),
  attachments: z.array(z.instanceof(File)).optional(),
  message: z.string().min(1, { error: "This field has to be filled." }),
  subject: z.string().min(1, { error: "This field has to be filled." }),
});

const ClientPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      affiliation: "",
      attachments: [],
      message: "",
      subject: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("submitted");
    toast("You submitted the following values:", {
      description: (
        <pre className="text-muted-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2 bg-muted",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  };

  const handleRemoveFile = (fileName: string) => {
    const updatedFiles = form
      .getValues("attachments")
      ?.filter((file: File) => file.name !== fileName);
    form.setValue("attachments", updatedFiles || []);
  };

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        {openPositions.length >= 1 && (
          <Badge asChild variant="secondary" className="rounded-full lg:hidden">
            <Link href="#hiring">
              <span
                className="flex size-2 rounded-full bg-primary"
                title="New"
              />
              We have open positions <ArrowDown />
            </Link>
          </Badge>
        )}

        <div className="mb-12 mt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground font-serif">
            Get in touch with our research team
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription className="font-serif">
                  Fill out the form and we&apos;ll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      name="name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-name">
                            Name<span className="text-red-500">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-name"
                            aria-invalid={fieldState.invalid}
                            placeholder="John Doe"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-email">
                            Email<span className="text-red-500">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-email"
                            aria-invalid={fieldState.invalid}
                            placeholder="john.doe@example.com"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="affiliation"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-affiliation">
                            Affiliation
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-affiliation"
                            aria-invalid={fieldState.invalid}
                            placeholder="University or Organization"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                  <FieldSeparator className="my-4" />
                  <FieldGroup>
                    <Controller
                      name="subject"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-subject">
                            Subject<span className="text-red-500">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id="contact-form-subject"
                            aria-invalid={fieldState.invalid}
                            placeholder="What is this regarding"
                            autoComplete="off"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-message">
                            Message<span className="text-red-500">*</span>
                          </FieldLabel>
                          <Textarea
                            {...field}
                            rows={4}
                            id="contact-form-message"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your message here"
                            autoComplete="off"
                            className="resize-none"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="attachments"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="contact-form-attachments">
                            Attachments
                          </FieldLabel>
                          <Input
                            id="contact-form-attachments"
                            type="file"
                            multiple
                            onChange={(e) => {
                              const files = e.target.files;
                              if (files) {
                                const fileArray = Array.from(files);
                                form.setValue("attachments", fileArray);
                              }
                            }}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                          <ul className="space-2">
                            {form
                              .getValues("attachments")
                              ?.map((file: File) => {
                                const isImage = file.type.startsWith("image/");
                                const previewUrl = isImage
                                  ? URL.createObjectURL(file)
                                  : null;

                                return (
                                  <li
                                    key={file.name}
                                    className="flex items-center justify-between gap-3 rounded border p-2"
                                  >
                                    <div className="flex items-center gap-3">
                                      {isImage ? (
                                        <div className="relative h-10 w-10 overflow-hidden rounded-md border">
                                          <Image
                                            src={previewUrl!}
                                            alt={file.name}
                                            fill
                                            className="object-cover"
                                            onLoad={() =>
                                              URL.revokeObjectURL(previewUrl!)
                                            }
                                          />
                                        </div>
                                      ) : (
                                        <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted text-xs text-muted-foreground">
                                          {file.type
                                            .split("/")[1]
                                            ?.toUpperCase() || "FILE"}
                                        </div>
                                      )}
                                      <span className="truncate max-w-[140px]">
                                        {file.name}
                                      </span>
                                    </div>

                                    <Button
                                      size={"sm"}
                                      variant={"destructive"}
                                      onClick={() =>
                                        handleRemoveFile(file.name)
                                      }
                                    >
                                      Remove
                                    </Button>
                                  </li>
                                );
                              })}
                          </ul>
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  form="contact-form"
                  className=" hover:cursor-pointer"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div
            className="space-y-6 scroll-mt-[var(--header-height)]"
            id="hiring"
          >
            <Card>
              <CardHeader>
                <CardTitle>Open Positions </CardTitle>
                <CardDescription>(local students preferred)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {openPositions.map((position, i) => (
                  <div className="flex gap-2" key={i}>
                    <p className="font-medium">{position.type}</p>
                    <p className="text-muted-foreground">{position.research}</p>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="space-y-2">
                  <p>
                    To apply for an open position, send an email with the
                    following:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      A cover letter explaining your interest in the position
                    </li>
                    <li>Your CV</li>
                    <li>Your competitive qualifications and eligibility</li>
                    <li>
                      A sample of written work (undergrad thesis, report,
                      publication, etc.)
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm">
                  You will be contacted if selected for an interview.
                </p>
              </CardFooter>
            </Card>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" /> Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-medium">Research Lab</p>
                  <p className="text-muted-foreground">
                    Lab Department
                    <br />
                    123 Sesame Street
                    <br />
                    Lorem Ipsum University
                    <br />
                    City, Province
                    <br />
                    Country
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="size-5 text-primary" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Lab Director</p>
                    <a
                      href={`mailto:${director.email}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {director.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientPage;
