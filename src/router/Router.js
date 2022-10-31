import { Route, Routes } from "react-router-dom";
import Home from "../view/home/Home";
import E404 from "../components/errors/E404";
import Quiz from "../view/quiz/Quiz";
import Parahrase from "../view/paraprase/Parahrase";
import Abaut from "../view/abaut/Abaut";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/paraphrase" element={<Parahrase />} />
      <Route path="/abaut" element={<Abaut />} />

      <Route path="*" element={<E404 />} />
    </Routes>
  );
}
export default Router;
