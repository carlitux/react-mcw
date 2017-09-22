// @flow

declare module '@mcw/typography' {
  declare type TextProps = {
    component: React$ComponentType<*> | string,
    className?: string,
    adjustMargin?: boolean,
    mdcStyle:
      | 'display4'
      | 'display3'
      | 'display2'
      | 'display1'
      | 'headline'
      | 'title'
      | 'subheading2'
      | 'subheading1'
      | 'body2'
      | 'body1'
      | 'caption'
      | 'button',
  };

  declare export class Text extends React$Component<TextProps> {}
}
