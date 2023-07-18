import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string | undefined;
  setInput: Dispatch<SetStateAction<string | undefined>>;
};

export const PlaceInput = ({ value, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // console.log(value);

  return (
    <Box width="222px" height="40px" bg="white">
      <InputGroup size="sm">
        <Input placeholder="mysite" value={value} onChange={handleChange} />
        <InputRightElement>
          <Search2Icon color="black" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
