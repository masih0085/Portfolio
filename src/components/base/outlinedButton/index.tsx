import { Button, styled, ButtonProps } from '@mui/material';

type CommonButtonProps = {
  width?: string;
  height?: string;
};

export type OutlinedBaseButtonProps = CommonButtonProps & ButtonProps;

export function OutlinedBaseButton(props: OutlinedBaseButtonProps) {
  const { children, ...rest } = props;

  return (
    <StyledButton {...rest} variant="outlined">
      {children}
    </StyledButton>
  );
}
const StyledButton = styled(Button)<OutlinedBaseButtonProps>(
  ({ height, width }) => ({
    ...(height ? { height } : { height: '45px' }),
    ...(width && { width }),
    fontSize: '18px',
    textTransform: 'none',
  }),
);
