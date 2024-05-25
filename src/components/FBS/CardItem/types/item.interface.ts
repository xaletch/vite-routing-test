export interface FBSItemProps {
  clientName: string;
  handleClick: (id: number) => void;
  box_count: number;
  assembly_count: number;
  delivery_count: number;
  id: number;
  new_task?: number;
}
