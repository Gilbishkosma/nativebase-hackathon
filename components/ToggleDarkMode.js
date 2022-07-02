import React from "react";
import {
  useColorMode,
  Tooltip,
  IconButton,
  MoonIcon,
  SunIcon,
} from "native-base";

// Color Switch Component
export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        // position="  "
        // top={12}

        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
