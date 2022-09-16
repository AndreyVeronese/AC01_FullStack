import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Homepage } from '../cadastro/homepage';

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='*' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Homepage />} />
        </Routes>
        </BrowserRouter>
    );
}