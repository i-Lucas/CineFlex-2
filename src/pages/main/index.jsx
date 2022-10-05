import React from "react";

import Header from "../../components/header";
import Loader from "../../components/loader";
import useMovies from "../../hooks/api/movies";
import SomethingWentWrong from "../../components/error";

import MovieCard from "../../components/movie";
import { HomeContainer, Content } from "./style";

export default function Home() {

    const [movies, setMovies] = React.useState([]);
    const { loading, data, error } = useMovies();

    React.useEffect(() => {

        if (!loading) setMovies(data);

    }, [loading]);

    function RenderContent() {

        if (error) return SomethingWentWrong(error);
        if (loading) return RenderLoader();
        return RenderMovies(movies);
    };

    return (
        <HomeContainer>
            <Header />
            <Content >
                <RenderContent />
            </Content>
        </HomeContainer>
    )
};

function RenderLoader() {

    return (
        <Content>
            <Loader color={"#C3CFD9"} height={"80%"} width={"80%"} />
        </Content>
    )
};

function RenderMovies(movies) {
    return movies.map((element, index) => <MovieCard key={index} props={element} />)
};