import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string | undefined;
  setInput: Dispatch<SetStateAction<string | undefined>>;
};

export const WayTime = ({ value, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // console.log(value);

  return (
    <>
      <Box width="222px" height="40px" bg="white" borderColor="orange">
        <InputGroup size="sm">
          <Input
            placeholder="60"
            color="black"
            value={value}
            onChange={handleChange}
          />
          <InputRightAddon children="min" color="black" />
        </InputGroup>
      </Box>
    </>
  );
};
