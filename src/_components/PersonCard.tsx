import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router";

type PersonCardProps = {
  href: string;
  imgUrl: string;
  name: string;
  btnName: string;
};

export const PersonCard = ({
  href,
  imgUrl,
  name,
  btnName,
}: PersonCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(href);
  };

  return (
    <Card className="w-full max-w-sm mx-auto" onClick={handleCardClick}>
      <CardContent className="pt-6 pb-4">
        <img
          src={imgUrl}
          alt={`Person ${name}`}
          className="w-40 h-40 rounded-full mb-6 mx-auto object-cover"
        />
        <h2 className="text-xl text-center font-semibold">{name}</h2>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={handleCardClick}
        >
          {btnName}
        </Button>
      </CardFooter>
    </Card>
  );
};
