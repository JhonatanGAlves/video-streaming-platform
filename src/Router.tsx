import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Login</div>} />
      <Route path="/event" element={<Home />} />
    </Routes>
  )
}