import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import SomethingWentWrong from "../../components/error";

import BuildSessionBox from "./box";
import { Container, Content } from "./style";
import Loader from "../../components/loader";
import useSession from "../../hooks/api/sessions";

export default function Session() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { loading, data, error } = useSession(id);

    const [session, setSession] = React.useState({ movie: {}, sessions: [] });
    const { movie } = session;

    React.useEffect(() => {

        if (isNaN(id)) navigate("/");

        if (!loading) {

            const movie = {

                id: data.id,
                title: data.title,
                img: data.posterURL
            };

            setSession({ movie, sessions: [...data.days] });
        };

    }, [loading]);

    function RenderSessions() {

        if (loading) return RenderLoader();
        if (error) return SomethingWentWrong(error);
        const { sessions } = session;
        return sessions.map((element, index) => <BuildSessionBox key={index} props={element} />);
    };

    return (
        <Container>
            <Header />
            <Content>
                <RenderSessions />
            </Content>
            <Footer data={{ img: movie.img, title: movie.title, date: "Amanhã" }} />
        </Container>
    )
};

function RenderLoader() {

    return (
        <Content>
            <Loader color={"#C3CFD9"} height={"80%"} width={"80%"} />
        </Content>
    )
};