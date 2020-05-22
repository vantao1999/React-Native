/**
 * @format
 */
/* eslint-disable prettier/prettier */
//import { AppRegistry } from 'react-native';
import App from './App';
//import { name as appName } from './app.json';
import { Navigation } from 'react-native-navigation';
import secondapp from '../reactApp/src/screen/new';
import first from '../reactApp/src/screen/firstApp';
import DisplaySymptom from './src/screen/symptom';

Navigation.registerComponent('Home', () => secondapp);
Navigation.registerComponent('Symptom', () => DisplaySymptom);
Navigation.registerComponent('First', () => first);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Symptom',
                                        passProps: {
                                            text: 'This is tab 1',
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    icon: require('../reactApp/src/images/home.png'),
                                    text: 'Home',
                                },
                                topBar: {
                                    visible: false,
                                },
                            },
                        },
                    },
                    {
                        component: {
                            name: 'Home',
                            passProps: {
                                text: 'This is tab 2',
                            },
                            options: {
                                bottomTab: {
                                    icon: require('../reactApp/src/images/news.png'),
                                    text: 'News',
                                },
                            },
                        },

                    },

                    {
                        component: {
                            name: 'First',
                            passProps: {
                                text: 'This is tab 3',
                            },
                            options: {
                                bottomTab: {
                                    icon: require('../reactApp/src/images/healthcare.png'),
                                    text: 'Prevention',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
});
