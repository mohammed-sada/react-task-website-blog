import { useContext, useState } from "react";

import { Input, Button, Screen, Spinner } from "../components/UI";
import AuthContext from "../context/AuthContext";
import { Credentials } from "../types";

export default function Login() {
  const { login, loading } = useContext(AuthContext);

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <Screen>
      <form
        className="flex flex-col items-center justify-center py-10 h-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="w-full lg:w-1/2">
          <Input
            name="email"
            label="Email"
            type={"email"}
            placeholder="Enter your email"
            value={credentials.email}
            onChange={(email) => setCredentials((prev) => ({ ...prev, email }))}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" // pattern for an email
            required
          />

          <div className="flex flex-col items-center mt-5">
            <Button
              name={"signin"}
              label="Sign in"
              type="submit"
              disabled={loading}
            />
            {loading && <Spinner />}
          </div>
        </div>
      </form>
    </Screen>
  );
}
