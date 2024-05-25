export interface ClientCardProps {
  clientName: string;
  telephone?: string;
  integrationWB: boolean;
  integrationOzon: boolean;
  partners?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}
