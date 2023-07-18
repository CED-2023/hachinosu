import { Center, HStack } from "@chakra-ui/react";
import { RoundOrOneWayButton } from "../atomos/RoundOrOneWayButton";
import { useState } from "react";

type Props = {
  onLabelChange: any;
};

export const RoundOrOneWayButtonList = ({ onLabelChange }: Props) => {
  const [selectedButton, setSelectedButton] = useState(""); //  初期値を空文字列に変更

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
    // console.log(`Clicked: ${label}`); // コンソールに押されたボタンのラベルを表示
    onLabelChange(label);
  };

  return (
    <>
      <Center>
        <HStack spacing="78px">
          <RoundOrOneWayButton
            label={"片道"}
            active={selectedButton === "片道"} //  選択状態を判定する条件を変更
            onClick={() => handleButtonClick("片道")} // ラベルを引数としてhandleButtonClickを呼び出す
          />
          <RoundOrOneWayButton
            label={"往復"}
            active={selectedButton === "往復"} // 選択状態を判定する条件を変更
            onClick={() => handleButtonClick("往復")} // ラベルを引数としてhandleButtonClickを呼び出す
          />
        </HStack>
      </Center>
    </>
  );
};
