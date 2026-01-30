import { useMediaQuery } from "react-responsive";

export const useDesktop = () => {
  return useMediaQuery({ minWidth: 1024 });
};
