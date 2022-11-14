import React, { useState, useContext } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { EditorContext } from "@/Pages/Templates/EditorProvider";

export default function Navigation({ showLeftNavigation = true }) {
    const { auth } = usePage().props;
    const { setIsOpen } = useContext(EditorContext);

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <nav className="bg-white border-b border-gray-100">
            {/* desktop nav */}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* left navigation */}
                    <div className="flex flex-grow">
                        {/* application logo */}
                        <div className="flex items-center space-x-1 shrink-0">
                            {route().current("templates.new") && (
                                <button
                                    onClick={() =>
                                        setIsOpen(
                                            (isOpen) => (isOpen = !isOpen)
                                        )
                                    }
                                >
                                    <Bars3BottomLeftIcon className="w-5 h-5" />
                                </button>
                            )}

                            <Link href="/">
                                <ApplicationLogo className="block w-auto text-gray-500 h-9" />
                            </Link>
                        </div>

                        {/* links */}
                        {showLeftNavigation && (
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("templates.index")}
                                    active={route().current("templates.index")}
                                >
                                    Browse
                                </NavLink>

                                {auth?.user ? (
                                    <>
                                        <NavLink
                                            href={route("templates.new")}
                                            active={route().current("new")}
                                        >
                                            New
                                        </NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink
                                            className=""
                                            href={route("login")}
                                            active={route().current("login")}
                                        >
                                            Login
                                        </NavLink>

                                        <NavLink
                                            className="ml-auto"
                                            href={route("register")}
                                            active={route().current("register")}
                                        >
                                            Register
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* right navigation */}
                    {auth?.user && (
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="relative ml-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                            method="get"
                                        >
                                            Profile
                                        </Dropdown.Link>

                                        <Dropdown.Link
                                            className="text-2xl"
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    )}

                    {/* hamgburger toggler */}
                    <div className="flex items-center -mr-2 sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                        >
                            <svg
                                className="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* responsive nav */}
            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " sm:hidden"
                }
            >
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>
                {auth?.user && (
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
