import React from 'react';
import Head from 'next/head';

export const Meta: React.FC = () => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='favicon.png'></link>
      <link rel='stylesheet' type='text/css' href='nprogress.css'></link>
      <title>Sick Fits!</title>
    </Head>
  );
};
