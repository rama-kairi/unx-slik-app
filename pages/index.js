import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <section className="hero-sction">
        <Header />
        <div className="content">
          <div className="container">
            <div className="top-content">
              <h1>
                The Best Way to <br />
                <span className="text-gradiant">Track your Daily Progress</span>
              </h1>
              <p>
                UNX Allows you to track all your daily task progress using
                gamification methods and earn rewards for specific coupons
              </p>
              <a href="#" className="main-btn">
                Try this app
              </a>
            </div>
            <div className={"image-container"}>
              <img src="/unx.png" alt="image" />
            </div>
            <span className="bolb"></span>
            <span className="bolb-2"></span>
          </div>
        </div>
      </section>
    </main>
  );
}
