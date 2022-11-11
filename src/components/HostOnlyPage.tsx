import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

interface IHostOnlyPage {
  children: React.ReactNode;
}

export default function HostOnlyPage({ children }: IHostOnlyPage) {
  const { user, userLoading } = useUser();
  const naviate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!user?.is_host) {
        naviate("/");
      }
    }
  }, [userLoading, user, naviate]);
  return <>{children}</>;
}
