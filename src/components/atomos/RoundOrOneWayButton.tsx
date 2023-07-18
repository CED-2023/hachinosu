import { Button, Stack } from "@chakra-ui/react";

type Props = {
  label: string; // ボタンのラベル
  active: boolean; // 押されたかどうか
  onClick: () => void; // ボタンクリック時のコールバック関数
};

export const RoundOrOneWayButton = ({ label, active, onClick }: Props) => {
  return (
    <>
      <Stack direction="row" spacing={4} align="center">
        <Button
          height="40px"
          variant={active ? "solid" : "outline"}
          colorScheme={active ? "gray" : "orange"}
          shadow={active ? "inner" : "md"}
          onClick={onClick}
        >
          {label}
        </Button>
      </Stack>
    </>
  );
};
