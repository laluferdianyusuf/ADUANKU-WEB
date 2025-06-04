import React from "react";
import { CardComponent } from "@/components/card/card-component";
import { File, Paperclip, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
export default function DetailInformation() {
  return (
    <div>
      <div className="relative flex justify-center items-center bg-gray-200 w-full h-[21rem] rounded-2xl">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="p-2 flex flex-col bg-gray-100 w-1/2 rounded-2xl border gap-2 z-50">
            <div className="pl-3 flex flex-row space-x-2.5">
              <User className="bg-amber-300 rounded-3xl mt-1" />
              <h1 className="mt-1 font-bold">Beni</h1>
              <h3 className="mt-1.5 font-semibold text-sm">3.34 PM</h3>
            </div>
            <div className="p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, corrupti.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 w-[45%] h-3 rounded-b-xl border z-40"></div>
          <div className="bg-gray-100 w-[40%] h-3 rounded-b-xl border"></div>
        </div>
        <div className="absolute bottom-[-18px] left-48  bg-white border shadow-sm w-[2.5rem] h-[2.5rem] rounded-sm flex justify-center items-center">
          <File className="bg-green-200 w-[90%] h-[90%] rounded-[4px] p-2" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="mt-10">
          <h1 className="text-6xl">Informasi 1</h1>
          <div className=" flex flex-row space-x-1.5 font-normal py-4">
            <h3>Created 13 days ago</h3>
            <div className="bg-black mt-3 w-[6px] h-[6px] rounded-3xl" />
            <h3>Last modified 17 hours ago</h3>
          </div>
        </div>

        <div className="flex flex-row space-x-3">
          <p className="bg-amber-400 p-2 rounded-lg">Document</p>
          <p className="bg-amber-400 p-2 rounded-lg">Notes</p>
          <p className="bg-amber-400 p-2 rounded-lg">Review Docs</p>
        </div>
      </div>

      <div className="mt-10 text-justify flex h-full space-x-4">
        <div className="flex-1/2">
          <h1 className="text-4xl font-semibold">Judul</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perferendis voluptate ut. Consequuntur laborum vero rerum tenetur
            perferendis pariatur asperiores quos, autem quidem laboriosam sunt,
            odit animi sequi, libero saepe! In animi voluptate eaque! Amet, quae
            dignissimos. Cum, ex aspernatur. Placeat adipisci, assumenda
            inventore, accusantium exercitationem aliquid numquam totam rerum
            dolores explicabo aperiam quasi saepe aspernatur deserunt illo
            officia hic laudantium odio nulla. Repudiandae impedit praesentium
            voluptas nulla tenetur adipisci iure, soluta in excepturi! Neque
            facere dolores sunt distinctio quae aliquam perferendis deleniti
            pariatur consectetur ipsum laudantium amet eligendi explicabo,
            repellendus sequi qui incidunt. Et id architecto reprehenderit ex
            delectus.
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <Paperclip />
            <h2>Linked Doc</h2>
          </div>
          <div className="mt-5">
            <p className="p-2 bg-gray-100 rounded-md cursor-pointer">
              Download
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
