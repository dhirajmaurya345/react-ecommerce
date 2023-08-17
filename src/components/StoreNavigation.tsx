import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
//import { FontAwesome5 } from '@expo/vector-icons';

const navigation = {
  pages: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Features", href: "#" },
    { name: "Product", href: "#" },
    { name: "Pricing", href: "/Pricing" },
    { name: "Features", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "More", href: "#" },
  ],
  More: [
    { name: "Blog", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Support KB", href: "#" },
    { name: "The Owl Punnery", href: "#" },
  ],
};



interface headerProps {
  headerNames?: string[];
  children?: React.ReactNode;
}

const StoreNavigation: React.FC<headerProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 pt-20" />
            </Transition.Child>

            <div className="fixed inset-0 pt-20 z-40 flex ">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-100 transform"
                enterFrom="-translate-y-6"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-y-6"
                leaveTo="-translate-y-1"
              >
                <Dialog.Panel className="relative w-full  overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root text-lg space-y-1 font-sans">
                      {navigation.pages.map((page) =>
                        page.name === "More" ? (
                          <div>
                            {" "}
                            {
                              <div>
                                {navigation.More.map((More) => (
                                  <NavLink
                                    key={More.name}
                                    to={More.href}
                                    className="-m-3 block p-3 font-medium text-gray-900"
                                  >
                                    {More.name}
                                  </NavLink>
                                ))}
                              </div>
                            }
                          </div>
                        ) : (
                          <NavLink
                            key={page.name}
                            to={page.href}
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            {page.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  </div>

                  <div className="space-y-6  px-4 py-5">
                    <div className="border">
                      <NavLink key={2} to={"/SignIn"} className="">
                        <span>
                          {" "}
                          <CalendarIcon className="h-7 w-7" />
                          Schedule a demo
                        </span>
                      </NavLink>
                    </div>
                    <div className="flow-root border bg-orange-300 p-3 rounded-s-sm">
                      <a href="#" className="mt-auto items-center">
                        start a free trail
                      </a>
                    </div>
                    <span>30 days free. No credit card needed.</span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-8"
          >
            <div className="">
              <div className="flex h-20 items-center">
                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <NavLink key={3} to={"/"}>
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="https://dyzz9obi78pm5.cloudfront.net/app/image/id/5fdb1402ad121ca212c4007d/n/logo.svg"
                      alt=""
                    />
                  </NavLink>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-40">
                  <div className="flex h-full space-x-6">
                    {navigation.pages.map((page) =>
                      page.name === "More" ? (
                        <a className="flex items-center text-sm font-medium">
                          <div className="relative">
                            <button
                              onClick={() => setIsOpen((pr) => !pr)}
                              id="dropdownDefaultButton"
                              data-dropdown-toggle="dropdownId"
                              className="text-gray-800 text-lg  font-semibold rounded-lg  px-5 py-2.5 text-center inline-flex items-center"
                              type="button"
                            >
                              {page.name}{" "}
                              <svg
                                className="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="m1 1 4 4 4-4"
                                />
                              </svg>
                            </button>
                            {isOpen && (
                              <div className=" absolute left-0 -right-20 font-semibold font-sans border rounded-2xl divide-y divide-white bg-white">
                                {navigation.More.map((More) => (
                                  <NavLink
                                    key={More.name}
                                    to={More.href}
                                    className="block px-4 text-lg rounded-sm mt-2 mb-2  hover:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                                  >
                                    {More.name}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        </a>
                      ) : (
                        <NavLink
                          key={page.name}
                          to={page.href}
                          className="flex items-center text-lg font-semibold font-sans text-gray-800 hover:text-gray-800"
                        >
                          {page.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  {/* Login */}
                  <div className="flex lg:ml-6">
                    <NavLink
                      key={1}
                      to="/Cart"
                      className="group flex items-center p-3"
                    >
                      <span className=" text-lg font-sans font-semibold text-gray-900 group-hover:text-gray-800">
                        Log in
                      </span>
                    </NavLink>
                  </div>
                  {/* Sign Up */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <NavLink
                      key={1}
                      to="/SignIn"
                      className="group  items-center p-3 ml-auto"
                    >
                      <span className="sm:ml-3">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-sm bg-orange-300  px-7 py-3 text-sm font-semibold text-black shadow-sm hover:bg-orange-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign Up
                        </button>
                      </span>
                    </NavLink>
                  </div>
                  {open ? (
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-7 w-7 " aria-hidden="true" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="relative rounded-md bg-white p-2 text-gray-900 lg:hidden"
                      onClick={() => setOpen(true)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-7 w-7 " aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default StoreNavigation;
