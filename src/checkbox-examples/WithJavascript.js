// @flow
import * as React from 'react';

import FormField from '../material-toolbox/form-field';
import Button from '../material-toolbox/button/Button';
import Checkbox from '../material-toolbox/checkbox';
import Example from '../Example';

type Props = {};

type State = {
  [string]: {
    indeterminate: boolean,
    disabled: boolean,
  },
};

const scssSource = `.custom-checkbox {
  &--all::before,
  &--all::after {
    background-color: #f44336;
  }

  &--all::before {
    opacity: 0.04;
  }

  &--all:not(.mdc-ripple-upgraded):focus::before,
  &--all.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }

  &--all:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear;
  }

  &---all:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.16;
  }

  &---all.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.16;
  }

  &--all .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  &--all .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
  &--all .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: #f44336;
    background-color: #f44336;
  }

  &--all.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-1;
    animation-name: mdc-checkbox-fade-in-background-1;
  }

  &--all.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-1;
    animation-name: mdc-checkbox-fade-in-background-1;
  }

  &--all.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--all.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-1;
    animation-name: mdc-checkbox-fade-out-background-1;
  }

  // Stroke

  &--stroke .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
    border-color: #2196f3;
    background-color: transparent;
  }

  &--stroke .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
  &--stroke .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  &--stroke.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--stroke.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-in-background-2;
    animation-name: mdc-checkbox-fade-in-background-2;
  }

  &--stroke.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,
  &--stroke.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background {
    -webkit-animation-name: mdc-checkbox-fade-out-background-2;
    animation-name: mdc-checkbox-fade-out-background-2;
  }
}

@-webkit-keyframes mdc-checkbox-fade-in-background-1 {
  0% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  50% {
    border-color: #f44336;
    background-color: #f44336;
  }
}

@keyframes mdc-checkbox-fade-in-background-1 {
  0% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }

  50% {
    border-color: #f44336;
    background-color: #f44336;
  }
}

@-webkit-keyframes mdc-checkbox-fade-out-background-1 {
  0%,
  80% {
    border-color: #f44336;
    background-color: #f44336;
  }

  100% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }
}

@keyframes mdc-checkbox-fade-out-background-1 {
  0%,
  80% {
    border-color: #f44336;
    background-color: #f44336;
  }

  100% {
    border-color: #f44336;
    background-color: rgba(244, 67, 54, 0.25);
  }
}

@-webkit-keyframes mdc-checkbox-fade-in-background-2 {
  0% {
    border-color: #2196f3;
    background-color: transparent;
  }

  50% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }
}

@keyframes mdc-checkbox-fade-in-background-2 {
  0% {
    border-color: #2196f3;
    background-color: transparent;
  }

  50% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }
}

@-webkit-keyframes mdc-checkbox-fade-out-background-2 {
  0%,
  80% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  100% {
    border-color: #2196f3;
    background-color: transparent;
  }
}

@keyframes mdc-checkbox-fade-out-background-2 {
  0%,
  80% {
    border-color: #9c27b0;
    background-color: #9c27b0;
  }

  100% {
    border-color: #2196f3;
    background-color: transparent;
  }
}
`;

const source = `import FormField from 'material-toolbox/form-field';
import Button from 'material-toolbox/button/Button';
import Checkbox from 'material-toolbox/checkbox';

export default class WithJavascript extends React.PureComponent {
  state = {
    default: {
      indeterminate: false,
      disabled: false,
    },
    indeterminate: {
      indeterminate: true,
      disabled: false,
    },
    custom_all: {
      indeterminate: false,
      disabled: false,
    },
    custom_stroke: {
      indeterminate: false,
      disabled: false,
    },
  };

  toggleIndeterminate = (event) => {
    const { name } = event.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: state[name]
        ? { ...state[name], indeterminate: !state[name].indeterminate }
        : { indeterminate: true, disabled: false },
    }));
  };

  toggleDisabled = (event) => {
    const { name } = event.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: state[name]
        ? { ...state[name], disabled: !state[name].disabled }
        : { indeterminate: false, disabled: true },
    }));
  };

  render() {
    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <div>
            <FormField
              label="Default checkbox"
              htmlFor="default-with-javascript">
              <Checkbox
                id="default-with-javascript"
                indeterminate={this.state.default.indeterminate}
                disabled={this.state.default.disabled}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Indeterminate checkbox"
              htmlFor="indeterminate-with-javascript">
              <Checkbox
                id="indeterminate-with-javascript"
                indeterminate={this.state.indeterminate.indeterminate}
                disabled={this.state.indeterminate.disabled}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Custom colored checkbox (stroke, fill, ripple, and focus)"
              htmlFor="custom-with-javascript">
              <Checkbox
                id="custom-with-javascript"
                className="custom-checkbox custom-checkbox--all"
                indeterminate={this.state.custom_all.indeterminate}
                disabled={this.state.custom_all.disabled}
              />
            </FormField>
          </div>

          <div>
            <FormField
              label="Custom colored checkbox (stroke and fill only)"
              htmlFor="custom-stroke-with-javascript">
              <Checkbox
                id="custom-stroke-with-javascript"
                className="custom-checkbox custom-checkbox--stroke"
                indeterminate={this.state.custom_stroke.indeterminate}
                disabled={this.state.custom_stroke.disabled}
              />
            </FormField>
          </div>
        </div>

        <div style={{ display: 'inline-block' }}>
          <div>
            <Button name="default" stroked onClick={this.toggleIndeterminate}>
              Toggle Indeterminate
            </Button>
            &nbsp;
            <Button name="default" stroked onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>

          <div>
            <Button
              name="indeterminate"
              stroked
              onClick={this.toggleIndeterminate}>
              Toggle Indeterminate
            </Button>
            &nbsp;
            <Button
              name="indeterminate"
              stroked
              onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>

          <div>
            <Button
              name="custom_all"
              stroked
              onClick={this.toggleIndeterminate}>
              Toggle Indeterminate
            </Button>
            &nbsp;
            <Button name="custom_all" stroked onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
          <div>
            <Button
              name="custom_stroke"
              stroked
              onClick={this.toggleIndeterminate}>
              Toggle Indeterminate
            </Button>
            &nbsp;
            <Button
              name="custom_stroke"
              stroked
              onClick={this.toggleDisabled}>
              Toggle disabled
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
`;

export default class WithJavascript extends React.PureComponent<Props, State> {
  state = {
    default: {
      indeterminate: false,
      disabled: false,
    },
    indeterminate: {
      indeterminate: true,
      disabled: false,
    },
    custom_all: {
      indeterminate: false,
      disabled: false,
    },
    custom_stroke: {
      indeterminate: false,
      disabled: false,
    },
  };

  toggleIndeterminate = (event: SyntheticInputEvent<EventTarget>) => {
    // $FlowFixMe
    const { name } = event.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: state[name]
        ? { ...state[name], indeterminate: !state[name].indeterminate }
        : { indeterminate: true, disabled: false },
    }));
  };

  toggleDisabled = (event: SyntheticInputEvent<EventTarget>) => {
    // $FlowFixMe
    const { name } = event.currentTarget;
    this.setState(state => ({
      ...state,
      [name]: state[name]
        ? { ...state[name], disabled: !state[name].disabled }
        : { indeterminate: false, disabled: true },
    }));
  };

  render() {
    return (
      <div>
        <Example title="With Javascript" source={source} scss={scssSource}>
          <div style={{ display: 'inline-block' }}>
            <div>
              <FormField
                label="Default checkbox"
                htmlFor="default-with-javascript">
                <Checkbox
                  id="default-with-javascript"
                  indeterminate={this.state.default.indeterminate}
                  disabled={this.state.default.disabled}
                />
              </FormField>
            </div>

            <div>
              <FormField
                label="Indeterminate checkbox"
                htmlFor="indeterminate-with-javascript">
                <Checkbox
                  id="indeterminate-with-javascript"
                  indeterminate={this.state.indeterminate.indeterminate}
                  disabled={this.state.indeterminate.disabled}
                />
              </FormField>
            </div>

            <div>
              <FormField
                label="Custom colored checkbox (stroke, fill, ripple, and focus)"
                htmlFor="custom-with-javascript">
                <Checkbox
                  id="custom-with-javascript"
                  className="custom-checkbox custom-checkbox--all"
                  indeterminate={this.state.custom_all.indeterminate}
                  disabled={this.state.custom_all.disabled}
                />
              </FormField>
            </div>

            <div>
              <FormField
                label="Custom colored checkbox (stroke and fill only)"
                htmlFor="custom-stroke-with-javascript">
                <Checkbox
                  id="custom-stroke-with-javascript"
                  className="custom-checkbox custom-checkbox--stroke"
                  indeterminate={this.state.custom_stroke.indeterminate}
                  disabled={this.state.custom_stroke.disabled}
                />
              </FormField>
            </div>
          </div>

          <div style={{ display: 'inline-block' }}>
            <div>
              <Button name="default" stroked onClick={this.toggleIndeterminate}>
                Toggle Indeterminate
              </Button>
              &nbsp;
              <Button name="default" stroked onClick={this.toggleDisabled}>
                Toggle disabled
              </Button>
            </div>

            <div>
              <Button
                name="indeterminate"
                stroked
                onClick={this.toggleIndeterminate}>
                Toggle Indeterminate
              </Button>
              &nbsp;
              <Button
                name="indeterminate"
                stroked
                onClick={this.toggleDisabled}>
                Toggle disabled
              </Button>
            </div>

            <div>
              <Button
                name="custom_all"
                stroked
                onClick={this.toggleIndeterminate}>
                Toggle Indeterminate
              </Button>
              &nbsp;
              <Button name="custom_all" stroked onClick={this.toggleDisabled}>
                Toggle disabled
              </Button>
            </div>
            <div>
              <Button
                name="custom_stroke"
                stroked
                onClick={this.toggleIndeterminate}>
                Toggle Indeterminate
              </Button>
              &nbsp;
              <Button
                name="custom_stroke"
                stroked
                onClick={this.toggleDisabled}>
                Toggle disabled
              </Button>
            </div>
          </div>
        </Example>
      </div>
    );
  }
}
