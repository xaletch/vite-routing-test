export interface NominalCard {
  index: number;
  selectedStyle: string;
  image: string;
  barcode: number;
  article: string;
  status: string;
  client: string;
  resource: string;
  qty: number;
  time: string;
  isSelected: boolean;
  onSelectionChange: (index: number, isSelected: boolean) => void;
  hidden?: boolean;
}
