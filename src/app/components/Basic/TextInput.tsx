import styled from 'styled-components/native';
import { hp } from '../../../utils/constants';

import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  border,
  zIndex,
  position,
} from 'styled-system';
import { TextInputProps } from './types';
import { theme } from '../../../utils/theme/theme';

export const TextInput = styled.TextInput<TextInputProps>`
  height: ${hp(7)}px;
  max-height: 50px;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${theme.colors.primary[500]};
  ${compose(color, layout, space, typography, variant, border, zIndex, position)};
`;
