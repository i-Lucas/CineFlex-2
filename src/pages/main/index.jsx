import React from "react";
import { useNavigate } from "react-router-dom";

import Title from "../../components/title";
import Header from "../../components/header";
import Loader from "../../components/loader";
import useMovies from "../../hooks/api/movies";

import SomethingWentWrong from "../../components/error";
import { HomeContainer, Content, MovieContainer } from "./style";

export default function Home() {

    const [movies, setMovies] = React.useState([]);
    const { loading, data, error } = useMovies();

    React.useEffect(() => {

        if (!loading) setMovies(data);

    }, [loading]);

    function RenderContent() {

        if (error) return SomethingWentWrong(error);
        if (loading) return <Content><Loader /></Content>;
        return movies.map((element, index) => <MovieCard key={index} props={element} />);
    };

    return (
        <HomeContainer>
            <Header />
            <Content >
                <Title content={"Selecione o filme"} />
                <RenderContent />
            </Content>
        </HomeContainer>
    )
};

function MovieCard({ props }) {

    const navigate = useNavigate();
    const { id, posterURL: img } = props;

    return <MovieContainer src={img} onClick={() => navigate(`/movie/${id}`)} />
};