import { useContext } from "react";

//component
import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
`;

const Code = () => {
    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                language="xml"
                value={html}
                onChange={setHtml}
            />
            <Editor
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                language="css"
                value={css}
                onChange={setCss}
            />
            <Editor
                heading="JavaScript"
                icon="()"
                color="#FCD000"
                language="javascript"
                value={js}
                onChange={setJs}
            />
        </Container>
    );
};

export default Code;
