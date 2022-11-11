import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

interface IProtectedPageProps {
  children: React.ReactNode;
}

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { user, isLoggedIn, userLoading } = useUser();
  const naviate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        naviate("/");
      }
    }
  }, [userLoading, isLoggedIn, naviate]);
  return <>{children}</>;
}
