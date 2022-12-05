import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaChromecast, FaCircle, FaGithubSquare, FaTwitter, FaHeart, FaCriticalRole } from "react-icons/fa";

function App() {



  const [card1, setcard1] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setcard1(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-xl-8">
            <FaChromecast className='fs-1 fw-bold ' />
          </div>

          <div className="col-xl-4 d-flex justify-content-end">
            <h4 className='menu'>Docs</h4>
            <h4 className='menu mx-4'>About</h4>
            <p className='btn btn-outline-warning fw-bold text-dark'>SUPPORT US</p>
          </div>
        </div>

        <h1 className='fw-bold display-1 my-5 py-5 text-center'>The Rick And Morty Api</h1>
      </div>




      <div className="bg-dark">
        <div className="container">
          <div className="row">


            {
              card1.map((k, a) => {
                return (
                  <div key={a} className="col-xl-6" >
                    <div className="d-flex bg-white-black h-75 rounded-4 mt-5">
                      <img src={k.image} className='rounded-start' />
                      <div className='text-white p-3'>
                        <h3>{k.name}</h3>
                        {/* <p>{k.gender}</p> */}
                        {/* <p>{k.id}</p> */}
                        <p><FaCircle className='text-danger' /> {k.species} - {k.status}</p>
                        {/* <p>{k.status}</p> */}
                        {/* <p>{k.type}</p>
                            <p>{k.url}</p> */}
                        <p className='opacity-75'>last know location</p>
                        <p>{k.location.name}</p>

                        <p className='opacity-75'>first seen in</p>
                        <p>{k.origin.name}</p>

                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>



        </div>

        <div className='d-flex text-white justify-content-center'>
          <p>CHARACTER:826</p>
          <p className='mx-4'>LOCATION:826</p>
          <p>EPISODES:826</p>
        </div>
        <p className='text-white text-center'>SERVER STATUS  <FaCircle className='text-success fs-6' /> </p>
        <div className='text-white text-center  opacity-75'>
          <FaGithubSquare />
          <FaTwitter className='mx-4' />
          <FaHeart />
        </div>

        <div className='text-white d-flex bgtheme col-xl-2 mx-auto mt-4 justify-content-center'>

          <FaCriticalRole className=' fs-1 mt-2 ' />
          <div className='text-white '>
            <p className='mb-0 ms-3 mt-1'>DEPLOYS by</p>
            <h4 className='ms-3'>netlify</h4>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-4'>

          <p className='text-white opacity-75'> by</p>
          <a href="#" className='text-white mx-1'>Axel Fuhrmann</a>
          <p className='text-white opacity-75'>2022</p>
        </div>
      </div>






    </>

  );
}

export default App;
