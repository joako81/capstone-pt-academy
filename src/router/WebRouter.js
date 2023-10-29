import React from "react";
import { Routes, Route } from "react-router-dom";
import { WebLayout } from "../layouts";
import {
  Home,
  Courses,
  Blog,
  Contact,
  Post,
  About,
  CoursePage as Course,
} from "../pages/web";

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(WebLayout, Home)} />

      <Route path="/courses" element={loadLayout(WebLayout, Courses)} />
      <Route path="/course/:path" element={loadLayout(WebLayout, Course)} />
      <Route path="/contact" element={loadLayout(WebLayout, Contact)} />
      <Route path="/blog" element={loadLayout(WebLayout, Blog)} />
      <Route path="/blog/:path" element={loadLayout(WebLayout, Post)} />
      <Route path="/about" element={loadLayout(WebLayout, About)} />
    </Routes>
  );
}
