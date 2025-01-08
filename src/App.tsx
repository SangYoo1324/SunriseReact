import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import MainPage from "./routes/MainPage"
import Visitors from "./routes/VisitorsPage"
import News from "./routes/NewsPage"
import Youth from "./routes/YouthPage"
import Resources from "./routes/ResourcesPage"
import Photos from "./routes/photos/Photos"
import ViewPhoto from "./routes/photos/ViewPhoto"

function App() {
  

  return (
    <Routes>
      <Route path= "/" element={<MainPage/>}/>
      <Route path= "/visitors" element={<Visitors/>}/>
      <Route path= "/youth" element={<Youth/>}/>
      <Route path= "/news" element={<News/>}/>
      <Route path= "/resources" element={<Resources/>}/>
      <Route path= "/photos" element={<Photos/>}/>
      <Route path="photo/:id" element={<ViewPhoto/>}/>
      </Routes>
  )
}

export default App
