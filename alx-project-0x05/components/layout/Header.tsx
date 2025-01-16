import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

/**
 * The Header component renders the navigation bar of the app.
 *
 * @returns A React component that renders the navigation bar.
 */
export const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current path name
  const { count } = useCount(); // Get the current count from the CountContext

  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* The logo of the app */}
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
          
        </Link>

        {/* Button Group. Shows different buttons based on the current path name */}
        <div className="flex gap-4">
          {
             !["/counter-app"].includes(pathname) ? (
              /* If the path name is not /counter-app, show the Sign In and Sign Up buttons */
              <>
              <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          /></>
            ) : (
              /* If the path name is /counter-app, show the current count */
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }
          
        </div>
      </div>
    </header>
  );
};

export default Header;