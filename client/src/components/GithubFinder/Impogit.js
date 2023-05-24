import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./componentsss/layout/Nav";
import Footer from "./componentsss/layout/Footer";
import Alert from "./componentsss/layout/Alert";
import Find from "./store/Finder";

import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function Git() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="flex flex-col justify-between h-screen">
          <Nav />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="daisyui">
                      <Alert />
                    </div>
                    <Find />
                  </>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default Git;
