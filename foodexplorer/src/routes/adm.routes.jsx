import {Routes, Route} from 'react-router-dom'


import {HomeAdm} from '../pages/Home Adm'
import {MenuAdm} from '../pages/Menu Adm'
import {NovoPrato} from '../pages/Novo Prato Adm'
import {EditarPrato} from '../pages/Editar Prato Adm'



export function AdmRoutes(){
    return(
        <Routes>
            <Route path='/' element={<HomeAdm />}/>
            <Route path='/menuadm' element={<MenuAdm />}/>
            <Route path='/novoprato' element={<NovoPrato />}/>
            <Route path='/editarprato' element={<EditarPrato />}/>
        </Routes>
    )
}