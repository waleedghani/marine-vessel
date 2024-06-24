import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import "../../assets/css/commonStyle.css";
import { useGetPagesQuery } from '../../RTK/service';
import { Skeleton } from "antd";

const TermConditions = () => {
    const { data, error, isLoading } = useGetPagesQuery();

    const termData = data?.response?.data?.filter((a) => a.slug === "term-and-condition");

    console.log(termData, "termData");


    return (
        <>
            <Header bg={"#146dfa"} />
            <section>
                <div className="container pt-5">
                    <h2 className='text-dark text-center'>
                        {
                            isLoading ? (
                                <Skeleton />
                            ) : (
                                termData?.[0]?.title
                            )
                        }
                    </h2>
                    <p className='text-dark'>
                        {
                            isLoading ? (
                                <Skeleton />
                            ) : (
                                termData?.[0]?.content
                            )
                        }
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default TermConditions;
