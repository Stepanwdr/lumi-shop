'use client';
import { Search } from 'lucide-react';
import styled from 'styled-components';
import { Input } from "@/shared/ui/Input";


export function SearchBar() {
  return (
    <Wrapper>
      <Icon size={20} />
      <StyledInput placeholder="Искать в LuMi" />
    </Wrapper>
  );
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
`;

const Icon = styled(Search)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: var(--color-text-muted);
`;

const StyledInput = styled(Input)`
  padding-left: 44px;
`;