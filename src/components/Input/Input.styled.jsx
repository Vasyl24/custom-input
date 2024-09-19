import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  color: var(--colors-text-text-primary-900, #1a1a1e);

  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

export const InfoIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 323px;
`;

export const InputArea = styled.input`
  display: flex;
  width: 323px;
  padding: var(--spacing-md, 8px) var(--spacing-lg, 12px) 8px 36px;
  gap: var(--spacing-md, 8px);

  border-radius: var(--radius-xs, 4px);
  border: 1px solid var(--Colors-Border-border-primary, #d1d1d6);
  background: var(--Colors-Background-bg-primary, #fff);

  color: var(--colors-text-text-primary-900, #1a1a1e);
  text-overflow: ellipsis;

  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px; /* 166.667% */

  margin-bottom: 8px;

  & ::placeholder {
    color: #1a1a1e;

    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }

  &::-webkit-input-placeholder {
    color: #1a1a1e;
  }

  &::-moz-placeholder {
    color: #1a1a1e;
  }

  &:-ms-input-placeholder {
    color: #1a1a1e;
  }

  &::-ms-input-placeholder {
    color: #1a1a1e;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 12px;
  left: 16px;

  width: 16px;
  height: 16px;
`;

export const HelpIcon = styled.svg`
  position: absolute;
  top: 12px;
  right: 52px;

  width: 16px;
  height: 16px;
`;

export const Badge = styled.span`
  position: absolute;
  top: 8px;
  right: 12px;

  padding: var(--spacing-none, 2px) var(--spacing-sm, 6px);

  border-radius: var(--Label-border-radius-xs, 4px);
  border: 1px solid
    var(--Component-colors-Utility-Gray-utility-gray-200, #e4e4e7);
  background: var(--Component-colors-Utility-Gray-utility-gray-50, #fafafa);
`;
