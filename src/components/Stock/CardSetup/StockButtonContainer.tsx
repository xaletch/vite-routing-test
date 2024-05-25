import { useInitializeStyle } from "../../../hooks/useInitializeStyle";
import { IconGrid } from "../../Buttons/ViewToggle/components/IconGrid";
import { IconTable } from "../../Buttons/ViewToggle/components/IconTable";

export const StockButtonContainer = () => {
  useInitializeStyle(["grid", "table"]);
  return (
    <>
      <IconGrid />
      <IconTable />
    </>
  );
};
