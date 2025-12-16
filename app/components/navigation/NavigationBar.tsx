
import React from "react";
import { Link } from "react-router";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { InstagramIcon } from "~/components/icons/InstagramIcon";

export function NavigationBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md h-16 flex items-center justify-center">
            <div className="w-4/5 flex items-center">
                <h1 className="text-xl font-bold">Tobias Spilleman</h1>
                <div className="ml-auto flex items-center gap-6">
                    <Link to="/blog" className="text-black font-semibold">Blog</Link>
                    <Link to="/books" className="text-black font-semibold">Books</Link>
                    <a
                        href="https://instagram.com/tobiasspilleman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                        aria-label="Instagram"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://github.com/tobiasspilleman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </nav>
    );
}