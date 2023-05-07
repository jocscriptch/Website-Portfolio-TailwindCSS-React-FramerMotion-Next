import { useState, useEffect } from 'react';
import Head from 'next/head'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import Layout from '@/components/Layout';
import AnimateText from '@/components/AnimateText';
import TransitionEffect from '@/components/TransitionEffect'

function Repositories() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchRepositories() {
            const response = await fetch('https://api.github.com/users/jocscriptch/repos');
            const data = await response.json();
            setRepositories(data);
        }
        fetchRepositories();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <div style={{ color: 'blue' }}></div>,
        nextArrow: <div style={{ color: 'green' }}></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Head>
                <title>Jocsan Ramirez | Projects</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimateText text="My Repositories With API GitHub!"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                    <div className="bg-dark-100 py-10">
                        <div className="container mx-auto">
                            <Slider {...settings}>
                                {repositories.map((repo) => (
                                    <div key={repo.id}>
                                        <div className="shadow-md rounded-md dark:text-light p-5 mx-2 my-2 flex">
                                            <div className="mr-4">
                                                <Image src={repo.owner.avatar_url} alt={repo.owner.login} className="rounded-full" width="64" height="64" />
                                            </div>

                                            <div className="flex-1">
                                                <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
                                                <p className="text-sm dark:text-light-500 mb-2">{repo.description}</p>
                                                <p className="text-xs dark:text-light-500 mb-2">
                                                    Lenguaje: {repo.language ? repo.language : 'No especificado'}
                                                </p>
                                                <div className="flex flex-col">
                                                    <div className="flex justify-between mb-2">
                                                        <p className="text-xs dark:text-light-500">Estrellas: {repo.stargazers_count}</p>
                                                        <p className="text-xs dark:text-light-500">Visitas: {repo.watchers_count}</p>
                                                    </div>
                                                </div>
                                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white px-2 rounded-md mt-auto w-15">View Repo</a>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </Layout>

            </main>
        </>
    );
}

export default Repositories;

