import { LoginInput } from "@/models/LoginInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthLogin } from ".";

const useLogin = () => {
  const { handleAuthLogin, loading } = useAuthLogin();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInput>({});

  const onSubmit: SubmitHandler<LoginInput> = async (data, e: any) => {
    e.preventDefault();
    await handleAuthLogin(data.username);
  };

  return {
    loading,
    onSubmit,
    handleSubmit,
    control,
    errors,
  };
};

export default useLogin;
