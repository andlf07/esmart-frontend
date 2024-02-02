import { LoginInput } from "@/models/LoginInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateUser, useHandleRegisterModal } from ".";

const useRegisterUser = () => {
  const { handleRegisterModal, isOpenModal } = useHandleRegisterModal();
  const { handleCreateUser, loading } = useCreateUser();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInput>({});

  const onSubmit: SubmitHandler<LoginInput> = async (data, e: any) => {
    e.preventDefault();
    await handleCreateUser(data.username);
  };

  return {
    onSubmit,
    handleSubmit,
    control,
    errors,
    isOpenModal,
    handleRegisterModal,
    loading,
  };
};
export default useRegisterUser;
