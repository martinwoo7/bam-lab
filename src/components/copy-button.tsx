"use client";
// import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Copy, Check } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text?: string;
  className?: string;
};

const CopyButton: React.FC<Props> = ({
  text = "example@email.com",
  className,
  ...props
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    navigator.clipboard.writeText(text);
  };

  return (
    <p
      className={cn(
        "flex items-center gap-x-2 cursor-pointer text-muted-foreground hover:text-foreground duration-200",
        className
      )}
      onClick={() => handleCopy()}
      {...props}
    >
      {text}
      <span>
        {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      </span>
    </p>
  );
};

export default CopyButton;
