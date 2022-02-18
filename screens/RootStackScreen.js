import * as React from 'react';
import { NavigationContainer } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default RootNavigator;