import { AbsoluteCenter, Box, Button } from "@chakra-ui/react";

type Props = {
  active: boolean; // 押されたかどうか
  onClick: () => void;
};

export const SearchButton = ({ active, onClick }: Props) => {
  const handleButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Box position="relative" h="40px">
        <AbsoluteCenter>
          <Button
            height="40px"
            variant="outline"
            colorScheme={active ? "orange" : "gray"}
            onClick={handleButtonClick}
          >
            検索
          </Button>
        </AbsoluteCenter>
      </Box>
    </>
  );
};
