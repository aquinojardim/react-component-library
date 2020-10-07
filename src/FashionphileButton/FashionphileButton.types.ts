export interface FashionphileButtonProps {
  content?: string;
  onPress?: ()=>void;
  size?: "btn-lg" | "btn-sm";
  status?: "on" | "off";  
  theme?: "primary" | "secondary" | "pink" | "ghost-black" | "ghost-white";
}
