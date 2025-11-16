import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landinge_page/home/Hero";

describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        
        // Use getByAltText instead of getAllByLabelText
        const heroImage = screen.getByAltText("Hero Image");
        
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/image/homeHero.png");
    });

    test("renders signup button", () => {
        render(<Hero />);
        
        // Use getByAltText instead of getAllByLabelText
        const signupButton = screen.getByRole("button", { name: "Signup Now" });
        
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});