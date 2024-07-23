import React from 'react';
import { Link } from 'react-router-dom';


export default function ErrorPage() {
  return (
    <>
      <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="justify-center my-20 display h-64" style={{ width: '80%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <h1 className="text-4xl">Oops</h1>
          <h2 className="text-2xl">This page is not found!</h2>
          <Link to='/'>
            <button className="py-3 px-8 bg-red-500 text-white rounded-md text-xl hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Go Home</button>
          </Link>
        </div>
      </section>
    </>
  );
}
