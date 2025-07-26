import { cn } from '@/lib/utils'
import type IconButtonProps from './IconButtonProps'

export default function IconButton({children, component:Component="button", className, ...rest}:IconButtonProps) {
    return (
        <Component {...rest} className={cn("flex shrink-0 justify-center items-center text-lg w-8 h-8 rounded-full text-app-primary-400 cursor-pointer hover:bg-black/5", className)}>{children}</Component>
    )
}
