import React, {createElement} from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import WidgetFrame from './WidgetFrame';
import Widgets from './Widgets';
import HelloWorld from '../../sample/components/widgets/HelloWorld/Index';

import TestUtils from 'react-dom/test-utils';

const WrappedFrame = WidgetFrame.DecoratedComponent;

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('WidgetFrame', module)
    .add('with text', () => (<WrappedFrame
            key="0"
            widgetName="RocketWidget"
            title="Rocket Widget Title"
            columnIndex="0"
            rowIndex="0"
            widgetIndex="0"
        >
            {
                createElement('HelloWorld', Widgets.props)
            }
        </WrappedFrame>));
