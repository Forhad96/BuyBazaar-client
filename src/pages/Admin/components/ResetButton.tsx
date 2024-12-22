import { Button } from '@/components/ui/button';
import React from 'react';

interface ResetButtonProps {
    onReset: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <Button variant="secondary" color="secondary" onClick={onReset}>
            Reset
        </Button>
    );
};

ResetButton.displayName = 'ResetButton';