import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  // get the current time in UTC-5 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      // Convert to UTC-5 using `toLocaleString` and specifying the timezone
      const utcMinus5Time = date.toLocaleString("en-US", {
        timeZone: "America/New_York", // A city in the UTC-5 time zone (like America/New_York without DST)
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });

      setTime(utcMinus5Time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">🌐</p>
            <p className="text-sm font-semibold">Tampa, FL - {time}</p>
          </span>
        </span>
        
        <div className="flex space-x-2">
          <Link
            href="https://instagram.com/zslddd"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant={"ghost"}>
              <InstagramLogoIcon className="h-4 w-4 md:mr-2" />
            </Button>
          </Link>
          
          <Link
            href="https://github.com/zslddd"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant={"ghost"}>
              <GitHubLogoIcon className="h-4 w-4 md:mr-2" />
            </Button>
          </Link>
        </div>

        <Link
          href="mailto:me@zsld.space"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">me@zsld.space</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
