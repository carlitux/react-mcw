// @flow
/* eslint-disable */
import * as React from 'react';

import { Text } from 'material-toolbox/typography';
import {
  Toolbar,
  ToolbarIcon,
  ToolbarSection,
  ToolbarTitle,
  ToolbarRow,
  ToolbarFixedAdjust,
} from 'material-toolbox/toolbar';
/* eslint-enable */
import './styles.scss';

// eslint-disable-next-line
export default class FlexibleToolbarApp extends React.Component<{}> {
  title: ?ToolbarTitle;
  adjust: ?ToolbarFixedAdjust;

  render() {
    return (
      <div>
        <Toolbar parent={this} flexible default waterfall fixed lastRow>
          <ToolbarRow>
            <ToolbarSection align="start">
              <ToolbarIcon className="material-icons" isMenu>
                menu
              </ToolbarIcon>
              <ToolbarTitle
                ref={element => {
                  this.title = element;
                }}
                label="Title"
              />
            </ToolbarSection>
          </ToolbarRow>
          <ToolbarRow>
            <ToolbarSection align="end">
              <ToolbarIcon
                className="material-icons"
                aria-label="Download"
                alt="Download">
                file_download
              </ToolbarIcon>
              <ToolbarIcon
                className="material-icons"
                aria-label="Print this page"
                alt="Print this page">
                print
              </ToolbarIcon>
              <ToolbarIcon
                className="material-icons"
                aria-label="Bookmark this page"
                alt="Bookmark this page">
                bookmark
              </ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust
          ref={element => {
            this.adjust = element;
          }}>
          <main className="demo-content">
            <Text component="div" textStyle="body1">
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
              <p className="demo-paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est.
              </p>
            </Text>
          </main>
        </ToolbarFixedAdjust>
      </div>
    );
  }
}
