"use client";
import { Rules } from "@/models/Rules";
import React from "react";
import { Box, Text } from "..";
import { StyledRuleCardBox, StyledRuleCardPropertyText } from "./styles";

interface Props {
  rule: Rules;
}

const RuleCard: React.FC<Props> = ({ rule }) => {
  return (
    <StyledRuleCardBox>
      <Box direction="row" gap="10px">
        <StyledRuleCardPropertyText>Nombre:</StyledRuleCardPropertyText>
        <Text fontSize="1.25rem" fontWeight="500">
          {rule.fact}
        </Text>
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
