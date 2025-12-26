import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex-center gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "hover:border-ring hover:text-ring data-[state=checked]:border-ring data-[state=checked]:text-ring flex rounded-lg border border-neutral-500 py-2 px-3 outline-none focus-visible:ring-2 focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-offset-[3px] focus-visible:ring-offset-bg cursor-pointer transition-[color,box-shadow]",
        className
      )}
      {...props}
    />
  );
}

export { RadioGroup, RadioGroupItem };
