import { ButtonProps } from "../Button";

export default function FacebookButton(props: ButtonProps) {
  return (
    <button className="group h-12 w-[8rem] md:w-[12rem] px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                            hover:border-teal-400 focus:bg-teal-50 active:bg-teal-100" onClick={props.onClick}>
      <div className="relative flex items-center space-x-4 justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="w-5" alt="Facebook logo" />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-teal-600 sm:text-base">Facebook</span>
      </div>
    </button>
  )
}
