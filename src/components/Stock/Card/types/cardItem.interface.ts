export interface StockCard {
  index: number;
  selectedStyle: string;
  image: string;
  barcode: number;
  article: string;
  client: string;
  cell?: number;
  status: string;
  box: string;
  resource: string;
  qty: number;
  time: string;
  isSelected: boolean;
  onSelectionChange: (index: number, isSelected: boolean) => void;
  hidden?: boolean;
}
