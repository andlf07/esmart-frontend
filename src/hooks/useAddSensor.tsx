import { CreateSensor } from "@/models/CreateSensor";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSensor } from ".";

const useAddSensor = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateSensor>({});

  const { handleCreateSensor, loading } = useCreateSensor();

  const onSubmit: SubmitHandler<CreateSensor> = async (data, e: any) => {
    e.preventDefault();
    await handleCreateSensor(data.topic);
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    loading,
  };
};

export default useAddSensor;
