import React, { lazy } from "react";
import Head from "../Helper/Head/Head";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import Loading from "../Helper/Loading/Loading";
import { Error } from "../Inputs/style";
import { GET_STATS } from "../../services/apiUrl";
import { Suspense } from "react";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS();

      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
