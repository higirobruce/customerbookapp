import Head from "next/head";
import Image from "next/image";
import Sidebar from "../layout/sidebar";
import MainScreen from "../layout/mainScreen";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-row py-2">
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default Home;
