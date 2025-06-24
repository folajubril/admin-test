import React,{useEffect} from "react";
import Header from "@components/header";
import { Poppins } from 'next/font/google';
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
});

interface Props {
    children: React.ReactNode;
  }

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
   useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, [router]);
  
  return (
    <div className={poppins.className}>
    <div className="container mx-auto p-4 flex flex-col">
      <Header />
      <main className="flex flex-col my-[80px]">{children}</main>
     
    </div>
  </div>
  );
};


export default Layout;