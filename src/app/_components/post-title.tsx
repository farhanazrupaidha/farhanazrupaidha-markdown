import { ReactNode } from "react";
import Typography from '@mui/material/Typography';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <Typography variant="h1">
      {children}
    </Typography>
  );
}
