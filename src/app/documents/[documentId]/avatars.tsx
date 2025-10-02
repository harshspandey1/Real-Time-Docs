'use client'
import { ClientSideSuspense } from "@liveblocks/react";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import Image from "next/image";

const AVATAR_SIZE = 36;

export const Avatars = () => {
  return (
    <ClientSideSuspense fallback={null}>
      <AvatarStack />
    </ClientSideSuspense>
  );
};

const AvatarStack = () => {
  const users = useOthers();
  const currentUser = useSelf();

  if (users.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {currentUser && (
          <div className="relative">
            <Avatar src={currentUser.info.avatar} name="You" />
          </div>
        )}
        <div className="flex">
          {users.map(({ connectionId, info }) => {
            return (
              <Avatar
                key={connectionId}
                src={info.avatar}
                name={info.name ?? "Anonymous"}
              />
            );
          })}
        </div>
      </div>
      <div className="h-6 w-px bg-gray-300" />
    </div>
  );
};

interface AvatarProps {
  src: string;
  name: string;
}

const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <div
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      className="group -ml-2 first:ml-0 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400 hover:z-10 transition-all"
    >
      <div className="opacity-0 group-hover:opacity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity pointer-events-none">
        {name}
      </div>
      <Image
        alt={name}
        src={src}
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        className="size-full rounded-full object-cover"
      />
    </div>
  );
};