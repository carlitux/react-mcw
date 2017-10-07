// @flow
import * as React from 'react';
import classnames from 'classnames';

type phoneCols = null | 1 | 2 | 3 | 4;
type tabletCols = phoneCols | 5 | 6 | 7 | 8;
type desktopCols = tabletCols | 9 | 10 | 11 | 12;

type Props = {
  align: null | 'top' | 'middle' | 'bottom',
  className: ?string,
  span: desktopCols,
  order: desktopCols,
  phone: phoneCols,
  tablet: tabletCols,
  desktop: desktopCols,
};

const BASE = 'mdc-layout-grid__cell';

const Cell = ({
  align,
  className,
  span,
  order,
  phone,
  tablet,
  desktop,
  ...rest
}: Props) => (
  <div
    className={classnames(
      BASE,
      {
        [`${BASE}--span-${span || ''}`]: span,
        [`${BASE}--span-${tablet || ''}-tablet`]: tablet,
        [`${BASE}--span-${phone || ''}-phone`]: phone,
        [`${BASE}--span-${desktop || ''}-desktop`]: desktop,
        [`${BASE}--order-${order || ''}`]: order,
        [`${BASE}--align-${align || ''}`]: align,
      },
      className,
    )}
    {...rest}
  />
);

Cell.defaultProps = {
  align: null,
  className: null,
  desktop: null,
  tablet: null,
  phone: null,
  order: null,
  span: null,
};

export default Cell;
