import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useQuery } from "react-query";
import axios from "./utils/axios";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Hero from "../src/components/Hero/Hero";
import AllQuestion from "./containers/Post/AllQuestion";
import Navbar from "../src/components/Navbar/Navbar";
import Product from "../src/components/Products/Product";
import Group from "./containers/Group/Group";
import Descp from "./containers/Descp/Descp";
import Post from "./containers/Post/Post";
import New from "./containers/NewPost/New";
import Question from "./containers/ViewQuestion/Question";
import Javascript from "./containers/Descp/Javascript";
import Python from "./containers/Descp/python";
import Cplus from "./containers/Descp/cplus";
import Csharp from "./containers/Descp/csharp";
import Kotlin from "./containers/Descp/kotlin";
import C from "./containers/Descp/c";
import Go from "./containers/Descp/go";
import Dart from "./containers/Descp/dart";
import Typescript from "./containers/Descp/typescript";
import PHP from "./containers/Descp/php";
import D from "./containers/Descp/d";
import Swift from "./containers/Descp/swift";
import Ruby from "./containers/Descp/ruby";
import Video from "./components/VideoCall/videohome/vid";
import Room from "./components/VideoCall/videohome/Room";
import Resbody from "./components/Resume/ResBody/ResBody";
import Git from "./components/GithubFinder/Impogit";
import About from "./components/GithubFinder/store/About";
import Usergit from "./components/GithubFinder/store/UserGit";
import NotFound from "./components/GithubFinder/store/NotFound";
import { GithubProvider } from "./components/GithubFinder/context/github/GithubContext";
import { AlertProvider } from "./components/GithubFinder/context/alert/AlertContext";
import All from "./components/CodeEditor/Codea";

function App() {
  const { setUser } = useAuth();
  const { isLoading, data } = useQuery("user", async () => {
    const res = await axios.get("/auth/currentuser");
    return res.data;
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user);
    }
  }, [data?.user]);

  return (
    <div>
      <GithubProvider>
        <AlertProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/group" element={<Group />} />
            <Route path="/descp" element={<Descp />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/New" element={<New />} />
            {/* <Route path="/Question" element={<Question />} /> */}
            <Route path="/javascript" element={<Javascript />} />
            <Route path="/python" element={<Python />} />
            <Route path="/cplus" element={<Cplus />} />
            <Route path="/csharp" element={<Csharp />} />
            <Route path="/kotlin" element={<Kotlin />} />
            <Route path="/go" element={<Go />} />
            <Route path="/dart" element={<Dart />} />
            <Route path="/typescript" element={<Typescript />} />
            <Route path="/php" element={<PHP />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
            <Route path="/swift" element={<Swift />} />
            <Route path="/ruby" element={<Ruby />} />
            <Route path="/vid" element={<Video />} />
            <Route path="/room/:roomID" element={<Room />} />c{" "}
            <Route path="/all" element={<All />} />
            <Route path="/resume" element={<Resbody />} />
            <Route path="/git" element={<Git />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<Usergit />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AlertProvider>
      </GithubProvider>
    </div>
  );
}

export default App;
