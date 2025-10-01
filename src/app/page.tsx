import Link from "next/link";
export default function Home() {
  return (
    <div>
   <p>this is home</p>
   <div className="flex min-h-screen items-center justify-center ">
    Click  <Link href="/documents/123">` MEEE  `</Link> </div>
   </div>

  );
  
}
