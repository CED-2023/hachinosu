import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { PlaceInput } from "../atomos/PlaceInput";
import { TransportationButtonList } from "../molecules/TranspotationButtonList";
import { RoundOrOneWayButtonList } from "../molecules/RoundOrOneWayButtonList";
import { WayTime } from "../atomos/WayTime";
import { useEffect, useState } from "react";
import { SearchButton } from "../atomos/SearchButton";

type Input = {
  place: string | undefined;
  transportation: string | undefined;
  way: string | undefined;
  time: number | undefined;
};

const InputList = {
  place: undefined,
  transportation: undefined,
  way: undefined,
  time: undefined,
};

export const InputCheck = () => {
  const [input, setInput] = useState<Input>(InputList);
  const [inputTime, setInputTime] = useState<string | undefined>(undefined);
  const [inputPlace, setInputPlace] = useState<string | undefined>(undefined);
  const [inputTransportation, setInputTransportation] = useState<
    string | undefined
  >(undefined);
  const [inputWay, setInputWay] = useState<string | undefined>(undefined);
  const [isValidate, setIsValidate] = useState<boolean>(false);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        place: inputPlace ? String(inputPlace) : undefined,
      };
    });
  }, [inputPlace]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        time: inputTime ? Number(inputTime) : undefined,
      };
    });
  }, [inputTime]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        transportation: inputTransportation
          ? String(inputTransportation)
          : undefined,
      };
    });
  }, [inputTransportation]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        way: inputWay ? String(inputWay) : undefined,
      };
    });
  }, [inputWay]);

  const handleSearch = () => {
    console.log("aa");
    console.log("InputList:", input);

    setInput(InputList); // InputListを初期化する
  };

  useEffect(() => {
    const isValid =
      !!input.place && !!input.transportation && !!input.way && !!input.time;
    setIsValidate(isValid);
  }, [input]);

  return (
    <>
      <Box height="80px"></Box>
      <Box position="relative" h="40px">
        <AbsoluteCenter>
          <PlaceInput value={inputPlace || ""} setInput={setInputPlace} />
        </AbsoluteCenter>
      </Box>
      <Box height="90px"></Box>
      <Box position="relative" h="40px">
        <AbsoluteCenter>
          <TransportationButtonList
            onLabelChange={setInputTransportation}
            value={inputTransportation}
          />
        </AbsoluteCenter>
      </Box>
      <Box height="100px"></Box>
      <RoundOrOneWayButtonList onLabelChange={setInputWay} />
      <Box height="72px"></Box>
      <Box position="relative" h="40px">
        <AbsoluteCenter>
          <WayTime value={inputTime || ""} setInput={setInputTime} />
        </AbsoluteCenter>
      </Box>
      <Box height="72px"></Box>
      <SearchButton active={isValidate} onClick={handleSearch} />
      <Box height="200px"></Box>
    </>
  );
};
