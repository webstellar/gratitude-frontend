import {
    Container,
} from "@mui/material"

import { GrBox } from "./GratitudeMainSection.styles";

const GratitudeMainSection = ({ gratitude }) => {
    return (
        <section>
            <GrBox>
                <Container maxWidth="xl">
                    <div style={{ fontSize: "20px", fontWeight: "300" }} dangerouslySetInnerHTML={{ __html: gratitude.story }} />
                </Container>
            </GrBox>
        </section>
    )
}

export default GratitudeMainSection