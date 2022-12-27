import { ButtonHTMLAttributes } from "react";
import { ButtonProps } from "../Button";
export interface GoogleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}
export default function GoogleButton(props: GoogleButtonProps) {
  return (
    <button className="group h-12 w-[8rem] md:w-[12rem] px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-teal-400 focus:bg-teal-50 active:bg-teal-100 flex items-center justify-center"
      {...props}>
      <div className="relative flex items-center space-x-4 justify-center">
        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="w-5" alt="google logo" />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-teal-600 sm:text-base">Google</span>
      </div>
    </button>
  )
}
