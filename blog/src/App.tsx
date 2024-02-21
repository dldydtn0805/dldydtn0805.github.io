import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/posts/" element={<PostPage></PostPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
