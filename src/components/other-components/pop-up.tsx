import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { LinkIcon, XCircle } from "lucide-react";
import Link from "next/link";
const PopUp = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

  return (
    <Dialog open={isDialogOpen}>
      <DialogContent className="flex flex-col items-center justify-center h-[38rem] w-[28rem] border-white/20 [&>button]:hidden">
        <Image
          src={"/events/event-01.jpg"}
          width={400}
          height={400}
          alt={"event"}
        />
        <DialogFooter className="flex flex-row justify-between w-full items-center">
          <Button variant={"outline"} onClick={() => setIsDialogOpen(false)}>
            Close
            <XCircle className="h-4 w-4 ml-2" />
          </Button>
          <Link
            className="px-4 text-md rounded-md bg-purple-600 flex flex-row items-center justify-center h-10 hover:bg-purple-500"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScikrOuS8F3T88wwgFhJZL9uljLxq61XAohtG-WI0DjM4b1eA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
            }
            target="_blank"
          >
            Register Now
            <LinkIcon className="h-4 w-4 ml-2" />
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
