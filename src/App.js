import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import VideoGallery from './components/Gallery/VideoGallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the wrapper
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/academics', element: <AcademicsPage /> },
      { path: '/admissions', element: <AdmissionsPage /> },
      { path: '/faculty', element: <FacultyPage /> },
      { path: '/students', element: <StudentsPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/video', element: <VideoGallery /> },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
