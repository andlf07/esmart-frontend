"use client";
import { useDeleteRule } from "@/hooks";
import useBulletMenu from "@/hooks/useBulletMenu";
import { Rules } from "@/models/Rules";
import { MenuItem } from "@mui/material";
import React from "react";
import { Box, BulletMenu, Text } from "..";
import { StyledRuleCardBox, StyledRuleCardPropertyText } from "./styles";

interface Props {
  rule: Rules;
}

const RuleCard: React.FC<Props> = ({ rule }) => {
  const bulletMenuHandlers = useBulletMenu();
  const { handleDeleteRule } = useDeleteRule();

  const handleOnClickDeleteMenu = () => {
    handleDeleteRule(rule.id);
    bulletMenuHandlers.handleClose();
  };

  return (
    <StyledRuleCardBox>
      <Box direction="row" justifyContent="space-between">
        <Box direction="row" gap="10px">
          <StyledRuleCardPropertyText>Nombre:</StyledRuleCardPropertyText>
          <Text fontSize="1.25rem" fontWeight="500">
            {rule.fact}
          </Text>
        </Box>
        <BulletMenu handlers={bulletMenuHandlers}>
          <MenuItem onClick={handleOnClickDeleteMenu}>Elminar</MenuItem>
        </BulletMenu>
      </Box>
      <Box direction="row" gap="10px">
        <StyledRuleCardPropertyText>Check key:</StyledRuleCardPropertyText>
        <Text fontSize="1.25rem" fontWeight="500">
          {rule.checkKey}
        </Text>
      </Box>
      <Box direction="row" gap="10px">
        <StyledRuleCardPropertyText>
          Descripcion:{" "}
          <Text fontSize="1.25rem" fontWeight="500">
            {rule.description}
          </Text>
        </StyledRuleCardPropertyText>
      </Box>

      <Box direction="row" gap="10px">
        <StyledRuleCardPropertyText>Operador:</StyledRuleCardPropertyText>
        <Text fontSize="1.25rem" fontWeight="500">
          {rule.operator}
        </Text>
      </Box>
    </StyledRuleCardBox>
  );
};

export default RuleCard;
