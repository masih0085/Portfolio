import { Button, styled, ButtonProps } from '@mui/material';

type CommonButtonProps = {
  width?: string;
  height?: string;
};

export type ContainedBaseButtonProps = CommonButtonProps & ButtonProps;

export function ContainedBaseButton(props: ContainedBaseButtonProps) {
  const { children, ...rest } = props;

  return (
    <StyledButton {...rest} variant="contained">
      {children}
    </StyledButton>
  );
}
const StyledButton = styled(Button)<ContainedBaseButtonProps>(
  ({ height, width }) => ({
    ...(height ? { height } : { height: '45px' }),
    ...(width && { width }),
    fontSize: '18px',
    textTransform: 'none',
  }),
);
