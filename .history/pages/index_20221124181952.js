import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/layout/sidebar";
import MainScreen from "../components/layout/mainScreen";
import 'semantic-ui-css/semantic.min.css'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-row">
      {/* <Sidebar /> */}
      <MainScreen />
    </div>
  );
};

export default Home;
