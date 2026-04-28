import Navbar from "./Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout