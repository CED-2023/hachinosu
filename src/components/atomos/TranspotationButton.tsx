import { Button, Image } from "@chakra-ui/react";
import { ButtonIconList } from "../../Data/DataURLList";

type Props = {
  transportation: number;
  active: boolean;
  onClick: () => void;
};

export const TransportationButton = ({
  transportation,
  active,
  onClick,
}: Props) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <Button
      colorScheme="orange"
      variant="outline"
      bgColor="white"
      height="83px"
      width="101px"
      boxShadow={active ? "md" : "inner"}
      onClick={handleButtonClick}
    >
      <Image
        boxSize="71px"
        objectFit="cover"
        src={ButtonIconList[transportation].images[active ? 1 : 0]}
      />
    </Button>
  );
};
