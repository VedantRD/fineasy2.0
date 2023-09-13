import 'react-native-gesture-handler';
import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper'
import { LightTheme } from './src/theme/LightTheme';
import { DarkTheme } from './src/theme/DarkTheme';

const LightScheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...LightTheme,
    }
};

const DarkScheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...DarkTheme
    },
};

export default function Main() {
    const colorScheme = useColorScheme()
    const appTheme = colorScheme === 'dark' ? DarkScheme : LightScheme

    return (
        <PaperProvider theme={appTheme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
