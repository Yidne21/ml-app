import { ReactNode } from 'react';
import {
  ColorProps,
  LayoutProps,
  TypographyProps,
  SpaceProps,
  JustifyContentProps,
  AlignItemsProps,
  FlexDirectionProps,
  FlexGrowProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  AlignSelfProps,
  JustifySelfProps,
  BoxShadowProps,
  BorderProps,
  FlexboxProps,
  FlexBasisProps,
  GridGapProps,
  FontFamilyProps,
  PositionProps,
  MarginProps,
  BackgroundImageProps,
  ZIndexProps,
  SizeProps,
  WidthProps,
  BackgroundPositionProps,
  BackgroundProps,
  BackgroundSizeProps,
  BorderRadiusProps,
  OpacityProps,
  HeightProps,
  ShadowProps,
  ResponsiveValue,
} from 'styled-system';

export interface ButtonProps
  extends ColorProps,
    LayoutProps,
    JustifyContentProps,
    TypographyProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    FlexProps,
    FlexBasisProps,
    FlexDirectionProps,
    AlignSelfProps,
    JustifySelfProps,
    AlignItemsProps,
    ZIndexProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outlined'
    | 'status'
    | 'padded'
    | 'paddedOutline'
    | 'ghost'
    | 'normal'
    | 'rightOutlinedLeaf';
  loading?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  type?: string;
  disabled?: boolean;
}

interface Style {
  [key: string]: string | number;
}

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    PositionProps,
    GridGapProps,
    LayoutProps,
    FlexBasisProps,
    FlexGrowProps,
    FlexProps,
    JustifyContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexboxProps,
    TypographyProps,
    BorderProps,
    BackgroundImageProps,
    BackgroundPositionProps,
    BoxShadowProps,
    BackgroundSizeProps,
    OpacityProps,
    ShadowProps,
    BackgroundProps {
  transition?: string | Array<string>;
  transform?: string | Array<string>;
  transformOrigin?: string | Array<string>;
  cursor?: string | Array<string>;
  children?: ReactNode;
  Style?: Style;
}

export interface TextInputProps
  extends ColorProps,
    TypographyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    AlignSelfProps,
    JustifySelfProps,
    PositionProps,
    MarginProps,
    FontFamilyProps {}

export interface TextProps
  extends ColorProps,
    TypographyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    AlignSelfProps,
    JustifySelfProps,
    PositionProps,
    MarginProps,
    FontFamilyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'base' | 'ellipsis';
  textOverflow?: string;
  cursor?: string;
  // children: string | JSX.Element[] | number;
}

export interface InputProps
  extends ColorProps,
    LayoutProps,
    TypographyProps,
    SpaceProps,
    AlignSelfProps,
    JustifySelfProps,
    BorderProps,
    PositionProps,
    BorderRadiusProps {
  variant?: 'outlined' | 'filled';
  valid?: boolean;
  tabIndex?: number;
}
export interface StyledInputProps extends InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}

export interface ListProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    FlexProps,
    FlexGrowProps,
    JustifyContentProps,
    AlignItemsProps {
  type?: 'horizontal' | 'vertical' | 'spread' | string[];
  transition?: string;
  transform?: string;
}

export interface ImageProps
  extends SpaceProps,
    LayoutProps,
    JustifySelfProps,
    AlignSelfProps,
    ZIndexProps,
    PositionProps,
    SizeProps,
    WidthProps,
    HeightProps,
    BorderProps {
  source: { uri: string };
  aspectRatio?: number;
}

export interface CardProps
  extends BoxShadowProps,
    AlignSelfProps,
    JustifySelfProps,
    JustifyContentProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ColorProps,
    AlignItemsProps {
  variant?: 'default' | 'rightBended' | 'dense' | 'medium' | 'radiant';
}

export interface ImageBackgroundProps
  extends SpaceProps,
    LayoutProps,
    JustifySelfProps,
    AlignSelfProps,
    ZIndexProps,
    PositionProps,
    SizeProps,
    WidthProps,
    HeightProps,
    BorderProps {
  source: { uri: string };
  resizeMode: string;
  children?: JSX.Element | JSX.Element[];
}

export interface FlexProps extends FlexboxProps {
  gap?: ResponsiveValue<number | string>;
}
