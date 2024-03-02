import styled from 'styled-components';
import { Box } from './Box';
import {
  boxShadow,
  flexbox,
  compose,
  system,
  flex,
  layout,
  space,
  typography,
  border,
  position,
  borderRadius,
} from 'styled-system';
import { FlexProps } from './types';

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${compose(
    flexbox,
    flex,
    space,
    layout,
    gap,
    typography,
    border,
    position,
    borderRadius,
    boxShadow,
  )};
`;
