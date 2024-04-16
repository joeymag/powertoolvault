import GooglesMaps from "@/components/GooglesMaps";
import Sidebar from "@/components/Sidebar";

export default function Dashbord() {




  return (
    <div className="flex flex-auto" >
      <Sidebar className="columns-2"/>
        <GooglesMaps className="flex flex-auto"/>



    </div>
  )
}
