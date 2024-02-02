import { CreateRule } from "@/models/CreateRule";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateRule from "./useCreateRule";

const useAddRule = (closeModal: () => void, sensorId?: string) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateRule>({});
  const { handleCreateRule, loading } = useCreateRule();

  const onSubmit: SubmitHandler<CreateRule> = async (data, e: any) => {
    e.preventDefault();
    data.sensor_id = sensorId || "";
    await handleCreateRule(data);
    closeModal();

    reset({});
  };

  return { onSubmit, handleSubmit, control, loading, errors };
};

export default useAddRule;
