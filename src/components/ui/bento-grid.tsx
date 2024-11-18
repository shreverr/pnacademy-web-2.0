import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BarChartIcon,
  BrainIcon,
  CalendarIcon,
  Link2Icon,
  SearchIcon,
  ShareIcon,
  ShieldIcon,
  WaypointsIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Switch } from "./switch";
export const CARDS = [
  {
    Icon: BrainIcon, // You'll need to import appropriate icons
    name: "AI Assessment Generation",
    description:
      "Create professional assessments instantly with AI assistance.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
        <CardHeader>
          <CardTitle>Generate Assessment</CardTitle>
          <CardDescription>
            Specify your requirements and let AI create your assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-4">
          <div className="space-y-4">
            <div>
              <Label>Subject</Label>
              <Input
                disabled={true}
                type="text"
                placeholder="e.g., Mathematics, Science..."
                className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
              />
            </div>
            <div>
              <Label>Difficulty Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: ShareIcon,
    name: "Assessment Distribution",
    description: "Distribute assessments to students and groups with ease.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
        <CardHeader>
          <CardTitle>Distribute Test</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
              <span>Mathematics Class A</span>
              <Button size="sm">Send</Button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
              <span>Science Group B</span>
              <Button size="sm">Send</Button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-md">
              <span>History Class C</span>
              <Button size="sm">Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: ShieldIcon,
    name: "User Access Controls",
    description: "Manage roles and permissions for different user groups.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute right-10 top-10 w-[80%] origin-top transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
        <CardHeader>
          <CardTitle>Access Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 border rounded-md">
              <div>
                <h4 className="font-medium">Teachers</h4>
                <p className="text-sm text-muted-foreground">
                  Create and manage assessments
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-2 border rounded-md">
              <div>
                <h4 className="font-medium">Students</h4>
                <p className="text-sm text-muted-foreground">
                  Take assessments and view results
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-2 border rounded-md">
              <div>
                <h4 className="font-medium">Administrators</h4>
                <p className="text-sm text-muted-foreground">
                  Full system access
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: BarChartIcon,
    name: "Elaborative Reports",
    description: "Generate detailed analytics and performance insights.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <Card className="absolute right-10 top-10 w-[90%] origin-top transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            {/* Add your chart component here */}
            <div className="flex justify-between items-end h-full px-2">
              <div className="w-8 bg-primary h-[60%]" />
              <div className="w-8 bg-primary h-[80%]" />
              <div className="w-8 bg-primary h-[40%]" />
              <div className="w-8 bg-primary h-[90%]" />
              <div className="w-8 bg-primary h-[70%]" />
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
];

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link
        href={href}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "cursor-pointer",
        })}
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
