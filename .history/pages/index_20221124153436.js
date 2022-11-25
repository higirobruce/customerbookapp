import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/layout/sidebar";
import MainScreen from "../components/layout/mainScreen";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-row py-2">
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default Home;
