import React from "react";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { InstagramIcon } from "~/components/icons/InstagramIcon";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="mx-auto w-4/5 flex flex-col items-center justify-center gap-4">
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Tobias Spilleman
                </p>
            </div>
        </footer>
    );
}
