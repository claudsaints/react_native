import Groups from "@groups/index";
import theme from "../theme";
import { ThemeProvider } from "styled-components";

export default function Index() {
  return(
    <ThemeProvider theme={theme}>
      <Groups/>

    </ThemeProvider>
  );
}
