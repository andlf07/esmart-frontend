import { ruleOperators } from "@/consts/rulesOperator";
import { useAddRule } from "@/hooks";
import { MenuItem } from "@mui/material";
import React from "react";
import {
  Box,
  Button,
  FormInputController,
  InputSelectController,
  Modal,
  Spinner,
  Text,
} from "..";
import { StyledAddRuleModalFieldsBox } from "./styles";

interface Props {
  sensorId?: string;
  isOpen: boolean;
  handleClose: () => void;
}

const keysCanCheck = ["temperature", "humidity", "flow", "pressure"];

const AddRuleModal: React.FC<Props> = ({ sensorId, isOpen, handleClose }) => {
  const { control, errors, handleSubmit, loading, onSubmit } = useAddRule(
    handleClose,
    sensorId
  );

  return (
    <Modal open={isOpen} onClose={handleClose}>
      {loading ? (
        <Spinner
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          alignItems="center"
          justifyContent="space-around"
          height="100%"
        >
          <Box>
            <Text fontSize="2rem" fontWeight="600" textAlign="center">
              Agregar Regla
            </Text>
            <Text fontSize="1.1rem" textAlign="center">
              Ingresa los parametros para crear una regla para este sensor.
            </Text>
          </Box>
          <StyledAddRuleModalFieldsBox>
            <Box gap="10px">
              <Box>
                <Text>Nombre de la Regla</Text>
                <FormInputController
                  options={{
                    required: {
                      message: "fact is required.",
                      value: true,
                    },
                  }}
                  control={control}
                  name="fact"
                  label="Nombre de la regla"
                  type="text"
                />
              </Box>
              <Box>
                <Text>Descripcion:</Text>
                <FormInputController
                  options={{
                    required: {
                      message: "description is required.",
                      value: true,
                    },
                  }}
                  control={control}
                  name="description"
                  label="Descripcion de la regla"
                  type="text"
                />
              </Box>
            </Box>
            <Box gap="10px">
              <Box>
                <Text>Operador:</Text>
                <InputSelectController
                  control={control}
                  name="operator"
                  label="Operador de la regla."
                >
                  {ruleOperators.map((rule: any, index: number) => {
                    return (
                      <MenuItem key={index} value={rule}>
                        {rule}
                      </MenuItem>
                    );
                  })}
                </InputSelectController>
              </Box>
              <Box>
                <Text>Valor:</Text>
                <FormInputController
                  options={{
                    required: {
                      message: "value is required.",
                      value: true,
                    },
                  }}
                  control={control}
                  name="value"
                  label="Valor de la regla"
                  type="text"
                />
              </Box>
              <Box>
                <Text>Campo a verificar:</Text>
                <InputSelectController
                  control={control}
                  name="checkKey"
                  label="checkKey de la regla."
                >
                  {keysCanCheck.map((key: any, index: number) => {
                    return (
                      <MenuItem key={index} value={key}>
                        {key}
                      </MenuItem>
                    );
                  })}
                </InputSelectController>
              </Box>
            </Box>
          </StyledAddRuleModalFieldsBox>
          <Box width="50%">
            <Button type="submit">Register</Button>
          </Box>
        </Box>
      )}
    </Modal>
  );
};

export default AddRuleModal;
