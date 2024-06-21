import { Routes, Route } from 'react-router-dom'

import { EditProduct } from '../pages/EditProduct'
import { Home } from '../pages/Home'
import { NewProduct } from '../pages/NewProduct'
import { Product } from '../pages/Product'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewProduct />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/edit' element={<EditProduct />} />
      <Route path="*" element={<div>Rota não encontrada</div>} />
    </Routes>
  )
}
