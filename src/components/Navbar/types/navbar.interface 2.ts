export interface navbarProps {
  collapse: () => void;
  resetWidth: () => void;
  navbarRef: React.RefObject<HTMLDivElement>;
  isMenu: boolean;
}
