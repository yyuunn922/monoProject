import { Stack } from "expo-router";
import '@packages/configs/global.css';
import {Color} from "@packages/configs/tailwindThemeItem";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    contentStyle:{backgroundColor: Color.Basic.White}
  }} />;
}
