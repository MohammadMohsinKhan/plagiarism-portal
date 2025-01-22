import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          SyntaxSentinals
        </Link>
        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name}
              </span>
              <Button
                variant="outline"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button 
              className="bg-primary hover:bg-primary/90" 
              onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;