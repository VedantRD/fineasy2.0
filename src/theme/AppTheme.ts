import { MD3LightTheme as DefaultTheme, MD3DarkTheme, MD3LightTheme, configureFonts, useTheme, customText } from 'react-native-paper';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';
import { Platform, useColorScheme } from 'react-native'

// export const appTheme = {
//     ...DefaultTheme,
//     myOwnProperty: true,
//     ...DefaultTheme.colors,
//     colors: {
//         dark: '#0f172a',
//         light: '#f8fafc',
//         // darkHex: '#0f172a',
//         // lightHex: '#f8fafc',
//         // white: '#ffffff',

//         primary: '#3b82f6',
//         primaryDark: '#3b82f6',
//         primaryScheme: '#3b82f6',
//         primaryDarkScheme: '#3b82f6',
//         // primaryHex: '#3b82f6',

//         cardBorderLight: '#e5e7eb',
//         cardBorderDark: '#4b5563',
//         cardBgLight: '#fafafa',
//         cardBgDark: '#27272a'
//     },
// };

// const fontConfig = {
//     bodyLarge: {
//         letterSpacing: 0.5,
//         lineHeight: 22,
//         fontSize: 20,
//     }
// };

const LightScheme = {
    ...MD3LightTheme,
    // fonts: configureFonts({ config: fontConfig }),
    colors: LightTheme,
};

const DarkScheme = {
    ...MD3DarkTheme,
    // fonts: configureFonts({ config: fontConfig }),
    colors: DarkTheme,
};

// const colorScheme = useColorScheme();
// const appTheme = colorScheme === 'dark' ? DarkScheme : LightScheme;

export type AppTheme = typeof DarkScheme;

export const useAppTheme = () => useTheme<AppTheme>();

// export const Text = customText<'customVariant'>()