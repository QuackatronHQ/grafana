//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file is autogenerated. DO NOT EDIT.
//
// To regenerate, run "make gen-cue" from the repository root.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



export enum AxisPlacement {
  Auto = 'auto',
  Bottom = 'bottom',
  Hidden = 'hidden',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum AxisColorMode {
  Auto = 'auto',
  Series = 'series',
}

export enum VisibilityMode {
  Always = 'always',
  Auto = 'auto',
  Never = 'never',
}

export enum GraphDrawStyle {
  Bars = 'bars',
  Line = 'line',
  Points = 'points',
}

export enum GraphTransform {
  Constant = 'constant',
  NegativeY = 'negative-Y',
}

export enum LineInterpolation {
  Linear = 'linear',
  Smooth = 'smooth',
  StepAfter = 'stepAfter',
  StepBefore = 'stepBefore',
}

export enum ScaleDistribution {
  Linear = 'linear',
  Log = 'log',
  Ordinal = 'ordinal',
}

export enum GraphGradientMode {
  Hue = 'hue',
  None = 'none',
  Opacity = 'opacity',
  Scheme = 'scheme',
}

export enum StackingMode {
  None = 'none',
  Normal = 'normal',
  Percent = 'percent',
}

export enum BarAlignment {
  After = 1,
  Before = -1,
  Center = 0,
}

export enum ScaleOrientation {
  Horizontal = 0,
  Vertical = 1,
}

export enum ScaleDirection {
  Down = -1,
  Left = -1,
  Right = 1,
  Up = 1,
}

export interface LineStyle {
  dash?: number[];
  fill?: ('solid' | 'dash' | 'dot' | 'square');
}

export const defaultLineStyle: Partial<LineStyle> = {
  dash: [],
};

export interface LineConfig {
  lineColor?: string;
  lineInterpolation?: LineInterpolation;
  lineStyle?: LineStyle;
  lineWidth?: number;
  spanNulls?: (boolean | number);
}

export interface BarConfig {
  barAlignment?: BarAlignment;
  barMaxWidth?: number;
  barWidthFactor?: number;
}

export interface FillConfig {
  fillBelowTo?: string;
  fillColor?: string;
  fillOpacity?: number;
}

export interface PointsConfig {
  pointColor?: string;
  pointSize?: number;
  pointSymbol?: string;
  showPoints?: VisibilityMode;
}

export interface ScaleDistributionConfig {
  log?: number;
  type: ScaleDistribution;
}

export interface AxisConfig {
  axisColor?: {
    mode: AxisColorMode;
  };
  axisGridShow?: boolean;
  axisLabel?: string;
  axisPlacement?: AxisPlacement;
  axisSoftMax?: number;
  axisSoftMin?: number;
  axisWidth?: number;
  scaleDistribution?: ScaleDistributionConfig;
}

export interface HideSeriesConfig {
  legend: boolean;
  tooltip: boolean;
  viz: boolean;
}

export interface StackingConfig {
  group?: string;
  mode?: StackingMode;
}

export interface StackableFieldConfig {
  stacking?: StackingConfig;
}

export interface HideableFieldConfig {
  hideFrom?: HideSeriesConfig;
}

export enum GraphTresholdsStyleMode {
  Area = 'area',
  Line = 'line',
  LineAndArea = 'line+area',
  Off = 'off',
  Series = 'series',
}

export interface GraphThresholdsStyleConfig {
  mode: GraphTresholdsStyleMode;
}

export type LegendPlacement = ('bottom' | 'right');

export enum LegendDisplayMode {
  Hidden = 'hidden',
  List = 'list',
  Table = 'table',
}

export interface TableSortByFieldState {
  desc?: boolean;
  displayName: string;
}

export interface SingleStatBaseOptions extends OptionsWithTextFormatting {
  orientation: VizOrientation;
  reduceOptions: ReduceDataOptions;
}

export interface ReduceDataOptions {
  calcs: string[];
  fields?: string;
  limit?: number;
  values?: boolean;
}

export const defaultReduceDataOptions: Partial<ReduceDataOptions> = {
  calcs: [],
};

export enum VizOrientation {
  Auto = 'auto',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface OptionsWithTooltip {
  tooltip: VizTooltipOptions;
}

export interface OptionsWithLegend {
  legend: VizLegendOptions;
}

export interface OptionsWithTextFormatting {
  text?: VizTextDisplayOptions;
}

export enum BigValueColorMode {
  Background = 'background',
  None = 'none',
  Value = 'value',
}

export enum BigValueGraphMode {
  Area = 'area',
  Line = 'line',
  None = 'none',
}

export enum BigValueJustifyMode {
  Auto = 'auto',
  Center = 'center',
}

export enum BigValueTextMode {
  Auto = 'auto',
  Name = 'name',
  None = 'none',
  Value = 'value',
  ValueAndName = 'value_and_name',
}

export type FieldTextAlignment = ('auto' | 'left' | 'right' | 'center');

export enum TableCellDisplayMode {
  Auto = 'auto',
  BasicGauge = 'basic',
  ColorBackground = 'color-background',
  ColorBackgroundSolid = 'color-background-solid',
  ColorText = 'color-text',
  GradientGauge = 'gradient-gauge',
  Image = 'image',
  JSONView = 'json-view',
  LcdGauge = 'lcd-gauge',
}

export interface VizTextDisplayOptions {
  titleSize?: number;
  valueSize?: number;
}

export enum TooltipDisplayMode {
  Multi = 'multi',
  None = 'none',
  Single = 'single',
}

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
  None = 'none',
}

export interface GraphFieldConfig extends LineConfig, FillConfig, PointsConfig, AxisConfig, BarConfig, StackableFieldConfig, HideableFieldConfig {
  drawStyle?: GraphDrawStyle;
  gradientMode?: GraphGradientMode;
  thresholdsStyle?: GraphThresholdsStyleConfig;
  transform?: GraphTransform;
}

export interface VizLegendOptions {
  asTable?: boolean;
  calcs: string[];
  displayMode: LegendDisplayMode;
  isVisible?: boolean;
  placement: LegendPlacement;
  sortBy?: string;
  sortDesc?: boolean;
  width?: number;
}

export const defaultVizLegendOptions: Partial<VizLegendOptions> = {
  calcs: [],
};

export enum BarGaugeDisplayMode {
  Basic = 'basic',
  Gradient = 'gradient',
  Lcd = 'lcd',
}

export interface TableFieldOptions {
  align: FieldTextAlignment;
  displayMode: TableCellDisplayMode;
  filterable?: boolean;
  hidden?: boolean;
  inspect: boolean;
  minWidth?: number;
  width?: number;
}

export const defaultTableFieldOptions: Partial<TableFieldOptions> = {
  align: 'auto',
  displayMode: TableCellDisplayMode.Auto,
  inspect: false,
};

export interface VizTooltipOptions {
  mode: TooltipDisplayMode;
  sort: SortOrder;
}
