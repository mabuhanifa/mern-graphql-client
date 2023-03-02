import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function DeleteProjectButton({projectId}) {
    const navigate = useNavigate();

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' >
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  )
}
