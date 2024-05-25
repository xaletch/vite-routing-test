export interface sortContent {
  name: string;
  selectValue: string;
  list?: string[];
  isOpen: boolean;
  setSelected: (value: string) => void;
  togglePopup: () => void;
  // onSelectDate: (date: Date) => void;
}
