import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useState } from 'react';
import { clsx } from 'clsx';

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox({ checked, ...props }: CheckboxProps) {
    const [state, setState] = useState<CheckboxPrimitive.CheckedState>(
        checked ?? 'indeterminate'
    );

    return (
        <CheckboxPrimitive.Root
            {...props}
            onCheckedChange={setState}
            className={clsx(
                'w-4 h-4 rounded-full text-gray-100 flex items-center justify-center',
                {
                    'bg-purple-700 hover:bg-purple-300': state === true,
                    'ring-1 ring-blue-300 hover:bg-blue-700 hover:bg-opacity-20':
                        state !== true,
                }
            )}
        >
            <CheckboxPrimitive.Indicator className="">
                <Check className="w-3 h-3" weight="bold" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}
