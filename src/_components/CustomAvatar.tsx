import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CustomAvatarProps = {
  name: string;
  fallBackUrl?: string;
  imageUrl?: string;
};

export const CustomAvatar = ({
  name,
  imageUrl,
  fallBackUrl,
}: CustomAvatarProps) => {
  return (
    <div className="flex flex-row">
      <Avatar>
        <AvatarImage src={imageUrl} alt={`Avatar ${name}`} />
        <AvatarFallback>{fallBackUrl}</AvatarFallback>
      </Avatar>
      <span className="my-auto ml-4">{name}</span>
    </div>
  );
};
