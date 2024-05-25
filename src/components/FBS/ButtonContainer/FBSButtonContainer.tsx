import { useInitializeStyle } from "../../../hooks/useInitializeStyle";
import { IconGrid } from "../../Buttons/ViewToggle/components/IconGrid";
import { IconList } from "../../Buttons/ViewToggle/components/IconList";
import { IconTable } from "../../Buttons/ViewToggle/components/IconTable";

export const FBSButtonContainer = () => {
  useInitializeStyle(["grid", "list", "table"]);
  return (
    <>
      <IconGrid />
      <IconList />
      <IconTable />
    </>
  );
};
