import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PROJECT } from '../queries/projectQueries';

export default function Project() {
    const { id} = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  return (
    <div>Project</div>
  )
}
