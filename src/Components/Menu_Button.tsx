import React from 'react';

export type MenuButtonProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    isSelected?: boolean;
};

/**
 * Basic accessible Menu Button component.
 * - label: visible text (defaults to "Menu")
 * - icon: optional leading icon (React node)
 * - ariaLabel: accessibility label (falls back to label)
 */
const MenuButton: React.FC<MenuButtonProps> = ({
    label ,
    onClick,
    ariaLabel,
    disabled = false,
    className = 'MenuButton',
    isSelected = false,
}) => {
    return (
        <button
            type="button"
            className={`${className}`.trim()}
            onClick={onClick}
            aria-label={ariaLabel ?? label}
            disabled={disabled}
            style={{
        width: '15em', 
        outline: isSelected ? '1px solid white' : 'none',
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 

            }}
        >
            <span className="menu-button__label">{label}</span>
        </button>
    );
};

export default MenuButton;